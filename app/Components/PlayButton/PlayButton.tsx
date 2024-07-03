import styles from './PlayButton.module.scss';
import { PlayButtonPropsInterface } from './interfaces/playButton-props.interface';
import { PlayButtonType } from './types/playButton.type';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import Icon from '../Icon/Icon';

const PlayButton: PlayButtonType = (props: PlayButtonPropsInterface) => {
  const iconName = props.playing ? IconNameEnum.Pause : IconNameEnum.Play;
  return (
    <button
      onClick={props.onClick}
      className={`${styles.playButton} ${styles[props.type]}`}
    >
      <Icon name={iconName} isActive={false} width={16} height={16} />
    </button>
  );
};
export default PlayButton;
