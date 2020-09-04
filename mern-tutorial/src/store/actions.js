export const actionNames = {
  changeCurrentLocation : "CHANGE_CURRENT_LOCATION",

  createUser : "CREATE_USER",
  createUserLocally: "CREATE_USER_LOCALLY",

  createExercise : "CREATE_EXERCISE",
  toggleExerciseSent : "TOGGLE_EXERCISE_SENT",
  createExerciseLocally : "CREATE_EXERCISE_LOCALLY",

  fetchUsers : "FETCH_USERS",
  addFetchedUsers : "ADD_FETCHED_USERS",

  fetchExercises : "FETCH_EXERCISES",
  addFetchedExercises : "ADD_FETCHED_EXERCISES",

  deleteExerciseFromApi : "DELETE_EXERCISE_FROM_API",
  deleteExerciseLocally : "DELETE_EXERCISE_LOCALLY",
  
}


export const changeCurrentLocation = (newLocation) =>{
  return ({
    type : actionNames.changeCurrentLocation,
    newLocation
  })
};



export const createUser = (newUser) => {
  return ({
    type: actionNames.createUser,
    newUser,
  })
}
/*export const createUserLocally = (newUser) => {
  return {
    type: actionNames.createUserLocally,
    newUser,
  }
}*/


export const createExercise = (newExercise) => {
  return ({
    type: actionNames.createExercise,
    newExercise,
  })
}
/*export const createExerciseLocally = (newExercise) => {
  return ({
    type: actionNames.createExerciseLocally,
    newExercise,
  })
}*/


export const fetchUsers = () => {
  return ({
    type: actionNames.fetchUsers,
  })
}

export const addFetchedUsers = (userCollection) => {
  return ({
    type : actionNames.addFetchedUsers,
    userCollection,
  });
}



export const fetchExercises = () => {
  return ({
    type: actionNames.fetchExercises,
  });
}

export const addFetchedExercises = (exerciseCollection) => {
  return ({
    type: actionNames.addFetchedExercises,
    exerciseCollection,
  });
}


export const deleteExerciseFromApi = (id) => {
  return ({
    type: actionNames.deleteExerciseFromApi,
    id,
  })
}
export const deleteExerciseLocally = (id) =>{
  return ({
    type: actionNames.deleteExerciseLocally,
    id,
  })
}

export const toggleExerciseSent = (bool) => {
  return ({
    type:actionNames.toggleExerciseSent,
    bool,
  })
}