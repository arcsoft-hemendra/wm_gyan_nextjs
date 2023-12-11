import firebase from "./firebaseConfiguration";

export const customEvent = (eventName, data) => {
  if (!!firebase) {
    firebase.analytics().logEvent(eventName, data);
  }
};
