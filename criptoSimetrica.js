const crypto = require('crypto');

const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16); 

const plainText = 'Mensagem secreta';

const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(plainText, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Texto criptografado:', encrypted);

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Texto descriptografado:', decrypted);
