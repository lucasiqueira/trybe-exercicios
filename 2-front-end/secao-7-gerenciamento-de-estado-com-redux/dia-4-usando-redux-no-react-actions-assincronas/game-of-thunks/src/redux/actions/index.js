// ? Action Types
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return {
    type: REQUEST_STARTED
  };
}

function requestSuccessful(data) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchAPI(name) {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(requestSuccessful(data[0]));
    } catch {
      dispatch(requestFailed('API request failed!'));
    }
  }
}