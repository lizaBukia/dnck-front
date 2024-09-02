import { SingleArtistPagePropsInterface } from './interfaces/single-artist-page-props.interface';
import { SingleArtistPageType } from './type/single-artist-page.type';

const SingleArtistPage: SingleArtistPageType = (
  props: SingleArtistPagePropsInterface,
) => {
  return <div>artistName={props.artistName}</div>;
};

export default SingleArtistPage;
