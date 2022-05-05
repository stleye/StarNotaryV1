// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

contract StarNotary {

    string public starName;
    address public starOwner;

    event starClaimed(address owner);

    constructor() public {
        starName = "No name yet";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(starOwner);
    }

    function changeName(string memory name) public {
        starName = name;
    }

}