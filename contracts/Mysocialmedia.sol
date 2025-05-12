// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    string public admin = "owner";

    struct Message{
        string tittle;
        string message;
        address owner;
        uint index;
        uint256 likes;
    }
struct Userstr {
  string name;
  string email;
Message[] messages;
}

mapping  (address => Userstr) public  userinfo;
string[] public  user;
    // External function to set a new admin
    function setadmin(string memory newadmin) external {
        admin = newadmin;
        
    }


function setuser( string memory newtitle,string memory newmessgae) public      returns(uint )  
{
Userstr memory value=getlength(msg.sender);


if (value.messages.length>0  && keccak256(bytes(value.name)) != keccak256(bytes("")) ) {
    uint msgcount=getMessageCount();

Message memory  newmessage = Message({
    tittle:newtitle,message:newmessgae,owner:msg.sender,likes:0,index:msgcount
});

userinfo[msg.sender].messages.push(newmessage);


return msgcount;
}else {


// Step 1: Create the message
Message memory newmessage = Message({
    tittle: "first",
    message: "first",
    owner: msg.sender,
    likes: 0,index:0
});

// Step 2: Set name and email separately
userinfo[msg.sender].name = "adhil";
userinfo[msg.sender].email = "adhiulk@gmail.com";

// Step 3: Push the message into the storage array
userinfo[msg.sender].messages.push(newmessage);
  
return 0;


}




// userinfo[msg.sender]=Userstr();


}

function viewuser (string memory newtit,string memory newmsg) public          returns (uint){
  return     setuser(newtit,newmsg);

}

function getlength(address useaddresas) public view returns (Userstr memory) {
  return   userinfo[useaddresas];
}

function getMessageByIndex( uint index) public view returns (
    string memory, string memory, address, uint,uint
) {
    Message memory msgItem = userinfo[msg.sender].messages[index];
    return (msgItem.tittle, msgItem.message, msgItem.owner, msgItem.likes,msgItem.index);
}

function getMessageCount() public view returns (uint) {
    return userinfo[msg.sender].messages.length;
}
    // External function to get the admin
//     function getexteadmin() external view returns (string memory) {
//         return admin;
//     }

//     // Internal function to call getexteadmin
//     function getadmin() internal view returns (string memory) {
//         string memory value = this.getexteadmin();
//         return value;
//     }

//     // Public function to call internal getadmin
//     function callInternal() public view returns (string memory) {
//         return getadmin();
//     }

//     function useara () public view   returns(uint){
// return user.length;
//     }
}


