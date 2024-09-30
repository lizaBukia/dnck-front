'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import AddToPlaylistButton from '../playlist/components/AddToPlaylistButton/AddToPlaylistButton';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';

export default function AlbumPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterfaces[]>('/albums', fetcher);
  const router: AppRouterInstance = useRouter();

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.contentWrapper} ${styles.lightContent}`}>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Albums</Heading>
          </div>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              {albums &&
                albums.map((album, index) => {
                  return (
                    <AlbumCard
                      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.stopPropagation();
                        router.push(`/albums/${album.id}`);
                      }}
                      key={index}
                      darkMode={false}
                      imgUrl={album.history?.location}
                      artists={album.artists}
                      title={album.title}
                      dropDownItems={[
                        {
                          title: (
                            <AddToPlaylistButton
                              musicId={album.musics.map((music) => music.id)}
                              album={true}
                            />
                          ),
                        },
                      ]}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
