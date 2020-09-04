import {takeEvery, put ,call} from "redux-saga/effects";
import axios from "axios";

import {actionNames, addFetchedUsers, fetchUsers as updateUsersCollection, addFetchedExercises, fetchExercises as updateExercisesCollection, deleteExerciseLocally, toggleExerciseSent, } from "./actions";

const port = 3001;
const urls = {
  sendNewUser : `http://localhost:${port}/users/add/`,
  getUsers : `http://localhost:${port}/users/`,
  sendNewExercise : `http://localhost:${port}/exercises/add/`,
  exercises : `http://localhost:${port}/exercises/`
}


function* mainSaga  (){
  yield takeEvery(actionNames.createUser, sendNewUserSaga);
  yield takeEvery(actionNames.createExercise, sendNewExerciseSaga);
  yield takeEvery(actionNames.fetchUsers, fetchUsersSaga);
  yield takeEvery(actionNames.fetchExercises, fetchExercisesSaga);
  yield takeEvery(actionNames.deleteExerciseFromApi, deleteExerciseSaga);
};



function* deleteExerciseSaga (action) {
  try {
    const response = yield call(deleteExercise,action.id);

    yield put(deleteExerciseLocally(action.id));
  }catch(error){
    console.log("Error", error);
  }
}

const deleteExercise = async (id) => {
  const resp = (await axios.delete(urls.exercises + id)).data;
  console.log(resp);

  return resp;
}



function* fetchExercisesSaga (){
  try {
    const response = yield call(fetchExercises);

    yield put(addFetchedExercises(response));
  } catch (error) {
    console.log("Error", error);
  }
}

const fetchExercises = async () =>{
  const response = (await axios.get(urls.exercises) ).data;

  return (response);
}



function* fetchUsersSaga(action){
  try {
    const response = yield call(fetchUsers);

    yield put(addFetchedUsers(response));
  } catch (error) {
    console.log("Error", error);
  }
}

const fetchUsers = async () =>{
  const response = (await axios.get(urls.getUsers) ).data;

  return (response);
}



function* sendNewExerciseSaga(action) {
  try {
    const response = yield call(sendNewExercise, action.newExercise);

    yield put(toggleExerciseSent(true));
  } catch (error) {
    console.log("Error", error);
  }
}

const sendNewExercise = async (newExercise) => {
  let response = (await axios.post(urls.sendNewExercise, newExercise)).data;
};



function* sendNewUserSaga(action){
  try{
    const response = yield call(sendNewUser, action.newUser);
    

  }catch(error){
    console.log("Error", error);
  }
}

const sendNewUser = async (newUser) =>{
  let response = (await axios.post(urls.sendNewUser, newUser)).data;
  console.log(response);
}



export default mainSaga;