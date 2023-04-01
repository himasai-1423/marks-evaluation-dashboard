import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnIVTHpjU3lrGL554NQvfQ9r5yZHzCpiE",
  authDomain: "marks-evaluation-dashboard.firebaseapp.com",
  projectId: "marks-evaluation-dashboard",
  storageBucket: "marks-evaluation-dashboard.appspot.com",
  messagingSenderId: "517693848750",
  appId: "1:517693848750:web:f7add8c83ad8a6421e413f",
};

const app = initializeApp(firebaseConfig);

export default app;
