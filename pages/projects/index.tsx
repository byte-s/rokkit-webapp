import Head from 'next/head'
import Image from 'next/image'
import { withLayout } from '../../Layout/Layout.tsx'
import { Htag } from '../../components/Htag/Htag.tsx';
import { Button } from '../../components/Button/Button.tsx';
import { CallButton } from '../../components/CallButton/CallButton.tsx';
import { CoverHtag } from '../../components/CoverHtag/CoverHtag.tsx';
import { CallBackBlock } from '../../components/CallBackBlock/CallBackBlock.tsx';
import styles from '../pages.module.css'
import cn from 'classnames'
import { ProjectItem } from '../../components/ProjectItem/ProjectItem.tsx';
import { ComingSoonBlock } from '../../components/ComingSoonBlock/ComingSoonBlock.tsx';
import React, {useEffect, useState} from 'react';
import {db} from '../../interfaces/firebase.config.ts'
import { getDocs, collection, DocumentData, onSnapshot, QuerySnapshot } from '@firebase/firestore';
import { NewProjectType } from '../../types/project.ts';
import { projectsCollection } from '../../interfaces/controller.ts';


    
function Projects(): JSX.Element {
  const [projects, setProjects] = useState<NewProjectType[]>([]);
    
    useEffect(() => onSnapshot(projectsCollection, (snapshot:QuerySnapshot<DocumentData>) => {
        setProjects(
            snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
        )
        })
    );
  console.log(projects, "projects")
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
          {/* {projects && projects.length ? (
              <div className={styles.projectsWrapper}>
                {projects?.map((project) => (
                  <ProjectItem key={project.id} project={project}/>
                ))}
              </div>
            )
            :
            (
              <ComingSoonBlock></ComingSoonBlock>
            )
          } */}
      {/* <CallBackBlock></CallBackBlock> */}
    </>
  );
}

export default withLayout(Projects);