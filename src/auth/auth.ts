import {
  GithubAuthProvider,
  signInWithPopup,
  type UserCredential,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import type { GithubUserCredential } from '../types/commonTypes'

export async function loginWithGithub() {
  const provider = new GithubAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const info = result as UserCredential & GithubUserCredential

  const user = {
    name: info._tokenResponse?.fullName,
    picture: result.user.photoURL,
  }
  localStorage.setItem('user', JSON.stringify(user))
  return user
}
