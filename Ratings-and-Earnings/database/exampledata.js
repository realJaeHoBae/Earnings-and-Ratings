const faker = require('faker');

var ratingState = ['Buy', 'Hold', 'Sell'];
var quarters = ['Q42016', 'Q12017', 'Q22017', 'Q32017', 'Q42017', 'Q12018', 'Q22018'];
var data = [];


for (var i = 0; i < 100; i++) {
	var raterArray = [];
	var estimatedArray = [];
	var actualArray = [];
	var est = {};
	var act = {};

	quarters.forEach(function(element, index) {
		est.date = element;
		act.date = element;
		est.value = faker.commerce.price(100000000, 10000000000,  dec[2], symbol['']);
		act.value = est.value * (0.15 * Math.random() + 1)
		estimatedArray.push(est.slice());
		actualArray.push(est.slice());
	})

	for (var i = 0; i < (50 + Math.floor(150 * Math.random())); i++) {
		var rater = {};
		rater.id = faker.random.number(1000000);
		rater.ratingState = ratingState[Math.floor(2.99 * Math.random())];
		raterArray.push(rater);
	}

	var oneData = {};
	oneData.id = faker.random.number(1000000);
	oneData.mame = faker.name.jobTitle();
	oneData.raters = raterArray.slice();
	oneData.estimated = estimatedArray.slice();
	oneData.actual = actualArray.slice();
	oneData.bestSummary = faker.lorem.paragraph();
	oneData.sellSummary = faker.lorem.paragraph();

	data.push(oneData);
};

console.log(data);

exports.data = data;