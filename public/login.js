

function sendLogin(){
    let email = document.getElementById('loginEmail').value;
    let pass = document.getElementById('loginPass').value;
    console.log(email,pass)
    
    //send email and pass to server for verification
    fetch('/adminLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, pass: pass})
    }).then((res => {
        if (res.ok){
            window.location.replace('/admin-page')
        } else {
            alert('Incorrect Credentials!')
        }
    }))
}
  