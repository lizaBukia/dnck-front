'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import AddToPlaylistButton from '../../playlist/components/AddToPlaylistButton/AddToPlaylistButton';
import { SingleArtistPagePropsInterface } from '../interfaces/single-artist-page-props.interface';
import { SingleArtistPageType } from '../type/single-artist-page.type';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import HitsCard from '@/app/Components/HitsCard/HitsCard';
import SingleArtistCard from '@/app/Components/SingleArtistCard/SingleArtistCard';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';
import { MusicInterface } from '@/app/Interfaces/music.interface';

const SingleArtistPage: SingleArtistPageType = (
  props: SingleArtistPagePropsInterface,
) => {
  const { data: artists } = useSWR<ArtistInterface>(
    `/artists/${props.params.id}`,
    fetcher,
  );

  const { playMusic } = usePlayer();
  const router: AppRouterInstance = useRouter();

  const hitsMap = (artists: ArtistInterface): MusicInterface[] => {
    const musics: MusicInterface[] = [];
    for (const album of artists.albums) {
      for (const music of album.musics) {
        musics.push(music);
      }
    }
    return musics;
  };

  const findAlbum = (artist: ArtistInterface, id: number): AlbumInterfaces => {
    for (let i: number = 0; i < artist.albums.length; i++) {
      if (artist.albums[i].id == id) {
        return artist.albums[i];
      }
    }
    return artist.albums[0];
  };

  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            {artists && (
              <SingleArtistCard
                artistName={`${artists.firstName} ${artists.lastName}`}
                albums={artists.albums}
                biography={artists.biography}
                imageSrc={artists.history?.location}
              />
            )}
          </div>

          {artists && (
            <>
              <div className={styles.heading}>
                <Heading type={HeadingTypeEnum.H5}>
                  {`${artists?.firstName} ${artists?.lastName}'s Musics`}
                </Heading>
              </div>
              <div>
                {((): JSX.Element => {
                  const musicsFromArtist: MusicInterface[] = hitsMap(artists);
                  return (
                    <>
                      <div>
                        {musicsFromArtist.map((music, idx) => {
                          for (
                            let i: number = 0;
                            i < musicsFromArtist.length;
                            i++
                          ) {
                            const object: {
                              album: {
                                history: {
                                  location: string;
                                };
                              };
                            } = {
                              album: {
                                history: {
                                  location: findAlbum(artists, music.id).history
                                    ?.location,
                                },
                              },
                            };
                            Object.assign(musicsFromArtist[i], object);
                          }

                          return (
                            <div key={music.id}>
                              <HitsCard
                                key={music.id}
                                backgroundImage={
                                  findAlbum(artists, music.id).history?.location
                                }
                                album={findAlbum(artists, music.id)}
                                src={music.history?.location}
                                name={music.name}
                                id={music.id}
                                onClick={() => {
                                  playMusic(music, musicsFromArtist, idx);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })()}
              </div>
            </>
          )}

          {artists && (
            <>
              <div className={styles.heading}>
                <Heading
                  type={HeadingTypeEnum.H5}
                >{`${artists?.firstName} ${artists?.lastName}'s Albums`}</Heading>
              </div>
              <div>
                {artists.albums.map((album, index) => (
                  <AlbumCard
                    key={index}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation();
                      router.push(`/albums/${album.id}`);
                    }}
                    darkMode={false}
                    imgUrl={album.history?.location}
                    artists={[artists]}
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
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleArtistPage;
