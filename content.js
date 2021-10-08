

document.addEventListener("selectionchange",()=>{
    
    
    document.getSelection.cursor = "pointer";
    console.log(document.getSelection().toString());
    let word = document.getSelection().toString();
    console.log(word);

    //call the api nd get data
    if(word == ''){
        return;
    }
    getData(word);



   
    
})
async function getData(word){
//  Ajax call
 
const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=1fefb914-0f97-4df7-a173-303ae9dc7d05`);
const data = await response.json();

//if empty result
if(!data.length){
    // div.innerHTML = "Not found!!";
    return;
}
//Result found
let definition = data[0].shortdef[0];
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.animation = 'fading 5s infinite';
hh.innerHTML = word;
ss.innerHTML = definition;
setTimeout(()=>{
    div.style.display = "none";
    div.style.transition = "5s ease-in-out"
},10000)


console.log(data);
}

//added font link
// var hard = window.document.createElement('link');
// hard.setAttribute('rel', 'stylesheet');
// hard.setAttribute('type', 'text/css');

// link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Lora&display=swap');
// document.head.appendChild(hard);

var link = window.document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Oswald:wght@350&display=swap');
// link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Lora&display=swap');
document.head.appendChild(link);

// Div specifications
var div = document.createElement("div");
div.style.display = "none";

div.style.width = "200px";
div.style.height = "auto";
div.style.background = "linear-gradient(to left, #ffb6c0, #f6b7cd, #eabad8, #dcbddf, #cec0e2, #c6c2e5, #bec3e6, #b6c5e7, #aec7ec, #a4c9f1, #98cbf5, #8acdf8)";
div.style.color = "black";
div.style.opacity = "0.98";
div.style.boxShadow = "0 3px 15px #3a3939ed";
// div.innerHTML = "Hello";
div.style.position = "fixed";
div.style.right = "10px";
div.style.top = "300px";
div.style.padding = "15px";
div.style.borderRadius = "8px";
div.style.zIndex = "999";
div.style.transform= "translateY(-20%)";

// document.getElementById("main").appendChild(div);
document.body.appendChild(div);

var hh = document.createElement("div");
div.appendChild(hh);
hh.style.color = "#2E1995";
// hh.innerHTML = "Hello";
hh.style.width = "180px";
hh.style.height = "auto";
hh.style.fontWeight = "600";
hh.style.fontSize = "1.2rem";
// hh.style.opacity = "1.0";
hh.style.fontFamily = "'Lora', serif";
var ss = document.createElement("div");
div.appendChild(ss);
ss.style.color = "black";
// ss.innerHTML = "Hello";
ss.style.width = "180px";
ss.style.height = "auto";
ss.style.fontSize = "1rem";
ss.style.fontFamily = "'Oswald', sans-serif";
ss.style.fontWeight = "100";
// ss.style.opacity = "1";




//call api data method