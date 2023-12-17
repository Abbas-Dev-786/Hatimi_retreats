const crypto = require("crypto");
const aesjs = require("aes-js");
const qs = require("qs");

function decryptData(enc, token) {
  const decodedEnc = Buffer.from(enc, "base64");

  const unpad = (s) => {
    const paddingLength = s[s.length - 1];
    return s.slice(0, s.length - paddingLength);
  };

  const keyBuffer = crypto.pbkdf2Sync(token, "V*GH^|9^TO#cT", 1000, 32, "sha1");
  const iv = keyBuffer.slice(16);
  const key = keyBuffer.slice(0, 16);

  const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

  const encryptedBytes = aesjs.utils.hex.toBytes(decodedEnc.toString("hex"));
  const decryptedBytes = aesCbc.decrypt(encryptedBytes);
  const unpaddedData = unpad(Buffer.from(decryptedBytes));

  // Convert to UTF-8 string and split
  const dataString = unpaddedData.toString("utf8");
  const dataArray = dataString.replace(/\x00/g, "").split(",");

  return dataArray;
}

const oneLoginDecryptData = (url) => {
  const baseToken = "s3gJU8HvZjN2BozcGQ5iWKxlPDfpS7uMAnyb4rVTkYC1RFth0waOq"; // Change to the token issued to your domain
  const parsedData = qs.parse(url);

  const payload = parsedData?.DT;

  const data = decryptData(payload, baseToken);

  return parseInt(data[0]);
};

// const url =
//   "https://sports.hatimiproperties.com/?SID=hrkyxvvnqhvl45c14ceuzkmd&Lan=en&App=ITSOnelogin&API=3.0&Token=zW5GLPPiU%2fBQ6Ewk6iNZD1HAKp0wNXHtOTqPxgC53ExqQ5jjLpH2HwPps%2bl3ranFLys6GGc3VbtF3WfvW1DkG16rJG2E8eXQdllkYpVsO9iarGqCovHW%2bMO9W5bJCGmuN%2fPeqCj9k6DzZfnJA0GVlQ%3d%3d&DT=ENl5YNM5WasxUusOyDJ3FbpuC3FGW%2bCdCJT81O8UvtVAjON5b%2f7Qi6Y7Ezeqmao9M5ruDaX7lgpnQK2%2fXLCQaJQ41obiyvIQjQwuiox%2fs9%2bVrg4aj1fz7KLAOqEjNUksz5GEkC%2fQMLCTU2%2bbAimlkVGddWkbZWwcz0qvB5y3%2fSBpazJTDpJtPCMy64vIy9fWTsUxeZFgwTzyNYJLP2XU9w%3d%3d";

// "?SID=hrkyxvvnqhvl45c14ceuzkmd&Lan=en&App=ITSOnelogin&API=3.0&Token=zW5GLPPiU%2fBQ6Ewk6iNZD1HAKp0wNXHtOTqPxgC53ExqQ5jjLpH2HwPps%2bl3ranFLys6GGc3VbtF3WfvW1DkG16rJG2E8eXQdllkYpVsO9iarGqCovHW%2bMO9W5bJCGmuN%2fPeqCj9k6DzZfnJA0GVlQ%3d%3d&DT=ENl5YNM5WasxUusOyDJ3FbpuC3FGW%2bCdCJT81O8UvtVAjON5b%2f7Qi6Y7Ezeqmao9M5ruDaX7lgpnQK2%2fXLCQaJQ41obiyvIQjQwuiox%2fs9%2bVrg4aj1fz7KLAOqEjNUksz5GEkC%2fQMLCTU2%2bbAimlkVGddWkbZWwcz0qvB5y3%2fSBpazJTDpJtPCMy64vIy9fWTsUxeZFgwTzyNYJLP2XU9w%3d%3d";

module.exports = oneLoginDecryptData;
