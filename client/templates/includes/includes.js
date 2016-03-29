Template.sidebar.helpers({
	zaal: function(){
		return Zaal.find({}, {
			sort: {
				name: 1
			}
		});
	}
});