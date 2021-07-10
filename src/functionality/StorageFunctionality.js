import { useState } from 'react';
import firebase from "../utils/firebase";
import { insertParamIntoURL } from "../utils/Utils";

const useStorage = () => {

  // Stores the id of the user.
  const [userId, setUserId] = useState("");

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
  }
  const getQueryStringUser = () => {
    var notebotUserParams = new URLSearchParams(window.location.search);
    return notebotUserParams.get("user");
  }

  // * CLOUD FUNCTIONS

  // ** USER
  const userExists = async (newUserId) => {
    if (newUserId) {
      return firebase.firestore().collection("users").doc(newUserId.toString()).get().then((doc) => { return doc.exists });
    } else {
      return false;
    }
  }
  const saveUser = async () => {
    return firebase.firestore().collection("users")
      .add({
        'categories': [],
        'notes': [],
        'states': []
      }).then((doc) => {
        return doc.id;
      });
  }

  // ** CATEGORIES AND NOTES
  const saveCollectionToCloud = (collection, collectionName) => {
    if (userId && collection) {
      const userSession = firebase.firestore().collection("users").doc(userId);
      switch (collectionName) {
        case "categories":
          userSession.update({ "categories": collection });
        case "notes":
          userSession.update({ "notes": collection });
      }
    }
  }
  const deleteItemFromCloud = (itemId, collectionName) => {
    if (userId) {
      const userSession = firebase.firestore().collection("users").doc(userId);
      //userSession.collection(collectionName).doc(itemId.toString()).delete();
    }
  }
  const getCollectionFromCloud = async (newUserId, collectionName) => {
    if (newUserId) {
      const userSession = await firebase.firestore().collection("users").doc(newUserId).get();
      return userSession.data()[collectionName];
    }
  }

  // ** APP STATE
  const saveStatesToCloud = (states) => {
    if (userId) {
      const userSession = firebase.firestore().collection("users").doc(userId);
      userSession.update({ "states": states });
    }
  }
  const getStatesFromCloud = async (newUserId) => {
    if (newUserId) {
      const userSession = await firebase.firestore().collection("users").doc(newUserId).get();
      return userSession.data()["states"];
    }
  }

  const initUser = async () => {
    // Try to retrieve the user from local, if it exists.
    const myUserId = getQueryStringUser();
    const userExistsStore = await userExists(myUserId);
    // If user is in query string, check if user exists on cloud.
    if (myUserId && myUserId !== "" && userExistsStore) {
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
