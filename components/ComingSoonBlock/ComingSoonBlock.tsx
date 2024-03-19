import { ComingSoonBlockProps } from "./ComingSoonBlock.props";
import styles from "./ComingSoonBlock.module.css"
import cn from 'classnames'
import { CallButton } from "../CallButton/CallButton";

export const ComingSoonBlock = ({}:ComingSoonBlockProps): JSX.Element => {
   return <div className={styles.wrapper}>
            <h2>
                Скоро...
            </h2>
            <p>
                Совсем скоро вы сможете увидеть наши проекты
            </p>
        </div>
};