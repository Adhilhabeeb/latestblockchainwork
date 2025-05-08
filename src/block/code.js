//  export const ABI= [
//     {
//       "inputs": [],
//       "name": "myname",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "username",
//           "type": "string"
//         }
//       ],
//       "name": "name",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ]
//  export let Address="0x0eD13D4176Bf6E72B3256B7fe9C5214360b1515E"
 export let Address="0xc32655FbB1d9ee97981835B3f369F55427C9787C"
 

 export const ABI=[
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "username",
        "type": "string"
      }
    ],
    "name": "name",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "user",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]