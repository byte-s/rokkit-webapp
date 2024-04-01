import {app} from './firebase.config' // This is the Firebase object from the previous tutorial
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export default auth;

