import firebase from 'firebase'

if (!firebase.apps.length) {
firebase.initializeApp(
{
    apiKey: "AIzaSyDdslzXMZxWK08z27FEbs59dKDTt8DmbVU",
    authDomain: "fir-pj-38920.firebaseapp.com",
    projectId: "fir-pj-38920",
    storageBucket: "fir-pj-38920.appspot.com",
    messagingSenderId: "983106471983",
    appId: "1:983106471983:web:153d67fd44fafa1b579eda",
    measurementId: "G-5R427WMB25"
}
)
}

export default firebase