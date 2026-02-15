import mongoose from 'mongoose';
const connectDb = async () => {
    try{
      mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
      });
      await mongoose.connect(process.env.MONGODB_URI as string);
    }catch(err){
        console.error('Database connection error:', err);
    }
}

export default connectDb;