import Head from 'next/head'
import Image from 'next/image'
import { withLayout } from '../Layout/Layout'
import { Htag } from '../components/Htag/Htag';
import { Button } from '../components/Button/Button';
import { CallButton } from '../components/CallButton/CallButton';
import { CoverHtag } from '../components/CoverHtag/CoverHtag';
import { CallBackBlock } from '../components/CallBackBlock/CallBackBlock';
import styles from './pages.module.css'
import cn from 'classnames'
import { ProjectItem } from '../components/ProjectItem/ProjectItem';
import { ComingSoonBlock } from '../components/ComingSoonBlock/ComingSoonBlock';
import React from 'react';

function Projects(): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>Наши проекты - Rokkit</title>
      </Head>
      {/* <div className={cn(styles.heading, styles.headBlock)}>
        <Htag tag='h1'>Наши проекты</Htag>
        <p>
          We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.
        </p>
      </div> */}
      <ComingSoonBlock></ComingSoonBlock>
      {/* <div className={styles.projectsWrapper}>
        <ProjectItem>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</ProjectItem>
        <ProjectItem>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</ProjectItem>
        <ProjectItem>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</ProjectItem>
        <ProjectItem>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</ProjectItem>
        <ProjectItem>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</ProjectItem>
        <ProjectItem>We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.</ProjectItem>
      </div> */}
      {/* <CallBackBlock></CallBackBlock> */}
    </>
  );
}

export default withLayout(Projects);