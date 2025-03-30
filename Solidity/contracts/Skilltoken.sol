// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SkillPayment {
    address public owner;
    
    struct Payment {
        address sender;
        uint amount;
    }

    mapping(address => Payment[]) public payments;
    
    event PaymentReceived(address indexed sender, address indexed receiver, uint amount);
    event Withdrawal(address indexed receiver, uint amount);

    constructor() {
        owner = msg.sender;
    }

    // Function to make a payment to a skill provider  0000
    function paySkillProvider(address _provider) external payable {
        require(msg.value > 0, "Payment must be greater than 0");
        
        payments[_provider].push(Payment(msg.sender, msg.value));
        
        emit PaymentReceived(msg.sender, _provider, msg.value);
    }

    // Function for skill providers to withdraw their funds
    function withdrawFunds() external {
        uint balance = getBalance(msg.sender);
        require(balance > 0, "No funds available");

        delete payments[msg.sender];

        payable(msg.sender).transfer(balance);

        emit Withdrawal(msg.sender, balance);
    }

    // Function to check the balance of a provider
    function getBalance(address _provider) public view returns (uint) {
        uint totalBalance = 0;
        for (uint i = 0; i < payments[_provider].length; i++) {
            totalBalance += payments[_provider][i].amount;
        }
        return totalBalance;
    }
}