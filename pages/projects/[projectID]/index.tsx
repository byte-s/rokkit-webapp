import Head from 'next/head'
import Image from 'next/image'
import { withLayout } from '../../../Layout/Layout.tsx'
import styles from '../../pages.module.css'
import cn from 'classnames'
import React, {useEffect, useState} from 'react';
import {db} from '../../../interfaces/firebase.config.js'
import { getDocs, collection, DocumentData, onSnapshot, QuerySnapshot, doc, getDoc } from '@firebase/firestore';
import { NewProjectType } from '../../../types/project.ts';
import { firestore, projectsCollection } from '../../../interfaces/controller.ts';
import { useParams } from 'react-router-dom';
import { Htag } from '../../../components/Htag/Htag.tsx'
import { useRouter } from 'next/router'
import { ProjectItem } from '../../../components/ProjectItem/ProjectItem.tsx'
import { ProjectDetailed } from '../../../components/ProjectDetailed/ProjectDetailed.tsx'
import { CallBackBlock } from '../../../components/CallBackBlock/CallBackBlock.tsx'

    
function Projects(): JSX.Element {
    const router = useRouter();
    const {projectID} = router.query;
    const path = `projects/${projectID}`;
    const staticPath = `projects/CEtVpthX9zMqUsyYSjEQ`
    console.log(path);
    console.log(staticPath);
    console.log(path===staticPath);
    const getProject = doc(firestore, path);

    const [isLoading, setIsLoading] = useState(false);
    const [project, setProject] = useState({})

    useEffect(() => {
        const fetchProjectData = async () => {
            setIsLoading(true);
            const docSnap = await getDoc(getProject);
            if (docSnap.exists()){
                const newProjectObj = {
                    id: docSnap.id,
                    ...docSnap.data()
                };
                setProject(newProjectObj);
                setIsLoading(false);
                console.log(docSnap.data());
            } else{
                console.log("Нет данных")
            }
        }
        fetchProjectData();
        return 
    }, []);
    if(isLoading) return <div>Загрузка...</div>;
    return (
        <>
        <div className={cn(styles.heading, styles.headBlock)}>
            {Object.keys(project) && Object.keys(project).length ?
                <div>
                  <ProjectDetailed project={project}/>
                  <CallBackBlock></CallBackBlock>
                </div>
            :null}
            
        </div>
        </>
    );
}

export default withLayout(Projects);