import { initializeApp } from "firebase/app"

/* const firebaseConfig = {
    apiKey: "AIzaSyCWPltptw_55A6PF8_EGpfk9TI-K5VPpU0",
    authDomain: "baristup-coderreact.firebaseapp.com",
    projectId: "baristup-coderreact",
    storageBucket: "baristup-coderreact.appspot.com",
    messagingSenderId: "1043348225308",
    appId: "1:1043348225308:web:1dbcf6c4214bd77e1fced9"
}; */

const firebaseConfig = {
    apiKey: "AIzaSyCCiwzNPi0qPUJiaTQA6_fAR9ZkQXl_Ehw",
    authDomain: "react-coder-6f029.firebaseapp.com",
    projectId: "react-coder-6f029",
    storageBucket: "react-coder-6f029.appspot.com",
    messagingSenderId: "1050459817556",
    appId: "1:1050459817556:web:813d1f8847a22942e10fc1"
};
  

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}  


