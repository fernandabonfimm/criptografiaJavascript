const crypto = require("crypto");
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});
const plainText = "O rato roeu a roupa do rei de Roma";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update(plainText, "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Texto criptografado:", encrypted);
const encryptedKey = crypto.publicEncrypt(publicKey, key);
const decryptedKey = crypto.privateDecrypt(privateKey, encryptedKey);
const decipher = crypto.createDecipheriv("aes-256-cbc", decryptedKey, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log("Texto descriptografado:", decrypted);
