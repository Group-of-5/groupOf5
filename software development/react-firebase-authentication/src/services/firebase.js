import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3b69ur98voBH8pM_wY2I1y2YYDQ9-LGQ",
  authDomain: "budgetpro2.firebaseapp.com",
  projectId: "budgetpro2",
  storageBucket: "budgetpro2.appspot.com",
  messagingSenderId: "883655346840",
  appId: "1:883655346840:web:b338ea452ab233612d1eed"
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export default firebase;

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logout = () => {
//   auth.signOut();
// };
