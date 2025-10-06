require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const AppleStrategy = require('passport-apple');

const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ? process.env.CLIENT_ORIGIN.split(',') : ['http://localhost:3000'];
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-me';
const AUTH_SUCCESS_REDIRECT = process.env.AUTH_SUCCESS_REDIRECT || '/auth/success';
const AUTH_FAILURE_REDIRECT = process.env.AUTH_FAILURE_REDIRECT || '/auth/failure';

// Basic in-memory user cache. Replace with a database for production use.
const users = new Map();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  if (users.has(id)) {
    done(null, users.get(id));
  } else {
    done(null, null);
  }
});

const registerGoogleStrategy = () => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = process.env;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    console.warn('Google OAuth strategy not registered. Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET.');
    return false;
  }

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL || '/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        const user = {
          id: `google-${profile.id}`,
          provider: 'google',
          displayName: profile.displayName,
          emails: profile.emails,
          photos: profile.photos,
        };
        users.set(user.id, user);
        return done(null, user);
      }
    )
  );
  return true;
};

const registerAppleStrategy = () => {
  const { APPLE_CLIENT_ID, APPLE_TEAM_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY } = process.env;

  if (!APPLE_CLIENT_ID || !APPLE_TEAM_ID || !APPLE_KEY_ID || !APPLE_PRIVATE_KEY) {
    console.warn('Apple Sign In strategy not registered. Missing one of APPLE_CLIENT_ID, APPLE_TEAM_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY.');
    return false;
  }

  passport.use(
    new AppleStrategy(
      {
        clientID: APPLE_CLIENT_ID,
        teamID: APPLE_TEAM_ID,
        keyID: APPLE_KEY_ID,
        privateKeyString: APPLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        callbackURL: process.env.APPLE_CALLBACK_URL || '/auth/apple/callback',
        scope: ['name', 'email'],
      },
      (accessToken, refreshToken, idToken, profile, done) => {
        const user = {
          id: `apple-${profile.id}`,
          provider: 'apple',
          displayName: profile?.name ? `${profile.name.firstName || ''} ${profile.name.lastName || ''}`.trim() : 'Apple User',
          emails: profile?.email ? [{ value: profile.email }] : [],
        };
        users.set(user.id, user);
        return done(null, user);
      }
    )
  );
  return true;
};

const googleStrategyRegistered = registerGoogleStrategy();
const appleStrategyRegistered = registerAppleStrategy();

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.json({
    service: 'auth-backend',
    googleStrategyRegistered,
    appleStrategyRegistered,
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

if (googleStrategyRegistered) {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: AUTH_FAILURE_REDIRECT }),
    (req, res) => {
      res.redirect(AUTH_SUCCESS_REDIRECT);
    }
  );
}

if (appleStrategyRegistered) {
  app.post(
    '/auth/apple/callback',
    passport.authenticate('apple', { failureRedirect: AUTH_FAILURE_REDIRECT }),
    (req, res) => {
      res.redirect(AUTH_SUCCESS_REDIRECT);
    }
  );
}

app.get('/auth/success', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ authenticated: false });
  }
  res.json({ authenticated: true, user: req.user });
});

app.get('/auth/failure', (req, res) => {
  res.status(401).json({ authenticated: false, message: 'Authentication failed' });
});

app.post('/auth/logout', (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    res.json({ authenticated: false });
  });
});

// Basic error handler so consumers receive JSON error messages.
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});
