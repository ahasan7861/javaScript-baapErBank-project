document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-fild');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);


    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);

    const newBalancetotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalancetotal;

    withdrawField.value = ''
    
})