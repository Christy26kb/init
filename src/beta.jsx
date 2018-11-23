import React, { Component } from 'react';

class Beta extends Component {
  render() {
		const { loading, error, url } = this.props;
    return (
      <div>
       <button type="button">Fetch Data</button>
        <div>
        {loading
            ? <p>Loading...</p> 
            : error
                ? <p>Error, try again</p>
                : <p><img src={url}/></p>} 
        </div>
      </div>
    );
  }
}

export default App;
