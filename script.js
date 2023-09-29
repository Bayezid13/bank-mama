document.getElementById('Login').addEventListener('click',function(){

   const getEmail = document.getElementById('email').value;
   const  getPass = document.getElementById('pass').value;

   if(getEmail === 'ak@gmail.com' && getPass === '1234'){
    window.open('http://127.0.0.1:5500/dashboard.html');

}else{
    alert('email or pass not valid')
}

});

