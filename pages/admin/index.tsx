import Head from 'next/head'
import { withAdminLayout, withCoverLayout, withLayout } from '../../Layout/Layout'
import { Htag } from '../../components/Htag/Htag';
import styles from './admin.module.css'
import { DirectionItem } from '../../components/DirectionItem/DirectionItem';
import { CallBackBlock } from '../../components/CallBackBlock/CallBackBlock';
import { CRMItem } from '../../components/CRMItem/CRMItem';
import cn from 'classnames'
import React, { useEffect, useState } from 'react';
import { NewLeadType } from '../../types/lead';
import { onSnapshot, QuerySnapshot, DocumentData } from '@firebase/firestore';
import { leadsCollection, projectsCollection } from '../../interfaces/controller';
import projects from '../projects';
import 'firebaseui/dist/firebaseui.css';
import { getAuth } from 'firebase/auth';
import { firebaseConfig, app } from '../../interfaces/firebase.config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import auth from '../../interfaces/auth';
import firebaseui from 'firebaseui';




function Admin(): JSX.Element {
  firebase.initializeApp(firebaseConfig);

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

// Configure FirebaseUI.
  const uiConfig = {
    adminRestrictedOperation: true,
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    disableSignUp: {status: true},
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  
  const [leads, setLeads] = useState<NewLeadType[]>([]);
    
  useEffect(() => onSnapshot(leadsCollection, (snapshot:QuerySnapshot<DocumentData>) => {
      setLeads(
          snapshot.docs.map((doc) => {
              return {
                  id: doc.id,
                  ...doc.data()
              }
          })
      )
      })
  );
  console.log(leads, "projects");
  
  if (!isSignedIn){
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    );
  } else
  return (
    <>
    <Head>
      <link rel="icon" href="../public/favicon.ico" sizes="any" />
      <title>Панель администратора - Rokkit</title>
    </Head>
    <div className={cn(styles.heading, styles.headBlock)}>
      <Htag tag='h1'>CRM</Htag>
      <p>
        Обновлено <span>14 мин. назад</span> 
      </p>
    </div>
    <div className={styles.toolsWrapper}>
      <div className={styles.search}>

        <input type="text" />
      </div>
      <div className={styles.date}>

        <input type="text" placeholder="Дата создания" 
        onChange={(e) => console.log(e.target.value)} 
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} name="" id="" />
      </div>
      <div className={styles.status}>
      
        <select name="" id="">
          <option value="">Vohit</option>
        </select>
      </div>
      <div className={styles.priority}>
        <select name="" id=""></select>
      </div>
    </div>
    <div className={styles.wrapper}>
      {leads && leads.length ? (
                <div className={styles.crmWrapper}>
                    {leads?.map((lead) => (
                    <CRMItem key={leads.id} lead={lead}/>
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