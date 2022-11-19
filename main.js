var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
itemlist.addEventListener('click',removeitem);
form.addEventListener('submit',additem);

function additem(e)
{
e.preventDefault();
var newitem=document.getElementById('item').value;
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newitem));
var deleteitem=document.createElement('button');
deleteitem.appendChild(document.createTextNode('X'));
deleteitem.className="btn btn-danger float-right btn-sm delete";
var editit=document.createElement('button');
editit.className="editing float-right";
editit.appendChild(document.createTextNode('Edit'));
li.appendChild(editit);
li.appendChild(deleteitem);
itemlist.appendChild(li);
}

function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are your sure??'))
        {
           var li=e.target.parentElement;
    itemlist.removeChild(li);
  }
    }
}