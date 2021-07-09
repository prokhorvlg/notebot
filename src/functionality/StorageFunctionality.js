import { useState } from 'react';
import firebase from "../utils/firebase";
import { insertParamIntoURL } from "../utils/Utils";

const useStorage = () => {

  // Stores the id of the user.
  const [userId, setUserId] = useState("");

  const initUser = async () => {
    // Try to retrieve the user from local, if it exists.
    const myUserId = getQueryStringUser();
    // If user is in query string, check if user exists on cloud.
    if (myUserId && myUserId !== "" && userExists) {
      // If user exists on cloud, set it as the userId.
      setUserId(myUserId);
      return [myUserId, true];
    } else {
      // If user does not exist, then make a call to create the user on Firebase.
      return saveUser().then((newUserId) => {
        // Save the new user in the state.
        setUserId(newUserId);
        // Save the user Id locally.
        saveQueryStringUser(newUserId);
        return [newUserId, false];
      });
    }
  }

  // ** LOCAL STORAGE
  // Store and retrieve the user id from local storage, if the user refreshes the page.
  /*const saveLocalUser = () => {
    const notebotUserStore = userId;
    localStorage.setItem('notebotUserStore', JSON.stringify(notebotUserStore));
  }
  const getLocalUser = () => {
    const notebotUserStore = JSON.parse(localStorage.getItem('notebotUserStore'));
    return notebotUserStore;
  }*/

  // ** QUERY STRING
  // Store and retrieve the user id from query string, if the user refreshes the page.
  const saveQueryStringUser = (newUserId) => {
    insertParamIntoURL("user", newUserId);
    /*var notebotUserParams = new URLSearchParams(window.location.search);
    notebotUserParams.set("user", newUserId.toString());
    window.history.replaceState(null, null, window.location + "?" + notebotUserParams.toString() + window.location.hash);*/
  }
  const getQueryStringUser = () => {
    var notebotUserParams = new URLSearchParams(window.location.search);
    return notebotUserParams.get("user");
  }

  // * CLOUD FUNCTIONS

  // ** USER
  const userExists = async (userId) => {
    return firebase.firestore().collection("users").doc(userId.toString()).get().then((doc) => { return doc.exists; });
  }
  const saveUser = async () => {
    return firebase.firestore().collection("users")
      .add({
        categories: [],
        notes: []
      }).then((doc) => {
        return doc.id;
      });
  }

  // ** CATEGORIES AND NOTES
  const saveCollectionToCloud = (collection, collectionName, changeCollection) => {
    if (userId && collection) {
      const userSession = firebase.firestore().collection("users").doc(userId);
      collection.forEach((item) => {
        userSession.collection(collectionName)
          .doc(item.id.toString())
          .set(item, { merge: true });
      });
    }
  }
  const deleteItemFromCloud = (itemId, collectionName) => {
    if (userId) {
      const userSession = firebase.firestore().collection("users").doc(userId);
      userSession.collection(collectionName).doc(itemId.toString()).delete();
    }
  }
  const getCollectionFromCloud = async (newUserId, collectionName) => {
    if (newUserId) {
      const userSession = firebase.firestore().collection("users").doc(newUserId);
      return userSession.collection(collectionName).get().then((items) => {
        let newCollection = [];
        items.docs.forEach((item) => {
          newCollection = [...newCollection, item.data()];
        });
        return newCollection;
      });
    }
  }

  // ** APP STATE
  const saveStatesToCloud = (states) => {
    if (userId) {
      const userSession = firebase.firestore().collection("users").doc(userId);
      states.forEach((state) => {
        userSession.update({
            [state.key]: state.value
        });
      });
    }
  }
  const getStatesFromCloud = async (newUserId, states) => {
    if (newUserId) {
      const userSession = firebase.firestore().collection("users").doc(newUserId);
      return await userSession.get().then((doc) => {
        let newStates = [];
        states.forEach((state) => {
          newStates = [...newStates, doc.data()[state]];
        });
        return newStates;
      });
    }
  }

  return [
    userId,
    initUser,
    saveCollectionToCloud,
    deleteItemFromCloud,
    getCollectionFromCloud,
    saveStatesToCloud,
    getStatesFromCloud
  ];
}

export default useStorage;
