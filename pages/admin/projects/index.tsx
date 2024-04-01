import Head from 'next/head'
import { withAdminLayout, withCoverLayout, withLayout } from '../../../Layout/Layout'
import { Htag } from '../../../components/Htag/Htag';
import styles from '../admin.module.css'
import { DirectionItem } from '../../../components/DirectionItem/DirectionItem';
import { CallBackBlock } from '../../../components/CallBackBlock/CallBackBlock';
import { CRMItem } from '../../../components/CRMItem/CRMItem';
import cn from 'classnames';
import React, {useEffect, useState} from 'react';
import { ProjectAdmintem } from '../../../components';
import { projectsCollection } from '../../../interfaces/controller';
import { getDocs, collection, DocumentData, onSnapshot, QuerySnapshot } from '@firebase/firestore';
import { NewProjectType } from '../../../types/project';
import auth from '../../../interfaces/auth';



function Admin(): JSX.Element {
    
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
            <title>Проекты - Панель администратора - Rokkit</title>
        </Head>
        <div className={cn(styles.heading, styles.headBlock)}>
            <Htag tag='h1'>Проекты</Htag>
            <p>
                Обновлено <span>14 мин. назад</span> 
            </p>
        </div>
        <div className={styles.wrapper}>
            {projects && projects.length ? (
                <div className={styles.projectsWrapper}>
                    {projects?.map((project) => (
                    <ProjectAdmintem key={project.id} project={project}/>
                    ))}
                </div>
                )
                :
                (
                <div>Загрузка...</div>
                )
            }
        </div>
    </>
  );
}

export default withAdminLayout(Admin);
