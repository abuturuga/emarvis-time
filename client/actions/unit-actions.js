const UNIT_FETCH_ALL_START = 'UNIT_FETCH_ALL_START',
      UNIT_FETCH_ALL_END = 'UNIT_FETCH_ALL_END',
      UNIT_FETCH_ALL_ERROR = 'UNIT_FETCH_ALL_ERROR',

      UNIT_FETCH_START = 'UNIT_FETCH_START',
      UNIT_FETCH_END = 'UNIT_FETCH_END',
      UNIT_FETCH_ERROR = 'UNIT_FETCH_ERROR',

      UNIT_CREATE_START = 'UNIT_CREATE_START',
      UNIT_CREATE_END = 'UNIT_CREATE_END',
      UNIT_CREATE_ERROR = 'UNIT_CREATE_ERROR',

      UNIT_UPDATE_START = 'UNIT_UPDATE_START',
      UNIT_UPDATE_END = 'UNIT_UPDATE_END',
      UNIT_UPDATE_ERROR = 'UNIT_UPDATE_ERROR',

      UNIT_DELETE_START = 'UNITDELETE__START',
      UNIT_DELETE_END = 'UNIT_DELETE_END',
      UNIT_DELETE_ERROR = 'UNIT_DELETE_ERROR';

const url = '/api/v1.0/unit';

const fetchUnits = () => dispatch => {
  dispatch({type: UNIT_FETCH_ALL_START});
  fetch(url)
    .then(response => response.json())
    .then(response => {
      dispatch({type: UNIT_FETCH_ALL_END, payload: response});
    })
    .catch(error => {
      dispatch({type: UNIT_FETCH_ALL_ERROR, payload: error});
    });
};

const createUnit = body => dispatch => {
  dispatch({type: UNIT_CREATE_START});
  fetch(url, {method: 'POST', body})
    .then(response => response.json())
    .then(response => {
      dispatch({type: UNIT_CREATE_END, payload: response});
    })
    .catch(error => {
      dispatch({type: UNIT_CREATE_ERROR, payload: error});
    });
};

const updateUnit = body => dispatch => {

};

export {
  fetchUnits,
  createUnit,
  updateUnit,
  url,

  UNIT_FETCH_ALL_START,
  UNIT_FETCH_ALL_END,
  UNIT_FETCH_ALL_ERROR,

  UNIT_FETCH_START,
  UNIT_FETCH_END,
  UNIT_FETCH_ERROR,

  UNIT_CREATE_START,
  UNIT_CREATE_END,
  UNIT_CREATE_ERROR,

  UNIT_UPDATE_START,
  UNIT_UPDATE_END,
  UNIT_UPDATE_ERROR,

  UNIT_DELETE_START,
  UNIT_DELETE_END,
  UNIT_DELETE_ERROR
};
