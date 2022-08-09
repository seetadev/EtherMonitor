import "./App.css";
import { useState, useEffect } from "react";
import { create } from "ipfs-http-client";
import lit from "../lib/lit";
import Header from "./Header";

const client = create("https://ipfs.infura.io:5001/api/v0");

function App() {
  const [file, setFile] = useState(null);
  const [encryptedUrlArr, setEncryptedUrlArr] = useState([]);
  const [encryptedKeyArr, setEncryptedKeyArr] = useState([]);
  const [decryptedFileArr, setDecryptedFileArr] = useState([]);

  function retrieveFile(e) {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };

    e.preventDefault();
  }

  function decrypt() {
    Promise.all(encryptedUrlArr.map((url, idx) => {
      return lit.decryptString(url, encryptedKeyArr[idx]);
    })).then((values) => {
      setDecryptedFileArr(values.map((v) => {
        return v.decryptedFile;
      }));
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;

      const encrypted = await lit.encryptString(url);

      setEncryptedUrlArr((prev) => [...prev, encrypted.encryptedFile]);
      setEncryptedKeyArr((prev) => [...prev, encrypted.encryptedSymmetricKey]);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (encryptedUrlArr.length !== 0) {
      decrypt(encryptedUrlArr, encryptedKeyArr);
    }
  });

  return (
    <div className="App">
      <Header
        title="Here's an example of how to use Lit with IPFS"
      />

      <div className="main">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={retrieveFile} />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>

      <div className="display">
        {decryptedFileArr.length !== 0
          ? decryptedFileArr.map((el) => <img src={el} alt="nfts" />) : <h3>Upload data</h3>}
      </div>
    </div>
  );
}

export default App;
