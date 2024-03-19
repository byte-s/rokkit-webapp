import { CoverHtagProps } from "./CoverHtag.props";
import styles from "./CoverHtag.module.css"

export const CoverHtag = ({children}:CoverHtagProps): JSX.Element => {
    return <h1 className={styles.h1}>{children}</h1>;
};