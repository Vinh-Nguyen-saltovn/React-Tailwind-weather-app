import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  API_KEY_FIREBASE,
  AUTH_DOMAIN_FIREBASE,
  PROJECT_ID_FIREBASE,
} from '../constants/env'

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: AUTH_DOMAIN_FIREBASE,
  projectId: PROJECT_ID_FIREBASE,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
