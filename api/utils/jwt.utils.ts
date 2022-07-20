import jwt from "jsonwebtoken";

export const createToken = async (
  payload: Object,
  options?: jwt.SignOptions
) => {
  return jwt.sign(payload, process.env.JWT_KEY as string, options);
};

export const decodeToken = async <T = jwt.JwtPayload>(token: string) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY as string);

    return {
      payload,
      valid: true,
      expired: false,
    } as { payload: T; valid: boolean; expired: boolean };
  } catch (error: any) {
    return {
      payload: null,
      valid: false,
      expired: error.message === "jwt expired",
    };
  }
};
