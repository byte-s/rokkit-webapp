import Head from 'next/head'
import Image from 'next/image'
import { withLayout } from '../../Layout/Layout'
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
import { NewProjectType } from '../../types/project';
import { projectsCollection } from '../../interfaces/controller';


    
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