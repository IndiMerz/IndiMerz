// exporting ultiple functions

function makeStar(value) {
	return `${value}*`
};

function makeMoney (amount){
    return `$${amount}`
}

export {
    makeStar,
    makeMoney
};
