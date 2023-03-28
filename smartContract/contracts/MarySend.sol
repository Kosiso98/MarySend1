/**
 *Submitted for verification at Etherscan.io on 2023-03-27
*/

// SPDX-License-Identifier: MIT
// This line specifies the license under which the contract is released
// SPDX is a standardized way to declare license information in Solidity

pragma solidity ^0.8.0;

// This line specifies the version of Solidity that the contract is written in

contract MarySend {
    // This is the main contract that defines the functions and state variables
    // The name of the contract is MarySend

    mapping(address => uint) balances;
    // This is a state variable that maps the balances of users to their addresses
    // The balances are stored as unsigned integers

    event Deposit(address indexed user, uint amount);
    event Withdrawal(address indexed user, uint amount);
    // These are events that the contract can emit to notify external systems about state changes
    // Deposit event is emitted when a user deposits funds into the contract
    // Withdrawal event is emitted when a user withdraws funds from the contract

    function pledge() public payable {
    // Require that the pledged amount is at least 0.02 ether
    require(msg.value >= 0.02 ether, "pledge amount must be at least 0.02 ether");

    // Increase the user's balance by the pledged amount
    balances[msg.sender] += msg.value;

    // Emit a Deposit event to notify external systems about the deposit
    emit Deposit(msg.sender, msg.value);
}

function extract(uint amount) public {
    // Require that the user has a sufficient balance to extract the requested amount
    require(balances[msg.sender] >= amount, "Insufficient balance");

    // Calculate the fee to be charged (2% of the requested amount)
    uint fee = (amount * 2) / 100;

    // Calculate the amount to be transferred to the user (requested amount minus fee)
    uint amountAfterFee = amount - fee;

    // Deduct the requested amount from the user's balance
    balances[msg.sender] -= amount;

    // Transfer the amount to the user (minus the fee) using the call function
    (bool success, ) = payable(msg.sender).call{value: amountAfterFee, gas: 2300}("");

    // Require that the transfer was successful
    require(success, "Transfer failed.");

    // Emit a Withdrawal event to notify external systems about the withdrawal
    emit Withdrawal(msg.sender, amountAfterFee);
}


    function getBalance() public view returns (uint) {
        // This is a function that allows users to check their current balance
        // The view keyword indicates that the function does not modify the contract state

        return balances[msg.sender];
        // Return the user's balance
    }
}