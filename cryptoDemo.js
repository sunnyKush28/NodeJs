import crypto from 'crypto'

const hash = crypto.createHash('sunny234')


hash.update('password123')
// console.log(hash.digest('hex'));
console.log(hash);

