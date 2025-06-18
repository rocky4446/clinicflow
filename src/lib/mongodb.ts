import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

type MongooseCache = {
  conn: Connection | null;
  promise: Promise<Connection> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const getCache = (): MongooseCache => {
  if (!global.mongooseCache) {
    global.mongooseCache = { conn: null, promise: null };
  }
  return global.mongooseCache;
};

export async function dbConnect(): Promise<Connection> {
  const cached = getCache();
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongooseInstance: typeof mongoose) => mongooseInstance.connection);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
