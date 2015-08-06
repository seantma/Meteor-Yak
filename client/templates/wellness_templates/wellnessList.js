Template.wellnessList.helpers({
	yaks: function() {
		return WellnessYaks.find({}, {sort : {score: -1}});
	}
})