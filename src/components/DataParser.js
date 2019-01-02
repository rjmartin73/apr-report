import React, { Component } from 'react';
import CSVReader from '../../node_modules/react-csv-reader'

class DataParser extends React.Component{
   
    render() {
        return (
          <CSVReader
            cssClass="csv-reader-input"
            label="Select CSV with secret Death Star statistics"
            onFileLoaded={this.handleForce}
            onError={this.handleDarkSideForce}
            inputId="ObiWan"
            inputStyle={{color: 'red'}}
          />
        )
      }
}



export default DataParser
