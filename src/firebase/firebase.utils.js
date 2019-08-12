import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB4W-tiQoFOnF2p4nZ7-0QSc4aR38A7pY0",
    authDomain: "clothing-store-5ad59.firebaseapp.com",
    databaseURL: "https://clothing-store-5ad59.firebaseio.com",
    projectId: "clothing-store-5ad59",
    storageBucket: "",
    messagingSenderId: "814023704161",
    appId: "1:814023704161:web:8bc037eb647c44c9"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(err){
      console.log('Error creating user', err.message);
    }
  }
  return userRef;
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title);
    // console.log(newDocRef)
    batch.set(newDocRef, obj);
  })
  return await batch.commit();
    
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  // console.log(transformedCollection)
  
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
}



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

