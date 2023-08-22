import JWT from 'jsonwebtoken';

export const signToken = () => {
  const token = JWT.sign({ data: 'test' }, process.env.JWT_SECRET, {
    expiresIn: 60 * 10,
  });

  return token;
};

export const verifyToken = () => {
  JWT.verify('token', process.env.JWT_SECRET, function (error, decoded) {
    if (error?.name === 'TokenExpiredError') {
      throw error;
    }
    return decoded;
  });
};
