import Link from 'next/link';
// eslint-disable-next-line import/no-named-as-default
import Input from '../../Input/Input';
import { InputIconPositionEnum } from '../../Input/enum/input-icon-position.enum';
import { InputTypeEnum } from '../../Input/enum/input-type.enum';
import styles from './SearchInput.module.scss';
import { SearchInputPropsInterface } from './interfaces/search-input.interface';
import Icon from '@/app/Components/Icon/Icon';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';

const SearchInput = (props: SearchInputPropsInterface): JSX.Element => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.arrow}>
        <Link href={'/'}>
          <Icon name={IconNameEnum.ArrowLeft} width={40} height={40} />
        </Link>
        <Link href={'/'}>
          <Icon name={IconNameEnum.ArrowRight} width={40} height={40} />
        </Link>
      </div>
      <div className={styles.searching}>
        <Input
          name={'search'}
          type={InputTypeEnum.Text}
          placeholder={'Search'}
          icon={<Icon name={IconNameEnum.Search} width={24} height={24} />}
          iconPosition={InputIconPositionEnum.Left}
          isDark={false}
          onBlur={() => {}}
          onChange={props.onChange}
          value={props.value}
          onKeyDown={props.onKeyDown}
        />
      </div>
    </div>
  );
};

export default SearchInput;
