import { takeEvery, put, call } from "redux-saga/effects";
import apiClient from "../api-client";

import {
  actionNames,

  addFetchedUsers,
  addFetchedExercises,

  deleteExerciseLocally,

  toggleExerciseSent,
  saveExerciseToEdit,
  
  updateExerciseLocally,
  toggleExerciseEdited,
} from "./actions";

const apiUrl = process.env.REACT_APP_API_URL;

const urls = {
  sendNewUser: `${apiUrl}/users/add/`,
  getUsers: `${apiUrl}/users/`,
  sendNewExercise: `${apiUrl}/exercises/add/`,
  exercises: `${apiUrl}/exercises/`,
  updateExercise: `${apiUrl}/exercises/update/`,
}


function* mainSaga() {
  yield takeEvery(actionNames.createUser, sendNewUserSaga);
  yield takeEvery(actionNames.createExercise, sendNewExerciseSaga);

  yield takeEvery(actionNames.fetchUsers, fetchUsersSaga);
  yield takeEvery(actionNames.fetchExercises, fetchExercisesSaga);

  yield takeEvery(actionNames.deleteExerciseFromApi, deleteExerciseSaga);
  yield takeEvery(actionNames.updateExerciseById, updateExerciseSaga);

  yield takeEvery(actionNames.fetchExerciseById, fetchExerciseByIdSaga);
};

// --------------- Exercises list view -----------------
function* fetchExercisesSaga() {
  try {
    const exercises = yield call(fetchExercises);

    yield put(addFetchedExercises(exercises));
  } catch (error) {
    console.log("Error", error);
  }
}
const fetchExercises = async () => { // The function that actually calls the API and gets the collection
  const exercises = (await apiClient.get(urls.exercises)).data;

  return (exercises);
}

function* deleteExerciseSaga(action) {
  try {
    yield call(deleteExercise, action.exerciseId);

    yield put(deleteExerciseLocally(action.exerciseId));
  } catch (error) {
    console.log("Error", error);
    alert("Cuoldn't delete")
  }
}

const deleteExercise = async (id) => {
  const status = (await apiClient.delete(urls.exercises + id)).status;

  return status;
}

//------------ Edit exercise view ---------------
function* fetchExerciseByIdSaga(action) {
  try {
    const exercises = yield call(fetchExerciseById, action.exerciseId);

    yield put(saveExerciseToEdit(exercises));
  } catch (error) {
    console.log("Error", error);
    alert("Couldn't update");
  }
}
const fetchExerciseById = async (id) => {
  const exercise = (await apiClient.get(urls.exercises + id)).data;

  return exercise;
}

function* updateExerciseSaga(action) {
  try {
    yield call(updateExercise, action.exerciseId, action.newExercise);

    yield put(updateExerciseLocally(action.newExercise));
    yield put(toggleExerciseEdited(true)); // This is done so the user is redirecte to another view

  } catch (error) {
    console.log("Error", error);
  }
}
const updateExercise = async (id, exercise) => {
  await apiClient.post(urls.updateExercise + id, exercise)
}

// ------------- Common to Edit and Create views -----------
function* fetchUsersSaga(action) {
  try {
    const users = yield call(fetchUsers);

    yield put(addFetchedUsers(users));
  } catch (error) {
    console.log("Error", error);
  }
}
const fetchUsers = async () => {
  const users = (await apiClient.get(urls.getUsers)).data;

  return (users);
}

//---------------- Create exercise view ---------------
function* sendNewExerciseSaga(action) {
  try {
    yield call(sendNewExercise, action.newExercise);

    yield put(toggleExerciseSent(true)); // After this the user is redirected to another view
  } catch (error) {
    console.log("Error", error);
  }
}
const sendNewExercise = async (newExercise) => {
  await apiClient.post(urls.sendNewExercise, newExercise);
};

//---------------- Create user view ---------------
function* sendNewUserSaga(action) {
  try {
    yield call(sendNewUser, action.newUser);


  } catch (error) {
    console.log("Error", error);
  }
}

const sendNewUser = async (newUser) => {
  await apiClient.post(urls.sendNewUser, newUser);
}

export default mainSaga;