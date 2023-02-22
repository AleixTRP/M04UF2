import React from 'react'
class CountButton extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			contador: 0

		};
	}

			render()
			{
				return (
	<button onClick={()=> alert("ole") }>Habla</button>
				);

			}
}

export default CountButton
