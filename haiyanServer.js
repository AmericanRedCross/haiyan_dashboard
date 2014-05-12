var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , BasicStrategy = require('passport-http').BasicStrategy
  , userauth = require('./js/userauth.js');

function findByUsername(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}


// Use the BasicStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.
passport.use(new BasicStrategy({
  },
  function(username, password, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // Find the user by username.  If there is no user with the given
      // username, or the password is not correct, set the user to `false` to
      // indicate failure.  Otherwise, return the authenticated `user`.
      findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password != password) { return done(null, false); }
        return done(null, user);
      })
    });
  }
));

var app = express();

// configure Express
app.configure(function() {
  app.use(express.logger());
  // Initialize Passport!  Note: no need to use session middleware when each
  // request carries authentication credentials, as is the case with HTTP Basic.
  app.use(passport.initialize());
  app.use(app.router);
  app.use(express.static(__dirname + '/'));
  // app.use(express.static(__dirname + '/secure'));
});


// app.get('/'
//   // Authenticate using HTTP Basic credentials, with session support disabled.
//   // passport.authenticate('basic', { session: false })

// );

app.get('/secure',
  // Authenticate using HTTP Basic credentials, with session support disabled.
  passport.authenticate('basic', { session: false })
);

app.listen(8080);