const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("OwnerModule", (m) => {
  // Deploy the Owner contract first
  const owner = m.contract("Owner");

  // Then deploy B and pass the address of Owner as a constructor argument
  const b = m.contract("B", [owner]);

  return { owner, b };
});
