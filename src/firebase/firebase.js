import app from 'firebase/app';
import 'firebase/auth'; // authentication
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
    console.log("#AR: Firebase -> constructor -> this.storage", this.storage.child);
  }

  register = async (name, email, password, picture) => {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    if (picture) {
      try {
        const snapshot = await this.storage.ref().child(`profile/${new Date().getTime()}`).put(picture)
        const url = await snapshot.ref.getDownloadURL()
         return await newUser.user.updateProfile({ displayName: name, photoURL: url })
      } catch (error) {
        console.log('REGISTRATION FAILD:', error.message);
      }
    }
    return await newUser.user.updateProfile({ displayName: name })
  }

  login = async(email, password) => {
   return await this.auth.signInWithEmailAndPassword(email, password)
  }

  logout = async () => {
    return await this.auth.signOut()
  }

  resetPassword = async () => {
    await this.auth.sendPasswordResetEmail();
  }
}

export default new Firebase();