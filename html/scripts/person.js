function Person (fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("hello, my name is " + this.name + 
			"and my favorite color " + this.favColor + ".");
	}
};

module.exports = Person;