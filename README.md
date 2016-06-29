# object-array-extend

### Examples

	let extend = require('object-array-extend');

	let style_1 = {
		backgroundColor: 'red';
	}			
	
	let style_2 = [
		{
			backgroundColor: 'green'
		},
		{
			width: 100
		}
	]
	
	let styles = extend(style_1, style_2);
	
	console.log(styles); 
	// log:
	// {
	//	backgroundColor: 'green',
	//	width: 100
	// }




