//try and use passport module to ensure actual protection to admin routes

function sendLogin(){
    let email = document.getElementById('loginEmail').value;
    let pass = document.getElementById('loginPass').value;
    console.log(email,pass)
    
    //send email and pass to server for verification
    fetch('/adminLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, pass: pass})
    }).then(res => 
        res.json()
    ).then(data => {
        console.log(data.token)
        fetch('/admin', {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + data.token 
            }
        }).then(res => console.log('woo'))
    }).catch(err => {
        console.log(err)
    })
}
  