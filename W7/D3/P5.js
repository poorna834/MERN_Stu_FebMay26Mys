// JWT Fundamentals: Token Generation and Verification

const jwt = require('jsonwebtoken');

const secretKey = "monkey123"

// Payload holds small non-sensitive data
const payload = {
    userId: 101,
    role: "member"
};

// jwt.sign() creates a signed JWT token
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

console.log("Token Generated Successfully!:", token);

const tokenParts = token.split(".");

console.log("Header Section:", tokenParts[0]);
console.log("Payload Section:", tokenParts[1]);
console.log("Signature Section:", tokenParts[2]);
console.log("JWT part count:", tokenParts.length);

try {
    // jwt.verify() checks the token's signature and validity
    const verifiedPayload = jwt.verify(token, secretKey);
    console.log("Verified Payload:", verifiedPayload);
} 
catch (error) {
    console.error("Token verification failed:", error.message);
}

const decodedWithoutVerifiction = jwt.decode(token);
console.log("Decoded Token: ",decodedWithoutVerifiction);

