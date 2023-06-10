const date = new Date(2020, 11, 12, 18, 21, 32);
const month = date.getMonth();
const hour = date.getHours();

switch (month) {
	case 1:
		console.log('It is Jan');
		break;
	case 2:
		console.log('It feb');
		break;
	case 3:
		console.log('It is Mar');
		break;

	default:
		console.log('It is not jan, feb or mar');
		break;
}


switch (true) {
	case hour >=6 && hour < 12:
		console.log('Good Morning');
		break;
	case hour >=12 && hour < 18:
		console.log('Good Afternoon');
		break;
	case hour >=18 && hour < 22:
		console.log('Good Night');
		break;
	
    default:
        console.log('zzzzzz');
		break;
}