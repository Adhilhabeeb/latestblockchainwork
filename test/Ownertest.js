import { expect } from "chai";
import { ethers } from "hardhat";

describe("Owner and B", function () {
  it("Should deploy both contracts and interact correctly", async function () {
    const Owner = await ethers.getContractFactory("Owner");
    const owner = await Owner.deploy();
    await owner.waitForDeployment();

    const B = await ethers.getContractFactory("B");
    const b = await B.deploy(await owner.getAddress());
    await b.waitForDeployment();

    // Set a new admin via contract B
    await b.setAdminInOwner("adhil");

    // Verify it from the Owner contract
    expect(await owner.getexteadmin()).to.equal("adhil");

    // Or from B (which calls Owner)
    expect(await b.getAdminFromOwner()).to.equal("adhil");
  });
});
