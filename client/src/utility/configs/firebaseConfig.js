import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyBdpCEMgsBDT75OLaAAKASl99rIhvtWNoM",
        authDomain: "portfolio-c05dd.firebaseapp.com",
        databaseURL: "https://portfolio-c05dd.firebaseio.com",
        projectId: "portfolio-c05dd",
        storageBucket: "portfolio-c05dd.appspot.com",
        messagingSenderId: "261591204045",
        appId: "1:261591204045:web:9e96be39ba9ff4b4342984"
});

export default firebaseConfig;
