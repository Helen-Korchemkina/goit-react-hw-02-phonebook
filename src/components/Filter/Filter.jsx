import React from 'react';

const Filter = ({ value, onChange }) => (
 
<label htmlFor="">
Find contacts by name
<input type="text" value={value} onChange={onChange} />
</label> 
);

export default Filter;