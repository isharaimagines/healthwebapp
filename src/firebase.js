import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import CryptoJS from "crypto-js";

const secretPass = "~`!@#$%^&* ()_-+= { [}]|:;”‘.?/"; // donn't touch

const secretData = (secretedText) => {
  const bytes = CryptoJS.AES.decrypt(secretedText, secretPass);
  const secretedData = bytes.toString(CryptoJS.enc.Utf8);
  return secretedData;
};

const KEY1 = secretData(
  "U2FsdGVkX1/GaJjWeLDUIpuGvRj51CvI1dYGo54QNLg09d/KJ9Y5kk4SUZ0PRlICxX41SqjwH9Tv0lQk9UhjXw=="
);
const KEY2 = secretData("U2FsdGVkX1/4ZXQU8Aprr3j6LZEoSaSRGbQSFMCWyUA=");
const KEY3 = secretData("U2FsdGVkX1+09pDrA6o9gqDad8KK2xfTRBbiNi9L/jk=");

const firebaseConfig = {
  apiKey: KEY1,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: KEY2,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: KEY3,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
