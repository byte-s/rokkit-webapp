import { CallBackBlockProps } from "./CallBackBlock.props";
import styles from "./CallBackBlock.module.css"
import cn from 'classnames'
import { CallButton } from "../CallButton/CallButton";

export const CallBackBlock = ({}:CallBackBlockProps): JSX.Element => {
   return <div className={styles.wrapper}>
    <h2>
    Поработаем вместе? Оставляйте заявку, а мы бесплатно проконсультируем, расскажем о процессах, подготовим КП
    </h2>   
    <CallButton arrow appearance="black">Свяжитесь с нами</CallButton>  
   </div>
};