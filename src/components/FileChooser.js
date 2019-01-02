import React, { Component } from 'react';

export default class FileChooser extends Component {
	constructor(props) {
		super(props);
		this.state = { fileName: [] };
	}

	myFunc() {
		if (document.querySelector('#files').files) {
			this.setState({
				fileName: [ document.querySelector('#files') ],
			});
		}
	}

	render() {
		console.log(this.state.fileName);
		return (
			<div className='formGroup mb-3'>
				<label htmlFor='formControlFile'>File Input</label>
				<input type='file' className='form-control-file' id='files' multiple />
			</div>
		);
	}
}
