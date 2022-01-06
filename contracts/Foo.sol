// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "hardhat/console.sol";

contract Foo {
    function test() external {
        console.log("Hello from solidity");
        revert("I reverted");
    }
}
