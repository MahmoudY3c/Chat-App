const crypto = require("crypto");
const createError = require("http-errors")
const { sendMail } = require("../handlers/utill")
const ToolsKeysHistory = require("../db/models/ToolsKeysHistory.js")

// Generate a random string of characters
function generateRandomString(length) {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    randomString += chars[randomIndex];
  }
  return randomString;
}

async function generateKey(password) {
  // let salt = crypto.randomBytes(32).toString('base64');
  let salt = generateRandomString(32);
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const key = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: encoder.encode(salt),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );
  console.log(key);
  return {
    key: bufferKeyToStringHex(key),
    salt: salt
  }
}

function bufferKeyToStringHex(key) {
  var keyBytes = new Uint8Array(key);
  var keyString = '';
  for (var i = 0; i < keyBytes.length; i++) {
    var hex = keyBytes[i].toString(16);
    keyString += (hex.length === 1 ? '0' : '') + hex;
  }
  return keyString
}
// // Generate a random key from a password using PBKDF2

function validateKey(key, salt, password) {
  let iterations = 100000;
  let keyLength = 32;
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, keyLength, "sha256", (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        if (key === derivedKey.toString("hex")) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    }
    );
  });
}


module.exports = { generateKey, validateKey }