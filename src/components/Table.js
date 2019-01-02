import React from "react";
import { HotTable } from "@handsontable/react"; // for Handsontable Community Edition
import Handsontable from "../../node_modules/handsontable";
import DataParser from './DataParser'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(6, 10);
    this.state = { data: [] };
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      data: [...this.handsontableData]
    });
  }

  render() {
    return (
      <div className="card">
        <HotTable
          settings={{
            data: this.state.data,
            colHeaders: true
          }}
        />
        <DataParser></DataParser>
      </div>
    );
  }
}

export default Table;
