export default (state = {loading: false, components: []}, action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {

    default:
      return state;
  }
};
