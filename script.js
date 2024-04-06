let TitleContent = document.getElementById('title');
let UnderLine = document.querySelector('.underline');
let UserName = document.getElementById('name');
let TermsText = document.querySelector('.terms');
let SignInBtn = document.querySelector('.signin');
let SignupBtn = document.querySelector('.Signup');
let termsTxt = document.getElementById('terms-txt');
let check = document.getElementById('check');

SignInBtn.addEventListener("click" ,()=>{
    UserName.style.maxHeight="0";
    TitleContent.innerHTML="Sign In"
    UnderLine.style.transform ='translateX(35px)';
   check.style.display="none";
   termsTxt.innerHTML="Forget Password <a>Click Here !</a>";
SignInBtn.classList.remove('disable');
SignupBtn.classList.add('disable');

   
})
SignupBtn.addEventListener("click" ,()=>{
    UserName.style.maxHeight="60px";
    TitleContent.innerHTML="Sign up"
    UnderLine.style.transform ='translateX(-35px)';
   check.style.display="block";
   termsTxt.innerHTML="Accept Ours terms <a>Click Here !</a>";
SignupBtn.classList.remove('disable');
SignInBtn.classList.add('disable');

   
})

