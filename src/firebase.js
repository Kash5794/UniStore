import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
apiKey:process.env.REACT_APP_apiKey,
authDomain:process.env.REACT_APP_authDomain,
projectId:process.env.REACT_APP_projectId,
storageBucket:process.env.REACT_APP_storageBucket,
messagingSenderId:process.env.REACT_APP_messageSenderId,
appId: process.env.REACT_APP_appId

});
export const auth = firebaseApp.auth()
export default firebaseApp