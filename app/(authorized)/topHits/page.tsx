'use client';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import styles from './page.module.scss';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import { fetcher } from '@/app/Api/fetcher';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import Heading from '@/app/Components/Heading/Heading';
import useSWR from 'swr';

const TopHits = (): JSX.Element => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const year = lastMonth.getFullYear();
  const month = (lastMonth.getMonth() + 1).toString().padStart(2, '0');
  const day = lastMonth.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  const { data: musics } = useSWR<MusicInterface[]>(
    `/musics?topDate=${formattedDate}`,
    fetcher,
  );
  console.log(musics, 'topMusics');
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          <Heading type={HeadingTypeEnum.H5}>Hits</Heading>
        </div>
      </div>
      <div>
        {musics && (
          <HitsCards
            items={musics.slice(0, 9).map((hit) => {
              return {
                backgroundImage: hit.album.history.location,
                album: hit.album,
                name: hit.name,
                src: hit.history.location,
                id: hit.id,
                dropDownItems: [],
              };
            })}
          />
        )}
      </div>
    </div>
  );
};

export default TopHits;
