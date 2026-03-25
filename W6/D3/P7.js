// Introduction To Buffers In NodeJS
// A Buffer Stores Raw Bytes

// Here we cewate buffer directly from the string
const textBuffer = Buffer.from("Poorna");

// The Value in the buffer is the encoded form of the text
console.log("Buffer Object: ",textBuffer);
console.log("Buffer Length In Bytes: ",textBuffer.length);
console.log("Byte At Index 0",textBuffer[0]);
console.log("Byte At Index 0",textBuffer[1]);

// Each Character Is Stored Internally As Byte Data
// For Standard ASCII Letters There Will Be A Equivalent Code
// Buffer Stores Numeric Values Between 0 to 255

