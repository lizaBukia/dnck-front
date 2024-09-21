import HitsCards from '@/app/Components/HitsCards/HitsCards';
import styles from './page.module.scss';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import { fetcher } from '@/app/Api/fetcher';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import Heading from '@/app/Components/Heading/Heading';

const TopHits = (): JSX.Element => {
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);

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
function useSWR<T>(arg0: string, fetcher: any): { data: any } {
  throw new Error('Function not implemented.');
}
