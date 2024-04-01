import {addDoc, collection, getFirestore } from 'firebase/firestore';
import {app} from './firebase.config.ts'
import { AddLeadType } from '../types/lead.js';

export const firestore = getFirestore(app);

export const projectsCollection = collection(firestore, "projects");
export const leadsCollection = collection(firestore, "leads")

export const addLead = async (leadData: AddLeadType) => {
    const newLead = await addDoc(leadsCollection, {...leadData});
    console.log(`Заявка успешно отправлена в ${newLead.path}`);
}