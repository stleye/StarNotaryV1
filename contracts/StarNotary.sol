// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

contract StartNotary {

    string public starName;
    address public starOwner;

    event starClaimed(address owner);

    constructor() pulic {
        starName = "No name yet";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(starOwner);
    }

}