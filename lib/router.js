Router.configure({
	layoutTemplate: 'layout'
});

var OnBeforeActions = {
	loginRequired: function(){
		if(!Meteor.userId()){
			Router.go('/');
		} else {
			this.next();
		}
	}
};
