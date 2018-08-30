import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDDRbflG8n5BZ7DX1XN4QRcfnvBrEWcCps",
    authDomain: "expensify-703b9.firebaseapp.com",
    databaseURL: "https://expensify-703b9.firebaseio.com",
    projectId: "expensify-703b9",
    storageBucket: "expensify-703b9.appspot.com",
    messagingSenderId: "697483863282"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};



//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Need more cash',
//     amount: 540,
//     createdAt: 1000
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const snap = snapshot.val();
//     console.log(`${snap.name} is a ${snap.job} working in ${snap.location.city}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// });


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log("error feting data", e);
//     });

// database.ref().set({
//     name: 'Akhil Boddu',
//     age: 21,
//     job: 'dev',
//     location: {
//         city: 'Cape Town',
//         country: 'South Africa'
//     },

// })
// .then(() => {
//     console.log("Data is saved.")
// })
// .catch((error) => {
//     console.log("Data adding failed: " + error.message)
// });
    



// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log("Remove succeeded.")
//     })
//     .catch((error) => {
//         console.log("Remove failed: " + error.message)
//     });

