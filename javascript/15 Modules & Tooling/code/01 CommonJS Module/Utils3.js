// exporting ultiple functions

function makeStar(value) {
	return `${value}*`
};

function makeMoney (amount){
    return `$${amount}`
}

module.exports = {
    makeStar,
    makeMoney
};
