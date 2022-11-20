var form = document.querySelector('#my-form');
var inputName=document.querySelector('#name');
var inputEmail=document.querySelector('#email');
var msg=document.querySelector('.msg');
form.addEventListener('submit',submit);
function submit(e)
{ e.preventDefault();
   if(inputName.value=='' || inputEmail.value=='')
  {
      msg.classList.add('error');
    msg.innerHTML='<h4>enter the text field</h4>';
    setTimeout(()=>msg.remove(),1000);
  }
  else{
 console.log(localStorage.setItem('name', inputName.value));
console.log(localStorage.setItem('email', inputEmail.value));
inputName.value='';
inputEmail.value='';
}
}