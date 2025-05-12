
// import "./App.css";
// import { useEffect, useState } from "react";

// import { ABI,Address } from "./block/code";
// import { ethers } from "ethers";
// function App() {
//   const { ethereum } = window;
//   const [contract, setContract] = useState(null);

  
//   const [p1, setP1] = useState(null);
//   const [p2, setP2] = useState(null);
//   const [p3, setP3] = useState(null);
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     emp_address: "",
//     phno: "",
//     salary: "",
//     dep: "",
//   });

//   useEffect(() => {
//     connectContract();
//     connectMetaMask();
//   }, []);

// useEffect(() => {
//       console.log(contract,"connnnnnn")
// }, [contract])


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // getAllEmployee

//   let      handlefullemp= async() =>{

//  try {
  

//    let  getcontra=   await   contract.getAllEmployee()

//    const mappedEmployees = getcontra.map((emp) => (
//     console.log("emmm",emp[2]),
    
//     {
//     id: emp[0],
//     name: emp[1],
//     emp_address: emp[2],
//     phno: Number(emp[3]),
//     salary: Number(emp[4]),
//     dep: emp[5],
//   }));
//    console.log("gettt",mappedEmployees)


//  } catch (error) {
//   console.log("errro",error);
  
//  }
   
//   }
//   const connectMetaMask = async () => {
//     if (window.ethereum !== undefined) {
//       const accounts = await ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       setP1(accounts[0]);
//     } else {
//       console.log("intsall MetaMask Account");
//     }
//   };

//   const connectContract = async () => {
//     alert("ted");
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const newContract = new ethers.Contract(Address, ABI, signer);
//       const myAddress = await newContract.user();
// alert("user:"+myAddress)
//       console.log(await newContract,"myyyyyybnnn")
//       setContract(newContract);

      
//       setP2(myAddress);
     
//     } catch (error) {
//       console.error("Contract connection failed:", error);
//     }
//   };



//   const createEmployee = async (e) => {
//  alert("tri")
//     e.preventDefault();


//     if (!contract) {
//       alert("Contract not connected");
//       return;
//     }
// //  if (p2 != "0xf4d591203cf224CAcA63D894680Ae9C086AE9333") {
// //   alert("you are not creater")
// //  }
  
//     try {

   
//       await contract.name("muhammed")
      
//       alert("Employee created successfully");
//     } catch (error) {
//       console.error("Employee creation failed:", error);
//       alert("Failed to create employee");
//     }
//   };

//   const getlength = async () => {
//     if (!contract) {
//       alert("Connect contract first");
//       return;
//     }
//     const getAlllength = await contract.getAllEmplength();
//     const lengthNumber = Number(getAlllength); // Convert BigNumber to regular number
//     console.log(lengthNumber);
//     setP3(lengthNumber);
//   };

//   return (
//     <>
//       <h1>Employee Management</h1>
//       {/* Add Employee Form */}
//       {/* <form onSubmit={createEmployee} className="max-w-md mx-auto p-4">
//         <div className="mb-4">
//           <label className="block mb-2">Employee ID</label>
//           <input
//             type="number"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>


//         <div>

//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Employee Address</label>
//           <input
//             type="text"
//             name="emp_address"
//             value={formData.emp_address}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Phone Number</label>
//           <input
//             type="number"
//             name="phno"
//             value={formData.phno}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Salary</label>
//           <input
//             type="number"
//             name="salary"
//             value={formData.salary}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Department</label>
//           <input
//             type="text"
//             name="dep"
//             value={formData.dep}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form> */}
//       <button onClick={getlength}>Get Length</button>
//       <p>{p3}</p>
//       <button onClick={connectMetaMask}>Connect METAMASK</button>
//       <p>{p1}</p>
//       <button onClick={connectContract}>Connect Contract</button>
//       <button  onClick={handlefullemp}>get emppp</button>
//       <button onClick={createEmployee}>checckkkkkk</button>

//       <p>{p2}</p>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";


let BABI=[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ownerContractAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "getAdminFromOwner",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newAdmin",
        "type": "string"
      }
    ],
    "name": "setAdminInOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
let OwnerABI=  [
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "callInternal",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getexteadmin",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newadmin",
        "type": "string"
      }
    ],
    "name": "setadmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Contract addresses
const ownerAddress = "0xc1F2d5A6e3d22B918Bc38E2C4d5938a36b032d6a";
const bAddress = "0xA13B33052093216ADb980e9DbbFD35aE4129c179";

function App() {
  const [ownerContract, setOwnerContract] = useState(null);
  const [bContract, setBContract] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState("");
  const [newAdmin, setNewAdmin] = useState("");

  // Connect to contracts
  const connectContracts = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const owner = new ethers.Contract(ownerAddress, OwnerABI, signer);
    const b = new ethers.Contract(bAddress, BABI, signer);

    setOwnerContract(owner);
    setBContract(b);
  };

  // Load contracts on page load
  useEffect(() => {
    connectContracts();
  }, []);

  // Get admin directly from Owner
  const getAdminDirect = async () => {
    try {
      const admin = await ownerContract.getexteadmin();
      setCurrentAdmin(admin);
    } catch (err) {
      console.error("Error getting admin:", err);
    }
  };

  // Get admin via B
  const getAdminViaB = async () => {
    try {
      const admin = await bContract.getAdminFromOwner();
      setCurrentAdmin(admin);
    } catch (err) {
      console.error("Error getting admin via B:", err);
    }
  };

  // Set new admin via B
  const setAdmin = async () => {
    try {
      const tx = await bContract.setAdminInOwner(newAdmin);
      await tx.wait();
      alert("Admin updated successfully!");
      setNewAdmin("");
    } catch (err) {
      console.error("Error setting admin:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard (Owner & B)</h2>

      <input
        type="text"
        value={newAdmin}
        onChange={(e) => setNewAdmin(e.target.value)}
        placeholder="Enter new admin"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={setAdmin}>Set Admin via B</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={getAdminDirect}>Get Admin (Direct from Owner)</button>
        <button onClick={getAdminViaB} style={{ marginLeft: "10px" }}>
          Get Admin (Via B)
        </button>
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Current Admin:</strong> {currentAdmin}
      </p>
    </div>
  );
}

export default App;
