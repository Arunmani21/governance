// Import web3
const Web3 = require("web3");

// Initialize web3 with your provider
const web3 = new Web3("http://127.0.0.1:7545");

// Define advanceTime function
async function advanceTime(seconds) {
  await web3.currentProvider.send({
    jsonrpc: "2.0",
    method: "evm_increaseTime",
    params: [seconds],
    id: 0,
  });
  await web3.currentProvider.send({
    jsonrpc: "2.0",
    method: "evm_mine",
    params: [],
    id: 0,
  });
}

module.exports = {
  advanceTime,
};
