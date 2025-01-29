import jwt from "jsonwebtoken";

export const createToken = (
  jwtPayload: {
    _id: string;
    email: string;
    role: string;
    name: string;
    image: string;
  },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
