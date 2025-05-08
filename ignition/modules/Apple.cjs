const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AppleModule", (m) => {
  const lock = m.contract("Apple", []);
  return { lock };
});
