import jwt from "jsonwebtoken";
import { JWT_SECRET, NODE_ENV } from "../constants/constants.js";
const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 24 * 60 * 60 * 100,
  });
  return token;
};
export default generateTokenAndSetCookie;
