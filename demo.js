document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    

    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    

    if(email === 'ahfahasan786@gmail.com' && password === '01798565330'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Get The Hell Out Of Here!')
    }
})