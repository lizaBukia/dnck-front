'use client';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import useSWR from 'swr';
import AddToPlaylistButton from '../playlist/components/AddToPlaylistButton/AddToPlaylistButton';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import DownHitsCards from '@/app/Components/DownHitsCards/DownHitsCards';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import { currentMusicState } from '@/app/States/States';
import { CurrentMusicStateInterface } from '@/app/States/current-music-state-props.interface';

const TopHits = (): JSX.Element => {
  const date: Date = new Date();
  const lastMonth: Date = new Date(date.setMonth(date.getMonth() - 1));
  const year: number = lastMonth.getFullYear();
  const month: string = (lastMonth.getMonth() + 1).toString().padStart(2, '0');
  const day: number = lastMonth.getDate();
  const formattedDate: string = `${year}-${month}-${day}`;
  const setMusic: SetterOrUpdater<CurrentMusicStateInterface> =
    useSetRecoilState(currentMusicState);
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
              return {
                backgroundImage: hit.album.history?.location,
                album: hit.album,
                name: hit.name,
                src: hit.history?.location,
                id: hit.id,
                onClick: (): void => {
                  setMusic((prevState) => ({
                    ...prevState,
                    currentIndex: 0,
                    currentMusicId: hit.id,
                    musics: [
                      ...musics.map((music) => ({
                        id: music.id,
                        name: music.name,
                        artistName: music.album.artists.reduce((acc, curr) => {
                          return (acc += `${curr.firstName} ${curr.lastName},`);
                        }, ''),
                        imgLink: music.album.history.location,
                        src: music.history.location,
                      })),
                    ],
                  }));
                },
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
