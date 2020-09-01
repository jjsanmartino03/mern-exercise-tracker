import {takeEvery, put ,call} from "redux-saga/effects";
import axios from "axios";

import {actionNames} from "./actions";

const urls = {
  sendNewUser : "http://localhost:5000/users/add/",
}


function* mainSaga  (){
  yield takeEvery(actionNames.createUser, sendNewUserSaga);
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
  alert(response);

}

export default mainSaga;