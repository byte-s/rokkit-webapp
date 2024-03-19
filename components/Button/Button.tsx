import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css"
import cn from 'classnames'
import Link from "next/link";

export const Button = ({link, appearance, children}:ButtonProps): JSX.Element => {
    return (
        <Link href={'/contacts'} className={cn(styles.button, {
            [styles.white]: appearance == 'white',
            [styles.black]: appearance == 'black',
        })}>
            {children}
        </Link>
    )
};