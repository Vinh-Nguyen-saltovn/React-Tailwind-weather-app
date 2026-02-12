// github
export const API_KEY_FIREBASE = import.meta.env.VITE_FIREBASE_API_KEY
export const AUTH_DOMAIN_FIREBASE = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
export const PROJECT_ID_FIREBASE = import.meta.env.VITE_FIREBASE_PROJECT_ID
// google
export const CLIENT_ID_GOOGLE = import.meta.env.VITE_GOOGLE_CLIENT_ID
export const GOOGLE_AUTH_URL =
  `https://accounts.google.com/o/oauth2/v2/auth?` +
  `client_id=${CLIENT_ID_GOOGLE}` +
  `&redirect_uri=${window.location.origin}/auth/google/callback` +
  `&response_type=token` +
  `&scope=profile email`
// openweather
export const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
