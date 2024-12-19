import jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWTtoken, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
