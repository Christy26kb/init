
   const fetchDataRequest = () => ({
    type: 'REQUESTED_DATA'
  });
  
   const fetchDataSuccess = (data) => ({
    url: data.url,
    type: 'REQUESTED_DATA_SUCCEEDED'
  });
  
   const fetchDataFailed = () => ({
    type: 'REQUESTED_DATA_FAILED'
  });

   const fetchData_S = () => ({
    type: 'FETCH_DATA_S'
  });

  export { fetchData_S, fetchDataSuccess, fetchDataRequest, fetchDataFailed };
