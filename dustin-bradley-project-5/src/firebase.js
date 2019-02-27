import firebase from 'firebase';
    // Initialize Firebase
   const config = {
        apiKey: "AIzaSyD5f9Cj_QUdSCFVsjIw9hnIkdiOJobmoaI",
        authDomain: "musiclist-c7483.firebaseapp.com",
        databaseURL: "https://musiclist-c7483.firebaseio.com",
        projectId: "musiclist-c7483",
        storageBucket: "musiclist-c7483.appspot.com",
        messagingSenderId: "1022971478538"
    };
firebase.initializeApp(config);

export default firebase;