document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('clicked');
    const depositField=document.getElementById('deposit-field');
    var depositValue=depositField.value;
    // console.log(depositValue);
    const depositUpdate=document.getElementById('deposit-update');

    // total amount
    if(depositValue>0){
        depositUpdate.innerText=parseInt(depositUpdate.innerText)+parseInt(depositValue);
    const totalAmount=document.getElementById('total-amount');
    var totalAmountValue=totalAmount.innerText;
    totalAmount.innerText=(parseInt(depositValue)+parseInt(totalAmountValue));
    }
    else{
        document.getElementById('deposit-message').innerText="Invalid amount";
    }
    document.getElementById('withdraw-message').innerText=" ";
    // console.log(depositValue);
    depositField.value="";
    // console.log(totalAmountSplit, typeof(totalAmountSplit));
})