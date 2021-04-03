import Firebase from './firebase';

class ProfileFunctions extends Firebase {
  fetchUserData(component, uid) {
    this.readDatabase(uid, "value", (snapshot) => {
      component.setState({user: snapshot});
    })
  }

  // autonomy connection growth - sometimes yes no

  // satisfaction stress physical - 
}

const profileFunctions = new ProfileFunctions();
export default profileFunctions;