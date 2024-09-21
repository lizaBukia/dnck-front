import { IconNameEnum } from "@/app/Components/Icon/enums/icon-name.enum"
import Icon from "@/app/Components/Icon/Icon"
import styles from './AddToPlaylistButton.module.scss'

const AddToPlaylistButton = () => {
    return (
        <button className={styles.button}>
            <Icon name={IconNameEnum.Plus} width={14} height={14}/>
            <span>
Add To Playlist
            </span>
        </button>
    )
}
export default AddToPlaylistButton