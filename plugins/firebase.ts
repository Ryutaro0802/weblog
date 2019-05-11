import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyA2sHdXkqVZ0a',
        authDomain: 'blog-53beb.firebaseapp.com',
        databaseURL: 'https://blog-53beb.firebaseio.com',
        projectId: 'blog-53beb',
        storageBucket: 'blog-53beb.appspot.com',
        messagingSenderId: '458515467341'
    });
}

export default firebase;