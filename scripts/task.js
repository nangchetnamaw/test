 function myfunction(){
    var node = document.createElement("li");   
    // var res = document.getElementById("inpt").value;            
    var textnode = document.createTextNode(document.getElementById("inpt").value);         
    node.appendChild(textnode);                              
    document.getElementById("list").appendChild(node);   
    // var res = document.getElementById("inpt").value;
    // alert(res);
}