import { Schema, model, models, Document } from 'mongoose';

const addressSchema = new Schema({
    line_one: String,
    line_two: String,
    city: String,
    state: String,
    zip: String,
});
const birthdateSchema = new Schema({
    month: Number,
    day: Number,
    year: Number,
});
const phoneSchema = new Schema({
    sequence_one: String,
    sequence_two: String,
    sequence_three: String,
});
const ssnSchema = new Schema({
    sequence_one: String,
    sequence_two: String,
    sequence_three: String,
});


const userSchema = new Schema(
    {
        first_name: {
        type: String,
        trim: true,
        required: true
        },
        last_name: {
        type: String,
        trim: true,
        required: true
        },
        username: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        index: true,
        lowercase: true
        },
        email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
        },
        phone: phoneSchema,
        birthdate: birthdateSchema,
        securessn: ssnSchema,
        address: addressSchema,
        role: {
        type: Number,
        default: 0
        },
        password: String,
        confirmed_account: {
        type: Boolean,
        default: false
        }
    },
    { timestamps: true }
);

export interface IUser extends Document {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    role: number;
    birthdate: {
        month: number;
        day: number;
        year: number;
    };
    phone: {
        sequence_one: string;
        sequence_two: string;
        sequence_three: string;
    };
    securessn: {
        sequence_one: string;
        sequence_two: string;
        sequence_three: string;
    };
    password?: string;
    confirmed_account: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const User = models.User || model<IUser>('User', userSchema);

export default User;
