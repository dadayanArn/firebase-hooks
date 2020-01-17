import app from 'firebase/app';
import 'firebase/auth'; // authentication
import firebaseConfig from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    
    this.auth = app.auth();
  }

  register = async (name, email, password) => {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
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