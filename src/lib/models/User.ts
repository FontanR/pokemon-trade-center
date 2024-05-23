import mongoose, { Schema, Model } from 'mongoose';

interface IProduct {
  productId: string;
  quantity: number;
}

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  lastName: string;
  cart: IProduct[];
}

const userSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  cart: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;

