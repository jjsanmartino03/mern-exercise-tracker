import { combineReducers } from "redux";

import { actionNames } from "./actions";

const initialStore = {
  navbar: {
    links: [
      { path: "/", text: "Exercises" },
      { path: "/create", text: "Create" },
      { path: "/signup", text: "Create a user" },
    ]
  },
  global: {
    currentLocation: "",
    users: [],
    exercises: [],
  },
  exercisesView: {
    sent: false,
  },
  editView: {
    exercise: {},
    loaded: false,
    edited: false,
  },
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
    case actionNames.updateExerciseLocally:
      return {
        ...globalState,
        exercises: globalState.exercises.map(value =>
          (value._id === action.newExercise._id ? action.newExercise : value)
        )
      };
    default:
      return (globalState);
  }
}

const exerciseViewReducer = (state = initialStore.exercisesView, action) => {
  switch (action.type) {
    case actionNames.toggleExerciseSent:
      return { ...state, sent: action.bool };
    default:
      return { ...state };
  }
}

const editViewReducer = (state = initialStore.editView, action) => {
  switch (action.type) {
    case actionNames.saveExerciseToEdit:
      return { ...state, exercise: action.exercise, loaded: true }
    case actionNames.setEditViewToDefault:
      return initialStore.editView;
    case actionNames.toggleExerciseEdited:
      return {...state, edited:action.bool}
    default:
      return { ...state };
  }
}

const mainReducer = combineReducers({
  navbar: NavbarReducer,
  global: globalReducer,
  exercisesView: exerciseViewReducer,
  editView: editViewReducer,
});

export default mainReducer;