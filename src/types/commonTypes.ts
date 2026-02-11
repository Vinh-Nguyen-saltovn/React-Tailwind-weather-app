export type UserInfo = {
  email: string
  name: string
  picture: string
}

export type GithubUserCredential = {
  additionalUserInfo?: {
    profile?: {
      name?: string
      login?: string
      photoURL?: string
    }
  }
  _tokenResponse?: {
    fullName?: string
  }
}
