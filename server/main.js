import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
  // code to run on server at startup
});
