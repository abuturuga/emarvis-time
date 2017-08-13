import {
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
  UNIT_DELETE_ERROR } from '../actions/unit-actions';


export default (state = {loading: false, components: []}, action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {
    case UNIT_FETCH_ALL_START:
    case UNIT_FETCH_START:
    case UNIT_CREATE_START:
    case UNIT_UPDATE_START:
    case UNIT_DELETE_START:
      return Object.assign({}, state, {load: true, errors: []});

    case UNIT_FETCH_ALL_END:
      return Object.assign({}, state, {components: action.payload});

    case UNIT_CREATE_END:
    case UNIT_FETCH_END: {
      const {components} = state;
      components.push(action.payload);
      return Object.assign({}, state, {components});
    }

    case UNIT_UPDATE_END: {
      const {components} = state,
            index = components.findIndex(u => u.id === action.payload.id);

      if(!index) return state;
      components[index] = action.payload;
      return Object.assign({}, state, {components});
    }

    case UNIT_DELETE_END: {
      const {components} = state,
            index = components.findIndex(u => u.id === action.payload.id);

      if(!index) return state;
      components.splice(index, 1);
      return Object.assign({}, state, {components});
    }

    case UNIT_FETCH_ALL_ERROR:
    case UNIT_FETCH_ERROR:
    case UNIT_CREATE_ERROR:
    case UNIT_UPDATE_ERROR:
    case UNIT_DELETE_ERROR:
      return Object.assign({}, state, {errors: [action.payload]});

    default:
      return state;
  }
};
