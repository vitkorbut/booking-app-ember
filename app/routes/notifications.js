import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
  Route,
  RSVP,
  get
} = Ember;

export default Route.extend(AuthenticatedRouteMixin, {

	model() {
    return this.store.query('notification', {
      orderBy: 'toWhom',
	  	equalTo: this.get('currentUser.id')
	  })
  }
});