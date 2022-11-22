var mynodelist = document.getElementsByTagName('LI');
var i;
for(i=0;i<mynodelist.length;i++){
    var span =document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(txt);
    mynodelist[i].appendChild(span);
}


var close=document.getElementsByClassName('close');
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display='none';
    }
}

var list=document.querySelector('ul');
list.addEventListener('click', function(ev){
if(ev.target.tagName==='LI'){
    ev.target.classList.toggle('checked');
}
},false);


function newelement(){
        var li = document.createElement("li");
    var inputvalue = document.getElementById("Input").value;
    var t = document.createTextNode(inputvalue);
    li.appendChild(t);
    
    
    if(inputvalue===''){
        alert("you must enter a task first!");
    }
    else{
        document.getElementById('myUL').appendChild(li);
    }

    document.getElementById('Input').value='';
    var span =document.createElement('SPAN');
    var txt=document.createTextNode("\u00D7");
    span.className='close';
    span.appendChild(txt);
    li.appendChild(span);


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}


// function newElement() {

//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("Input").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }