import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZUHiZVaZYXeQUGq2LAQr1w7aBWdf8cTU",
    authDomain: "app-chat-ff36c.firebaseapp.com",
    projectId: "app-chat-ff36c",
    storageBucket: "app-chat-ff36c.appspot.com",
    messagingSenderId: "751145179597",
    appId: "1:751145179597:web:fbb6616752d7c702ea0c84",
    measurementId: "G-M0LTGFNV0V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getStorage();

export { db, auth };