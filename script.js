import validator from "validator";

const emails = ["a@b.com", "bad@", "user.name@gmail.com"];
const urls = ["https://example.com", "htp:/nope"];

// סינון אימיילים תקינים
const validEmails = emails.filter(email => validator.isEmail(email));

// סינון כתובות אתרים תקינות
const validUrls = urls.filter(url => validator.isURL(url));

console.log("אימיילים תקינים:", validEmails);
console.log("אתרים תקינים:", validUrls);
