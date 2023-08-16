import _mongoose, { connect } from 'mongoose';

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}

let cached = global.mongoose;
const { DB_URI } = process.env;

if (!cached) {
  cached = global.mongoose = { promise: null, conn: null };
}

async function connectDb() {
  if (cached.conn) {
    console.log('Cache!!!!');

    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = connect(DB_URI, { bufferCommands: false })
      .then((connection) => {
        cached.conn = connection;

        console.log('Connected!');

        return connection;
      })
      .catch((err) => {
        cached.promise = null;

        console.log('Err: ', err.message);
      });

    return cached.conn;
  }
}

export default connectDb;
