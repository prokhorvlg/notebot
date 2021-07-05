import { useState } from 'react';

// Utilities
import DatabaseCalls from "../utils/DatabaseCalls";

const useUser = () => {
  // Stores the id of the user.
  const [userId, setUserId] = useState(null);

  const initUser = () => {
    // Try to retrieve the user from localStorage, if it exists.
    let userId = retrieveLocalUser();
    if (userId && Object.keys(userId).length !== 0) {
      // If user exists, then make a call to get the user's notes.
      DatabaseCalls.loadUser(userId.userId);
      // Save the user in the state.
      setUserId(userId.userId);
    } else {
      // If user does not exist, then make a call to create the user on Firebase.
      DatabaseCalls.createUser().then((newUserId) => {
        // Save the new user in the state.
        setUserId(newUserId);
        // Save the user Id in localStorage.
        storeLocalUser();
      });
    }
  }

  // ** LOCAL STORAGE
  // Store and retrieve the user id from local storage, if the user refreshes the page.
  const storeLocalUser = () => {
    const notebotUserStore = userId;
    localStorage.setItem('notebotUserStore', JSON.stringify(notebotUserStore));
  }
  const retrieveLocalUser = () => {
    const notebotUserStore = JSON.parse(localStorage.getItem('notebotUserStore'));
    return notebotUserStore;
  }

  return [
      initUser
    ];
}

export default useUser;
