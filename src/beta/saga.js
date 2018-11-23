import  {put, call} from 'redux-saga/effects';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailed } from './actions';

function* fetchDataAsync() {
    console.log('component saga');
    try {
      yield put(fetchDataRequest());
      const data = yield call(() => {
        return fetch('https://jsonplaceholder.typicode.com/photos/1')
                .then(res => res.json())
        }
      );
      yield put(fetchDataSuccess(data));
    } catch (error) {
      yield put(fetchDataFailed());
    }
  }

  export default fetchDataAsync;