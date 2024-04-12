document.getElementById("submit-btn").addEventListener('click',function(){
    //console.log(event);
    const mailContainer=document.getElementById('mail-input');
    const emailField=mailContainer.value;
    //console.log(emailField);

    const passContainer=document.getElementById('pass-input');
    const passField=passContainer.value;
    //console.log(passField);

    if(emailField==="au@gmail.com" && passField==='123456'){
        window.location.href='index2.html';
    }
    else{
        document.getElementById('invalid-text').innerText="Invalid gmail or Password.";
    }
})