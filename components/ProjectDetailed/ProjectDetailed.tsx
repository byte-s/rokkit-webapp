import { ProjectDetailedProps } from "./ProjectDetailed.props";
import styles from "./ProjectDetailed.module.css"
import React, { useEffect, useState } from "react";
import { Htag } from "../Htag/Htag";
import Head from "next/head";

export const ProjectDetailed = ({project}:ProjectDetailedProps): JSX.Element => {
    return <>
        <Head>
            <link rel="icon" href="../public/favicon.ico" sizes="any" />
            <title>{project.header} - Rokkit</title>
        </Head>
        <div className={styles.projectWrapper}>
            <div className={styles.header}>
                <Htag tag="h1">{project.header}</Htag>
                <img src="../../static/img/action-1.webp" alt="" />
            </div>
            <div className={styles.block}>
                <Htag tag="h2">О клиенте</Htag>
                <p>{project.company}</p>
            </div>
            <div className={styles.block}>
                <Htag tag="h2">Задачи проекта</Htag>
                <p>{project.goals}</p>
            </div>
            <div className={styles.block}>
                <Htag tag="h2">Описание проекта</Htag>
                <p>{project.project}</p>
            </div>
            <div className={styles.block}>
                <Htag tag="h2">Результаты</Htag>
                <p>{project.results}</p>
            </div>
        </div>
    </>
};

