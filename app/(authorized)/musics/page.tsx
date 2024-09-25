'use client';
import useSWR from 'swr';
import AddToPlaylistButton from '../playlist/components/AddToPlaylistButton/AddToPlaylistButton';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import DownHitsCards from '@/app/Components/DownHitsCards/DownHitsCards';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import { MusicInterface } from '@/app/Interfaces/music.interface';

const TopHits = (): JSX.Element => {
  const date: Date = new Date();
  const lastMonth: Date = new Date(date.setMonth(date.getMonth() - 1));
  const year: number = lastMonth.getFullYear();
  const month: string = (lastMonth.getMonth() + 1).toString().padStart(2, '0');
  const day: number = lastMonth.getDate();
  const formattedDate: string = `${year}-${month}-${day}`;
  const { data: musics } = useSWR<MusicInterface[]>(
    `/musics?topDate=${formattedDate}`,
    fetcher,
  );

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.heading}>
          <Heading type={HeadingTypeEnum.H5}>Hits</Heading>
        </div>
      </div>
      <div>
        {musics && (
          <DownHitsCards
            items={musics.slice(0, 9).map((hit) => {
              const albumHistoryLocation = hit.album?.history?.location || ''; 
              const musicHistoryLocation = hit.history?.location || ''; 
              return {
                backgroundImage: albumHistoryLocation,
                album: hit.album,
                name: hit.name,
                src: musicHistoryLocation,
                id: hit.id,
                dropDownItems: [
                  {
                    title: (
                      <AddToPlaylistButton album={false} musicId={[hit.id]} />
                    ),
                  },
                ],
              };
            })}
          />
        )}
      </div>
    </div>
  );
};

export default TopHits;