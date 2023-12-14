import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmmyjHye0peG81F8QHTzT8o6lu0DHrD_8",
  authDomain: "projeto-splash.firebaseapp.com",
  databaseURL: "https://projeto-splash-default-rtdb.firebaseio.com",
  projectId: "projeto-splash",
  storageBucket: "projeto-splash.appspot.com",
  messagingSenderId: "255037989969",
  appId: "1:255037989969:web:698d382bd5e66994ce4470",
  measurementId: "G-CKCJYS22ZP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(temperatura) {
  const db = getDatabase();
  set(ref(db, 'temp/'), {
    temper: temperatura
  });
}

console.log("teste")

writeUserData(21)