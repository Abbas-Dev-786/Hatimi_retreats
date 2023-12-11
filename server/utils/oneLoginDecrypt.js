const crypto = require("crypto");
const qs = require("qs");

const oneLoginDecryptData = (url) => {
  const token = "AU68vf26spwX"; // Change to the token issued to your domain
  const parsedData = qs.parse(url).Dt;

  const key = crypto.pbkdf2Sync(token, "V*GH^|9^TO#cT", 1000, 32, "sha1");
  const iv = Buffer.alloc(16); // Initialization Vector for AES-128-CBC

  const decipher = crypto.createDecipheriv("aes-128-cbc", key.slice(0, 16), iv);

  let decrypted = decipher.update(
    decodeURIComponent(parsedData),
    "base64",
    "utf8"
  );
  decrypted += decipher.final("utf8");

  console.log(decrypted);
  return decrypted;
};

const url =
  "http://hatimi_retreats.com?SID=asdasdqewqsa&Lan=en&App=ITSOnelogin&API=3.0&Token=NyiDF2EsqhmgvBf%2bU%2ffT3ISVhzzgvLiSOrK3Zfuvyt8%3d&Dt=GtxuyQqOIivJd3M3ObXUczE8uMFUp1vG%2fyI26Xq1%2bD3%2blIL4sNXdbvoxZ%2bXT6hcMeJKWZI0VcNGHZHQhN9kBc1M7s4XDXQ3AUQPaZfCbVd7E6oJdlu6N6b1zWvGwwXcwPRqOZZY%2b1wCShxD4MN30qxoqi3%2b8G3aB78bY60kATghITx7widsImdrm3mC0TJOvCKmy83uF6DHfEPQko4FICQ%3d%3d";
oneLoginDecryptData(url);
// module.exports = oneLoginDecryptData;
