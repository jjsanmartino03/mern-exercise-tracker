export const actionNames = {
  changeCurrentLocation : "CHANGE_CURRENT_LOCATION",
  createUser : "CREATE_USER"
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
