import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css"
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { CoverHeader } from "./CoverHeader/CoverHeader";
import { CoverFooter } from "./CoverFooter/CoverFooter";
import React, { FunctionComponent, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AdminHeader } from "./AdminHeader/AdminHeader";
import { AdminFooter } from "./AdminFooter/AdminFooter";
import { YandexMetrika } from "../components/YandexMetrika/YandexMetrika";
import { YandexMetricaProvider } from 'next-yandex-metrica';


const Layout = ({children}:LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <YandexMetricaProvider tagID={96996731}
      initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}>
                <SpeedInsights/>
                <Header className={styles.header}/>
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer}/>
            </YandexMetricaProvider>
            
        </div>
    );
};

const CoverLayout = ({children}:LayoutProps): JSX.Element => {
    return (
        <div className={styles.coverWrapper}>
            <SpeedInsights/>
            <video src={"../static/vid/bg.mp4"} autoPlay playsInline preload="metadata" loop muted></video>
            <CoverHeader className={styles.header}/>
            <div className={styles.coverBody}>
                {children}
            </div>
            <CoverFooter className={styles.footer}/>
        </div>
    );
}

const AdminLayout = ({children}:LayoutProps): JSX.Element => {
    return (
        <div className={styles.adminWrapper}>
            <AdminHeader className={styles.header}/>
            <div className={styles.adminBody}>
                {children}
            </div>
            <AdminFooter className={styles.footer}/>
        </div>
    )
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

export const withCoverLayout = (Component: FunctionComponent) => {
    return function withLayoutComponent(props: Record<string, unknown>,initialProject): JSX.Element {
        return (
            <CoverLayout>
                <Component {...props}
                {...initialProject}/>
            </CoverLayout>
        )
    }
}

export const withAdminLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <AdminLayout>
                <Component {...props}/>
            </AdminLayout>
        )
    }
}