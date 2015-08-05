Meteor.methods({
	yakInsert: function(yak) {
		var postId = Yaks.insert({
			yak : yak, 
			score : 0, 
			submitted : new Date(), 
		});
	}, 

	//Josh: Inserts wellness posts into the WellnessYaks collection
// I'm thinking Yaks in YakInsert can be substituted for WellnessYaks in main.js
//Josh: replaced yak : yak, with WellnessYak

	wellnessInsert: function(yak) {
		var postId = WellnessYaks.insert({
			yak : yak, 
			score : 0, 
			submitted : new Date(), 
		});},  

	commentInsert: function(comment) {
		Comments.insert(comment);
	}
});