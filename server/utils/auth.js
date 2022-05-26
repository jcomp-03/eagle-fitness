const jwt = require("jsonwebtoken");

const secret = "eaglesarefit";
const expiration = "2h";

module.exports = {
  // SIGN TOKEN FUNCTION - needs a payload, a secret and expiration. the payload is to be parsed into
  // a secure token. the secret is to make sure an authorized user is trying to un parse the token.
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  // checks if a user is actually signed in when they make requests to the server
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    // separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }
  
    // if no token, return request object as is
    if (!token) {
      return req;
    }
  
    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
  
    // return updated request object
    return req;
  }
};
