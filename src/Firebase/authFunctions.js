import firebase from './firebase';

class AuthFunctions extends firebase {
  signUp(firstname, lastname, email, pwd) {
    this.auth.createUserWithEmailAndPassword(email, pwd)
    .then((userCred) => {
      this.writeDatabase(userCred.user.uid, {
        name: {
          first: firstname,
          last: lastname
        },
        email: email,
        role: "employee",
        assessment: {
          val1: 50,
          val2: 50
        }
      },
      );
    })
    .catch(this.debugError);
  }

  logIn(email, pwd) {
    this.auth.signInWithEmailAndPassword(email, pwd)
      .catch(this.debugError);
  }

  logOut(callback) {
    this.auth.signOut()
      .then(callback)
      .catch(this.debugError);
  }
}
 
const authFunctions = new AuthFunctions();
export default authFunctions;