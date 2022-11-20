var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');
itemlist.addEventListener('click',removeitem);
form.addEventListener('submit',additem);
filter.addEventListener('keyup',filteritems);

function additem(e)
{
e.preventDefault();
var newitem=document.getElementById('item').value;
var newitem1=document.getElementById('item1').value;
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newitem + '   '));
li.appendChild(document.createTextNode(newitem1));  
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
function filteritems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemlist.getElementsByTagName('li');
        // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.childNodes[0].textContent;
      var itemName1 = item.childNodes[1].textContent; 
            if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1 ){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  } 