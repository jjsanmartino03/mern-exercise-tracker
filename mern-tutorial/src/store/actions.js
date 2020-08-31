export const actionNames = {
  changeCurrentLocation : "CHANGE_CURRENT_LOCATION",
}

export const changeCurrentLocation = (newLocation) =>{
  return ({
    type : actionNames.changeCurrentLocation,
    newLocation
  })
};