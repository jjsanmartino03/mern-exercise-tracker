import {combineReducers} from "redux";

const initialStore = {
  navbar : {
    links: [
      {path : "", text: "Home"},
      {path: "hola", text: "Hola"}
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
    default:
      return (globalState);
  }
}

const mainReducer = combineReducers({
  navbar : NavbarReducer,
  global : globalReducer,
});

export default mainReducer;