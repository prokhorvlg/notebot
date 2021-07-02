import firebase from "./firebase";

// databaseCalls: interface for calls to Firebase

// ENDPOINTS

/*

addCategory
removeCategory
editCategory

addNote
removeNote
editNote

*/

export class databaseCalls {

  async loadUser(userKey) {
    firebase.firestore().collection("users").doc(userKey).get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

  async createUser() {
    return firebase.firestore()
      .collection("users")
      .add({
        title: "user",
        categories: [],
        notes: []
      }).then(function(docRef) {
          return docRef.id;
      });
  }

  createCategory(userKey) {
    firebase.firestore()
      .collection("users").doc(userKey)
      .collection("categories")
      .add({
        title: "category",
        color: "#0f0",
      }).then(function(docRef) {
          return docRef.id;
      });


    firebase
    .firestore()
    .collection("users")
    .add({
      title: "New Category",
      body: "This is to check the Integration is working"
    });
  }
}

export default new databaseCalls();
