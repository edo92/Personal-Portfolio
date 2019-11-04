import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyA_D3hUzHGIgxLknZUuHmoqGPEmyh9VeKM",
        authDomain: "userlog.firebaseapp.com",
        databaseURL: "https://userlog.firebaseio.com",
        projectId: "userlog",
        storageBucket: "userlog.appspot.com",
        messagingSenderId: "909927573582",
        appId: "1:909927573582:web:0c46f6b43ea5e11046bb1f",
        measurementId: "G-TM5KZLDGZ0"
});

export default firebaseConfig;
