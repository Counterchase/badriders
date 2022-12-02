// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, getDocs, collection} from "firebase/firestore";
import {useEffect} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function DataAcess(collectionName) {

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyAqm7mVXqxQN_lIDAJSKPBRGSD5a1aKn8g",
        authDomain: "badriders-a4629.firebaseapp.com",
        projectId: "badriders-a4629",
    });
    const db = getFirestore(firebaseApp);
    const dataCollerctionRef = collection(db, collectionName);

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(dataCollerctionRef);
            console.log("api log..")
            console.log(data);
        };
        getData();
    }, [])
}


