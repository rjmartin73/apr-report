import React from 'react';
import { Button, UncontrolledCollapse } from 'reactstrap';

export default function ImprtOptions() {
	return (
		<div>
			<div className='d-flex mb-3'>
				<Button color='primary' id='toggler'>
					<i className='fas fa-cogs' />&emsp;Import Options
				</Button>
			</div>

			<UncontrolledCollapse toggler='#toggler'>
				<div className='form-row'>
					<div className='form-group form-group-sm ml-4'>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='download' name='download' />
							<label htmlFor='download' className='form-check-label'>
								Download
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='stream' name='stream' />
							<label htmlFor='stream' className='form-check-label'>
								Stream
							</label>
						</div>

						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='chunk' name='chunk' />
							<label htmlFor='chunk' className='form-check-label'>
								Chunk
							</label>
						</div>
					</div>
				</div>
				<div className='form-row'>
					<div className='form-group form-group-sm ml-4 '>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='worker' />
							<label htmlFor='worker' className='form-check-label'>
								Worker thread
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='header' />
							<label htmlFor='header' className='form-check-label'>
								Header row
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='dynamicTyping' />
							<label htmlFor='dynamicTyping' className='form-check-label'>
								Dynamic typing
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='fastmode' />
							<label htmlFor='fastmode' className='form-check-label'>
								Fast mode
							</label>
						</div>
					</div>
				</div>
				<div className='form-row'>
					<div className='form-group form-group-sm ml-4 '>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='skipEmptyLines' />
							<label htmlFor='skipEmptyLines' className='form-check-label'>
								Skip empty lines
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='step-pause' />
							<label htmlFor='step-pause' className='form-check-label'>
								Pause on step
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='checkbox' id='print-steps' />
							<label htmlFor='print-steps' className='form-check-label'>
								Log each step/chunk
							</label>
						</div>
					</div>
				</div>
				<div className='form-row'>
					<div className='input-group form-group col-md-2 ml-2'>
						<label htmlFor='delimiter'>Delimeter:</label>
						<div className='input-group mb-3'>
							<input className='form-control' type='text' size='5' placeholder='auto' id='delimiter' />
							<div className='input-group-append'>
								<span className='input-group-text' id='tab'>
									<a className='input-group col-md-2' href='javascript' id='insert-tab'>
										\tab
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='form-row ml-2'>
					<label htmlFor='line-endings'>Line Endings:</label>
					<div className='input-group ml-2' id='line-endings'>
						<div className='form-check form-check-inline'>
							<input className='form-check-input' type='radio' name='newline' id='newline-auto' defaultChecked />
							<label htmlFor='newline-auto'>Auto</label>
						</div>
						<div className='form-check form-check-inline'>
							<input type='radio' className='form-check-input' name='newline' id='newline-n' />
							<label htmlFor='newline-n'>\n</label>
						</div>
						<div className='form-check form-check-inline'>
							<input type='radio' className='form-check-input' name='newline' id='newline-r' />
							<label htmlFor='newline-r'>\r</label>
						</div>
						<div className='form-check form-check-inline'>
							<input type='radio' className='form-check-input' name='newline' id='newline-rn' />
							<label htmlFor='newline-rn'>\r\n</label>
						</div>
					</div>
				</div>
				<div className='form-row ml-2'>
					<div className='col-sm-2 mb-3'>
						<label htmlFor='preview'>Preview Lines:</label>
						<div className='input-group form-group ml-2'>
							<input type='number' min='0' max='100' placeholder='default' id='preview' />
						</div>
					</div>
					<div className='col-sm-2 mb-3'>
						<label htmlFor='encoding'>Encoding:</label>
						<div className='input-group form-group ml-2'>
							<input type='text' placeholder='default' size='10' id='ecoding' />
						</div>
					</div>
					<div className='col-sm-2 mb-3'>
						<label htmlFor='comments'>Encoding:</label>
						<div className='input-group form-group ml-2'>
							<input type='text' placeholder='default' size='10' id='comments' />
						</div>
					</div>
					<div className='col-sm-2 mb-3'>
						<label htmlFor='localChunkSize'>Local Chunk Size:</label>
						<div className='input-group form-group ml-2'>
							<input type='number' min='0' max='10000' placeholder='default' id='localChunkSize' />
						</div>
					</div>
					<div className='col-sm-2 mb-3'>
						<label htmlFor='remoteChunkSize'>Remote Chunk Size:</label>
						<div className='input-group form-group ml-2'>
							<input type='number' min='0' max='100' placeholder='default' id='remoteChunkSize' />
						</div>
					</div>
				</div>
			</UncontrolledCollapse>
		</div>
	);
}
