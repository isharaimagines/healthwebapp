import React, { useState } from "react";
import CryptoJS from "crypto-js";

const secretPass = "~`!@#$%^&* ()_-+= { [}]|:;”‘.?/";

// Encrypt function
const encryptData = (text) => {
  const encryptedData = CryptoJS.AES.encrypt(text, secretPass).toString();
  return encryptedData;
};

const decryptData = (encryptedText) => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, secretPass);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};
export const Psycho = () => {
  const originalText = "";
  const encryptedText = encryptData(originalText);
  const decryptedText = decryptData(encryptedText);

  console.log("Original Text:", originalText);
  console.log("Encrypted Text:", encryptedText);
  console.log("Decrypted Text:", decryptedText);

  return <></>;
};

export default Psycho;
