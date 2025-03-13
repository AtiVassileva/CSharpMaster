import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyCqnC_JkSZHak5yfxGiRBEXwXDiAj_CdGQ",
   authDomain: "csharp-master.firebaseapp.com",
   projectId: "csharp-master",
   storageBucket: "csharp-master.firebasestorage.app",
   messagingSenderId: "224123178879",
   appId: "1:224123178879:web:97ef0f49b9631d14c3944a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);