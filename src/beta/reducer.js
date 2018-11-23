
  const initialState = {
    url: '',
    loading: false,
    error: false,
  };
  const reducer = (state = initialState, action) => {
      console.log(action);
    switch (action.type) {
      case 'REQUESTED_DATA':
        return {
          url: '',
          loading: true,
          error: false,
        };
      case 'REQUESTED_DATA_SUCCEEDED':
        return {
          url: action.url,
          loading: false,
          error: false,
        };
      case 'REQUESTED_DATA_FAILED':
        return {
          url: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };

  export default reducer;