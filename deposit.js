
const getDeposit = document.getElementById('DepositBalance');

getDeposit.addEventListener('click', function(){

    const getInputBalVal = document.getElementById('DepositBalanceValue');
    const getResult = getInputBalVal.value;
    const deposit = parseFloat(getResult);

    
    const outputDeposit = document.getElementById('outPutdepositbalance');
    const getFinal =outputDeposit.innerText
    const outputFinal = parseFloat(getFinal);

    const finalDeposit = outputFinal+deposit;
    
    outputDeposit.innerText = finalDeposit;

    const getTotal = document.getElementById('totalBalance');

const getTotalValue = getTotal.innerText;
const getTotalDeposit = parseFloat(getTotalValue);

const getTotalFinal = getTotalDeposit+deposit;
getTotal.innerText = getTotalFinal;

getInputBalVal.value = '';

})



const getButton = document.getElementById('withdrawBalance');

    getButton.addEventListener('click', function()
    {

    const getInputValue = document.getElementById('WithdrawValue');

    const finalWithdraw = getInputValue.value;

    const finalWithdrawBalance = parseFloat(finalWithdraw);

    const secondWithrawBl = document.getElementById('secondWithdrawBalance');

    const secondResult = secondWithrawBl.innerText;
    const secondwithResult = parseFloat(secondResult);

    const getSecondWithbl = secondwithResult+finalWithdrawBalance;
    secondWithrawBl.innerText = getSecondWithbl;


    const getMainTotalbl = document.getElementById('totalBalance');

    const getValueTotalMinaz = getMainTotalbl.innerText;


    const getWithButtonClick = parseFloat(getValueTotalMinaz);

    const getFinalEqual = getWithButtonClick-finalWithdrawBalance;

    getMainTotalbl.innerText = getFinalEqual;


    getInputValue.value ='';
    
})


