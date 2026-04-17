// Generating OTP Using Cryto And HAshing It Using Bcrypt

const crypto = require('crypto');
const bcrypt = require('bcrypt');

function generateOTP(length = 6) {
    return crypto.randomInt(100000,999999).toString();
}

async function hashOTP(otp) {
    return await bcrypt.hash(otp,10);
}

async function verifyOTP(input,hash) {
    return await bcrypt.compare(input,hash);
}

(async () => {
    const otp = generateOTP();
    console.log("Generated OTP: ",otp);

    const hashedotp = await hashOTP(otp);
    console.log("Hashed otp: ",hashedotp);

    console.log("Verification: ", await verifyOTP(otp,hashedotp));
})();
