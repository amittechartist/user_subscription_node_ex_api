import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minLength: [3, 'User name must be at least 3 characters long'],
        maxLength: [50, 'User name must be at most 30 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lawerCase: true,
        match: [
            /\S+@\S+\.\S+/,
            'Please provide a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be at least 6 characters long'],
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

// {
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "password": "password"
// }
