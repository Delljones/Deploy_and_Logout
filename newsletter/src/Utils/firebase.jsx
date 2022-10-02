// initilising Firebase  - Able to be seen in
// https://console.firebase.google.com/u/0/project/sit313-app/authentication/users

import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBL5y33SFmnV76FYz-XXAnPb7R931w4f40",
    authDomain: "sit313-app.firebaseapp.com",
    projectId: "sit313-app",
    storageBucket: "sit313-app.appspot.com",
    messagingSenderId: "526436435245",
    appId: "1:526436435245:web:c1b6ab7d18bf984f37bfa4",
    measurementId: "G-MRTPL2J26V"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
