// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    string public admin = "owner";

    // External function to set a new admin
    function setadmin(string memory newadmin) external {
        admin = newadmin;
    }

    // External function to get the admin
    function getexteadmin() external view returns (string memory) {
        return admin;
    }

    // Internal function to call getexteadmin
    function getadmin() internal view returns (string memory) {
        string memory value = this.getexteadmin();
        return value;
    }

    // Public function to call internal getadmin
    function callInternal() public view returns (string memory) {
        return getadmin();
    }
}

contract B {
    // Declare a reference to the Owner contract
    Owner ownerContract;

    // Set the Owner contract address in the constructor
    constructor(address _ownerContractAddress) {
        ownerContract = Owner(_ownerContractAddress);
    }

    // Function to call setadmin on the Owner contract
    function setAdminInOwner(string memory newAdmin) public {
        ownerContract.setadmin(newAdmin);
    }

    // Function to get the admin from the Owner contract
    function getAdminFromOwner() public view returns (string memory) {
        return ownerContract.getexteadmin();
    }
}
