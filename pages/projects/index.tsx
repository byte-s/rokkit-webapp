import Head from 'next/head'
import Image from 'next/image'
import { Htag } from '../../components/Htag/Htag';
import { Button } from '../../components/Button/Button';
import { CallButton } from '../../components/CallButton/CallButton';
import { CoverHtag } from '../../components/CoverHtag/CoverHtag';
import { CallBackBlock } from '../../components/CallBackBlock/CallBackBlock';
import styles from '../pages.module.css'
import cn from 'classnames'
import { ProjectItem } from '../../components/ProjectItem/ProjectItem';
import { ComingSoonBlock } from '../../components/ComingSoonBlock/ComingSoonBlock';
import React, {useEffect, useState} from 'react';
import { getDocs, collection, DocumentData, onSnapshot, QuerySnapshot } from '@firebase/firestore';
import { projectsCollection } from '../../interfaces/controller';
import { PrismaClient, Projects, Prisma } from '@prisma/client';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '../../Layout/Header/Header';
import { Footer } from '../../Layout/Footer/Footer';
import layout from '../../Layout/Layout.module.css'

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const project: Projects[] = await prisma.projects.findMany();
  return {
    props: {
      initialProjects: project
    }
  };
}

    
export default function Projects({initialProjects}): JSX.Element {
  const [project, setProject] = useState<Projects[]>(initialProjects);
  return (
    <div className={layout.wrapper}>
       <Head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>Наши проекты - Rokkit</title>
      </Head>
      <SpeedInsights/>
      <Header className={layout.header}/>
      <div className={layout.body}>
        <ComingSoonBlock></ComingSoonBlock>
        {/* <div className={cn(styles.heading, styles.headBlock)}>
          <Htag tag='h1'>Наши проекты</Htag>
          <p>
            We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations.
          </p>
        </div>
        <div className={styles.projectsWrapper}>
          {project.map((c, i: number) => (
            <ProjectItem key={i} project={c}/>
          ))}
        </div> */}
      </div>
      <Footer className={layout.footer}/>
    </div>
  );
}