const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

//Models de usuário
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//criptografia de senha/usuário
userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash; 

    next();
})


const User = mongoose.model('User', userSchema);

module.exports = User;