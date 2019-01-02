import React from 'react';
import Header from './components/header';
import Table from './components/Table';
import ImportOptions from './components/ImportOptions';
import FilePicker from './components/FileChooser';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.data = [ [ '', 'Ford', 'Volvo', 'Toyota', 'Honda' ], [ '2016', 10, 11, 12, 13 ], [ '2017', 20, 11, 14, 13 ], [ '2018', 30, 15, 12, 13 ] ];
	}
	render() {
		return (
			<div className='ml-3 mt-4 mr-3'>
				<Header />
				<form>
					<ImportOptions />
					<FilePicker> </FilePicker>
				</form>

				<Table />
			</div>
		);
	}
}

export default App;
