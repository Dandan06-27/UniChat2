npm install google-auth-library

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('YOUR_CLIENT_ID_HERE');

async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: 'YOUR_CLIENT_ID_HERE',
  });
  const payload = ticket.getPayload();
  return {
    userId: payload.sub,      // Google's unique ID for this user
    email: payload.email,
    name: payload.name,
    picture: payload.picture
  };
}