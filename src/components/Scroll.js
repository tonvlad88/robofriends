import React from 'react';

const Scroll = (props) => {	
	return (
		<div style={{ margin: '15px 0', overflow: 'scroll', border: '5px solid black', height: '800px' }}>	
			{props.children}
		</div>
	);
};

export default Scroll; 