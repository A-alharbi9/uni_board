import JWT, { JwtPayload, Secret } from 'jsonwebtoken';

export const signToken = () => {
  const token = JWT.sign(
    { data: 'test' } as JwtPayload,
    process.env.JWT_SECRET as Secret,
    {
      expiresIn: 60 * 10,
    }
  );

  return token;
};

export const verifyToken = () => {
  JWT.verify(
    'token',
    process.env.JWT_SECRET as Secret,
    function (error, decoded) {
      if (error?.name === 'TokenExpiredError') {
        throw error;
      }
      return decoded;
    }
  );
};
