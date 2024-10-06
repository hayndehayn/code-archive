//* Mail validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(isValidEmail('example@example.com'))
console.log(isValidEmail('invalid-email'))

//* URL validation
function isValidUrl(url) {
    const urlRegex = /https?:\/\/\S+/gi;
    return urlRegex.test(url);
}
console.log(isValidUrl('https://www.example.com'))
console.log(isValidUrl('invalid-url'))
