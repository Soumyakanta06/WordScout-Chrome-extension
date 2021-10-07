// function getText() {
    // if(document.getSelection){
    //     var text= document.getSelection().toString();
    //     alert(text);
    // }
    // else{
    //     if(document.selection){
    //         var text2 = document.selection.createrange();
    //         alert(text2);
    //     }
    // }
// }
document.addEventListener("selectionchange",()=>{
    // document.getSelection().toString().style.backgroundColor = "red";
    // alert(document.getSelection().toString());
    document.getSelection.cursor = "pointer";
    console.log(document.getSelection().toString());
    div.innerHTML = document.getSelection().toString();
    
})
var div = window.document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";
div.style.position = "absolute";
div.style.right = "10%";
// document.getElementById("main").appendChild(div);
document.body.appendChild(div);