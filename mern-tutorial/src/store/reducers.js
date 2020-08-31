import {combineReducers} from "redux";

import {actionNames} from "./actions";

const initialStore = {
  navbar : {
    links: [
      {path : "", text: "Home"},
      {path: "/create", text: "Create"}
    ]
  },
  global: {
    currentLocation : "",
  }
}

const NavbarReducer = (navbarState = initialStore.navbar, action) => {
  switch (action.type){
    default:
      return (navbarState);
  }
}
const globalReducer = (globalState = initialStore.global, action) => {
  switch(action.type){
    case actionNames.changeCurrentLocation:
      return {...globalState, currentLocation : action.newLocation};
    default:
      return (globalState);
  }
}

const mainReducer = combineReducers({
  navbar : NavbarReducer,
  global : globalReducer,
});

export default mainReducer;