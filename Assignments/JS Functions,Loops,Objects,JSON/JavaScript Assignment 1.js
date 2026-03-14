// Password Strength Trigger

function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    let length = password.length;

    if (length < 8) {
        return "WEAK";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < length; i++) {
        let ch = password[i];

        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    if (length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }

    return "WEAK";
}

console.log(tagPassword("abc"));
console.log(tagPassword("abcdefgh"));
console.log(tagPassword("abcd1234"));
console.log(tagPassword("abcd1234xyz9"));
console.log(tagPassword(12345));