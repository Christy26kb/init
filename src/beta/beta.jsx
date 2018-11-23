import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData_S, fetchDataRequest, fetchDataSuccess, fetchDataFailed } from './actions';

class Beta extends Component {
  render() {
    console.log(this.props);
		const { loading, error, url, fetchData_S } = this.props;
    return (
      <div>
       <button type="button" onClick={fetchData_S}>Fetch Data</button>
        <div>
        {loading
            ? <p>Loading...</p> 
            : error
                ? <p>Error, try again</p>
                : <p><img src={url} alt="Cant load"/></p>} 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    url: state.url
  }
}

const mapDispatchToProps = {
  fetchData_S: fetchData_S,
  fetchDataRequest: fetchDataRequest,
  fetchDataSuccess: fetchDataSuccess,
  fetchDataFailed: fetchDataFailed
}

export default connect(mapStateToProps,mapDispatchToProps)(Beta);
