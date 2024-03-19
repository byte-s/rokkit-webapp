import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css"
import React from "react";

export const Htag = ({tag, children}:HtagProps): JSX.Element => {
    switch (tag) {
        case "h1": return <h1 className={styles.h1}>{children}</h1>;
        case "h2": return <h2 className={styles.h2}>{children}</h2>;
        default: return <></>;
    }
};