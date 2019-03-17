import { takeEvery, call } from "redux-saga/effects";
import * as actions from "../actions";
import { toast } from "react-toastify";

function* weatherApiErrorReceived(action) {
  yield call(toast.error, `Error Received: ${action.code}`);
}

function* watchWeatherApiError() {
  yield takeEvery(actions.API_ERROR, weatherApiErrorReceived);
}

export default [watchWeatherApiError];
