import { combineReducers } from "redux";

import { actionNames } from "./actions";

const initialStore = {
  navbar: {
    links: [
      { path: "/", text: "Home" },
      { path: "/create", text: "Create" },
      { path: "/signup", text: "Create a user" }
    ]
  },
  global: {
    currentLocation: "",
    users: [],
    exercises: [],
  },
  exercisesView: {
    sent : false,
  }
}

const NavbarReducer = (navbarState = initialStore.navbar, action) => {
  switch (action.type) {
    default:
      return (navbarState);
  }
}
const globalReducer = (globalState = initialStore.global, action) => {
  switch (action.type) {
    case actionNames.changeCurrentLocation:
      return { ...globalState, currentLocation: action.newLocation };
    case actionNames.addFetchedUsers:
      return {
        ...globalState,
        users: action.userCollection,
      };
    case actionNames.addFetchedExercises:
      return {
        ...globalState,
        exercises: action.exerciseCollection,
      };
    case actionNames.deleteExerciseLocally:
      return {
        ...globalState,
        exercises: globalState.exercises.filter(
          exercise => (!(exercise._id === action.id))
        )
      }
    default:
      return (globalState);
  }
}

const exerciseViewReducer = (state = initialStore.exercisesView, action) => {
  switch (action.type){
    case actionNames.toggleExerciseSent:
      return {...state, sent: action.bool};
      default:
        return {...state};
  }

}

const mainReducer = combineReducers({
  navbar: NavbarReducer,
  global: globalReducer,
  exercisesView : exerciseViewReducer,
});

export default mainReducer;