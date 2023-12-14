const crypto = require("crypto");
const aesjs = require('aes-js');
const qs = require("qs");

function decryptData(enc, token){
  const decodedEnc = Buffer.from(enc, 'base64');
  const unpad = (s) => {
    const paddingLength = s[s.length - 1];
    return s.slice(0, s.length - paddingLength);
  };

  const keyBuffer = crypto.pbkdf2Sync(token, "V*GH^|9^TO#cT", 1000, 32, "sha1");;
  const iv = keyBuffer.slice(16);
  const key = keyBuffer.slice(0, 16);

  const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

  const encryptedBytes = aesjs.utils.hex.toBytes(decodedEnc.toString('hex'));
  const decryptedBytes = aesCbc.decrypt(encryptedBytes);
  const unpaddedData = unpad(Buffer.from(decryptedBytes));

  // Convert to UTF-8 string and split
  const dataString = unpaddedData.toString('utf8');
  const dataArray = dataString.replace(/\x00/g, '').split(',');

  return dataArray;
}

const oneLoginDecryptData = (url) => {
  const baseToken = "AU68vf26spwX"; // Change to the token issued to your domain
  const parsedData = qs.parse(url);

  var payload = parsedData?.Dt;

  var data = decryptData(payload, baseToken);
  return {
    itsID: parseInt(data[0]),
    name: data[1],
    gender: data[2],
    age: parseInt(data[3]),
    jamaat: data[4],
    jamiat: data[5],
    jamiatId: parseInt(data[6])
  };
};

const url =
  "http://hatimi_retreats.com?SID=asdasdqewqsa&Lan=en&App=ITSOnelogin&API=3.0&Token=NyiDF2EsqhmgvBf%2bU%2ffT3ISVhzzgvLiSOrK3Zfuvyt8%3d&Dt=GtxuyQqOIivJd3M3ObXUczE8uMFUp1vG%2fyI26Xq1%2bD3%2blIL4sNXdbvoxZ%2bXT6hcMeJKWZI0VcNGHZHQhN9kBc1M7s4XDXQ3AUQPaZfCbVd7E6oJdlu6N6b1zWvGwwXcwPRqOZZY%2b1wCShxD4MN30qxoqi3%2b8G3aB78bY60kATghITx7widsImdrm3mC0TJOvCKmy83uF6DHfEPQko4FICQ%3d%3d";
console.log(oneLoginDecryptData(url));
// module.exports = oneLoginDecryptData;
