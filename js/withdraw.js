document.getElementById('withdraw-button').addEventListener('click',function(){
    // console.log('clicked');
    const withdrawField=document.getElementById('withdraw-field');
    const withdrawValue=withdrawField.value;
    //console.log(withdrawValue);
    const withdrawUpdate=document.getElementById('withdraw-update');

    // total amount
    // total amount
    const totalAmount=document.getElementById('total-amount');
    var totalAmountValue=totalAmount.innerText;
    totalAmountNum=parseInt(totalAmountValue);
    //console.log(totalAmountNum);

    if(withdrawValue<=totalAmountNum & withdrawValue>0){
        withdrawUpdate.innerText=parseInt(withdrawUpdate.innerText)+parseInt(withdrawValue);
        var amountAdd=(parseInt(totalAmountNum)-parseInt(withdrawValue));
        console.log(amountAdd, totalAmountNum);
        totalAmount.innerText=amountAdd;
    }
    else{
        document.getElementById('withdraw-message').innerText="Invalid amount";
    }
    document.getElementById('deposit-message').innerText=" ";
    withdrawField.value="";
})