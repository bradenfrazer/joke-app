import React from 'react';

const Status = (props) => (

	<div>
		<p id="status" style={{color: props.statusColor}}>{ props.status }</p>
	</div>

);

export default Status;
