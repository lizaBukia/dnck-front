import Link from 'next/link';
import Heading from '../Heading/Heading';
import { HeadingTypeEnum } from '../Heading/enums/heading-type.enum';
import Text from '../Text/Text';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './MainPageHeading.module.scss';
import { MainPageHeadingType } from './type/MainPageHeading.type';

const MainPageHeading: MainPageHeadingType = () => {
  return (
    <div className={styles.heading}>
      <Heading type={HeadingTypeEnum.H5}>Top Albums</Heading>
      <Link href={'/'}>
        <Text
          htmlType={TextHtmlTypeEnum.Span}
          type={TextTypeEnum.SecondaryTextMedium}
        >
          See all
        </Text>
      </Link>
    </div>
  );
};
export default MainPageHeading;
