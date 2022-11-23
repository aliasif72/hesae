var list=document.getElementById("items");
const form=document.getElementById("forms");
const inputName=document.querySelector('#item');
const inputEmail=document.querySelector('#item1');
form.addEventListener("submit",submit);
list.addEventListener("click",remove);
list.addEventListener("click",edit);
const div1=document.getElementById("div1");
function submit(e)
{ e.preventDefault();
   if(inputName.value=='' || inputEmail.value=='')  
  {
      div1.classList.add('error');
    div1.innerHTML='<h6>enter the text field</h6>';
    setTimeout(()=>div1.remove(),1000);
  }
  else{
 naam=inputName.value;
emaal=inputEmail.value;
var obj=
{
  name:naam,
  email:emaal
};
for ( var i = 0, len = localStorage.length; i < len; i++ ) {
    if(emaal==localStorage.key( i ) &&  emaal==list.children[i].childNodes[1])
    {
        var dele=list.children[i];
        dele.remove();
        localStorage.remove(emaal);
        
                }  
 }  
var li=document.createElement('li');
var deletebtn=document.createElement('button');
var editbtn=document.createElement('button');
li.className="haggu";
li.appendChild(document.createTextNode(naam+' '));
li.appendChild(document.createTextNode(emaal));
deletebtn.appendChild(document.createTextNode('Delete'));
editbtn.appendChild(document.createTextNode('Edit'));
deletebtn.className="editing btn-danger float-right delete";
editbtn.className="btn btn-dark float-right btn-sm edit";
li.appendChild(deletebtn);
li.appendChild(editbtn);
list.appendChild(li);

localStorage.setItem(obj.email,JSON.stringify(obj));
inputName.value='';
inputEmail.value='';
}
}
function remove(e)
{
  if(e.target.classList.contains('delete'))
  {
     
        var li=e.target.parentElement;
        list.removeChild(li);
      
  }
}
function edit(e)
{
    if(e.target.classList.contains('edit'))
  {
    e.preventDefault();
    var ed=e.target.parentElement;
    inputName.value = naam;
    inputEmail.value= emaal;
    list.removeChild(ed);
    localStorage.removeItem(emaal);
  }
  }