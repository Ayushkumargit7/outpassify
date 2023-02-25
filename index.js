async function connect() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
  accounts = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner()
  } else {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
  const signer = provider.getSigner()
    }
  }