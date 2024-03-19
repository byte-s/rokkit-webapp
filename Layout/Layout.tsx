import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css"
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { CoverHeader } from "./CoverHeader/CoverHeader";
import { CoverFooter } from "./CoverFooter/CoverFooter";
import cn from "classnames";
import React, { FunctionComponent } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const Layout = ({children}:LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <SpeedInsights/>
            <Header className={styles.header}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

const CoverLayout = ({children}:LayoutProps): JSX.Element => {
    return (
        <div className={styles.coverWrapper}>
            <SpeedInsights/>
            <video src="../static/vid/bg.webm" autoPlay playsInline loop muted></video>
            <CoverHeader className={styles.header}/>
            <div className={styles.coverBody}>
                {children}
            </div>
            <CoverFooter className={styles.footer}/>
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}

export const withCoverLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <CoverLayout>
                <Component {...props}/>
            </CoverLayout>
        )
    }
}
