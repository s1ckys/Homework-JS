function atmWithdrawal(){
    let atmBalance = 500;
    let withdrawalAmmount = prompt("Please enter the amount that you want to withdraw:");
    withdrawalAmmount=parseInt(withdrawalAmmount);

    if(!isNaN(withdrawalAmmount) && withdrawalAmmount <= 0) {
        return "The amount you enter is not valid"
    }
    else if(withdrawalAmmount>atmBalance){
        return "You don't have enough money on the account"
    }
    else{
        atmBalance=atmBalance-withdrawalAmmount;
        return`You withdrawed: ${withdrawalAmmount}$, Remaining balance is: ${atmBalance}$`
    }
}
console.log(atmWithdrawal());