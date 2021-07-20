import { combineReducers } from "redux";

import { actionNames } from "./actions";

const initialStore = {
  global: {
    currentLocation: "", // To highlight the link of the current location
    users: [], // A collection of the users
    exercises: [], // A collection of the exercises
  },
  navbar: {
    links: [ // These objects define what should appear on the navbar
      {
        path: "/", text: "Exercises"
      },
      {
        path: "/create", text: "Create"
      },
      {
        path: "/signup", text: "Create a user"
      },
    ]
  },
  createExerciseView: {
    sent: false, // If exercise is sent, then redirect to another view
  },
  editExerciseView: {
    exercise: {}, // The exercise to edit
    loaded: false, // Just to see if the exercise has already been fetched from the API. As I say in the README, I've got to work on how to display API delays.
    edited: false, // If edited, redirect
  },
}

const NavbarReducer = (navbarState = initialStore.navbar, action) => {
  switch (action.type) {
    default:
      return (navbarState); //It never changes
  }
}

const globalReducer = (globalState = initialStore.global, action) => {
  switch (action.type) {
    case actionNames.changeCurrentLocation: // Update the location on the SPA
      return {
        ...globalState,
        currentLocation: action.newLocation,
      };

    case actionNames.addFetchedUsers:// Add the fetched users to the store
      return {
        ...globalState,
        users: action.userCollection,
      };

    case actionNames.addFetchedExercises: // Add the fetched exercises to the store
      return {
        ...globalState,
        exercises: action.exerciseCollection,
      };

    case actionNames.deleteExerciseLocally: // Delete the exercise
      return {
        ...globalState,
        exercises: globalState.exercises.filter(
          exercise => (
            !(exercise._id === action.exerciseId))
        )
      };

    case actionNames.updateExerciseLocally: // Update the exercise
      return {
        ...globalState,
        exercises: globalState.exercises.map(
          value =>
          (value._id === action.newExercise._id ? action.newExercise : value)
        )
      };

    default:
      return (globalState);
  }
}

const createExerciseViewReducer = (state = initialStore.createExerciseView, action) => {
  switch (action.type) {
    case actionNames.toggleExerciseSent:
      return { ...state, sent: action.bool };
    default:
      return { ...state };
  }
}

const editExerciseViewReducer = (state = initialStore.editExerciseView, action) => {
  switch (action.type) {
    case actionNames.saveExerciseToEdit: // Saved the fetched exercise in the store
      return {
        ...state,
        exercise: action.exercise,
        loaded: true
      }
    case actionNames.setEditViewToDefault: // Restore the inital state of the Edit view.
      return initialStore.editExerciseView;
    case actionNames.toggleExerciseEdited: // Set exercise as edited so the user is redirecter to another view
      return { ...state, edited: action.bool }
    default:
      return { ...state };
  }
}

const mainReducer = combineReducers({
  navbar: NavbarReducer,
  global: globalReducer,
  createExerciseView: createExerciseViewReducer,
  editExerciseView: editExerciseViewReducer,
});

export default mainReducer;