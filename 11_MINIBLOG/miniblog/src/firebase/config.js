// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCeRxS3XgGucdmxOGkEejABEe0vqnFoQYc',
    authDomain: 'miniblog-349ce.firebaseapp.com',
    projectId: 'miniblog-349ce',
    storageBucket: 'miniblog-349ce.appspot.com',
    messagingSenderId: '965799780852',
    appId: '1:965799780852:web:6f7350c822b5eda79a19a1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
