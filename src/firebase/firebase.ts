import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAyr358lufxyCBeLVGgnIxNb91-mmKiiXk',
  authDomain: 'my-react-weather-app-1c693.firebaseapp.com',
  projectId: 'my-react-weather-app-1c693',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
