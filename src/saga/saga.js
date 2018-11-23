import { takeEvery } from 'redux-saga/effects';
import fetchDataAsync from '../beta/saga';

function* rootSaga() {
console.log('rootsaga');
yield takeEvery('FETCH_DATA_S',fetchDataAsync);

}

export default rootSaga;