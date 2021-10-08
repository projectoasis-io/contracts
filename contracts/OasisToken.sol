// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

contract OasisToken is ERC20Burnable, Ownable {
    uint256 constant CAP = 14000000 * 10 ** 18;

    constructor () ERC20("OASIS", "OASIS") public {
        _mint(msg.sender, CAP);
    }
}