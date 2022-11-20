var form = document.querySelector('#addForm');
var inputName=document.querySelector('#item');
var inputEmail=document.querySelector('#item1');
var msg=document.querySelector('#msg');
var list=document.getElementById('items');
list.addEventListener('click',remove);
list.addEventListener('click',remove2);
form.addEventListener('submit',submit);

function submit(e)
{ e.preventDefault();
   if(inputName.value=='' || inputEmail.value=='')
  {
      msg.classList.add('error');
    msg.innerHTML='<h6>enter the text field</h6>';
    setTimeout(()=>msg.remove(),1000);
  }
  else{
naam=inputName.value;
emaal=inputEmail.value;
   var obj=
{
  name:naam,
  email:emaal
};  
var li=document.createElement('li');
var deletebtn=document.createElement('button');
var editbtn=document.createElement('button');
li.className="haggu delete";
li.appendChild(document.createTextNode(naam+' '+emaal));
deletebtn.appendChild(document.createTextNode('Delete'));
editbtn.appendChild(document.createTextNode('Edit'));
deletebtn.className="editing btn-danger float-right";
editbtn.className="btn btn-dark float-right btn-sm delete";
li.appendChild(deletebtn);
li.appendChild(editbtn);
list.appendChild(li);

localStorage.setItem('userdetails'+JSON.stringify(emaal),JSON.stringify(obj));
inputName.value='';
inputEmail.value='';
}
}
function remove2(e)
{
  if(e.target.classList.contains('delete'))
  {
      if(confirm('are you sure???'))
      {
        var li=e.target.parentElement;
        list.removeChild(li);
      }
  }
}