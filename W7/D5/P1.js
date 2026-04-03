// How Cookie is used to track session ID
// Simulated Server-Side Session Store
const sessionStore = {
    'abc123': { 
        userId: 1, 
        username: 'Alice',
        role: 'student' 
    },
};

// Simulated Browser Cookie Value
const browserCookieSessionId = "abc123";

const sessionData = sessionStore[browserCookieSessionId];
console.log("Server Side Session Data:", sessionData);
