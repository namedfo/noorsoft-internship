import { call, put, takeLatest } from "redux-saga/effects";
import { reduxSagaFirebase } from "../../../index";
import { SET_DIALOG_IN_ACTIVE } from "../../constans/mainConstans/dialogsConstans";
import { dialogsActions } from "../../actions/mainActions/dialogsActions";

function* enterDialog(action) {
  console.log(action);
  yield call(reduxSagaFirebase.database.update, `/dialogs/${action.obj.id}`, {
    id: action.obj.id,
    name: action.obj.name,
    status: "active",
  });
  yield put(dialogsActions.dialogsRequest());
}

export default function* enterDialogWatch() {
  yield takeLatest(SET_DIALOG_IN_ACTIVE, enterDialog);
}
