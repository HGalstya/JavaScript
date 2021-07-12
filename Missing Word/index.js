const createButton = document.getElementById("createButton")
const OptionsChoosePage = document.getElementById("OptionsChoosePage")
const textToAppend = document.getElementById("text")
const selectCreate = document.getElementById("selectCreate")
const OAppendPlace = document.getElementById("OAppendPlace")
const optionsList = document.getElementById("optionsList")
let selectIdPass;

createButton.onclick = function(){
    let text = textToAppend.value;
    let splitedText = text.split(" ");
    
    OAppendPlace.innerHTML = " ";
    selectCreate.innerHTML = " ";
    for(let i = 0; i < splitedText.length; i++){
        let span = document.createElement("SPAN");
        let spanText = document.createTextNode(" "+splitedText[i]+" "); 
        span.appendChild(spanText);
        span.style.cursor = "pointer";
        selectCreate.appendChild(span);
    }
    
    let allSpan = document.querySelectorAll("span");
    
    for(let i = 0; i < allSpan.length; i++){
        let tmp = allSpan[i];
        tmp.ondblclick = function(){
            let firstOption = tmp.innerText;
            tmp.outerHTML = "<select id='s"+i+"' class = 'misingWord'>"+
            "<option disabled selected hidden>_ _ _ _ _ _ _</option><"+
            "<option>"+firstOption+"</option></select>";
            
            let tmpGetId = document.getElementById("s"+i);
            tmpGetId.onclick = function(){
                selectIdPass = tmpGetId
                OAppendPlace.innerHTML= " ";
                optionsList.style.display = "flex"
            }
        }
        
    }
    OptionsChoosePage.style.display = "flex";
}



const closeButton = document.getElementById("close")

closeButton.onclick = function(){
    OptionsChoosePage.style.display = "none"
}



const variantAdd = document.getElementById('variantAdd')

variantAdd.onclick = function(){
    let inp = document.createElement("input");
    inp.classList.add("optionVariant");
    OAppendPlace.appendChild(inp);
}



const addToTotal = document.getElementById('addToTotal')

addToTotal.onclick = function(){
    let optionVariant = document.getElementsByClassName("optionVariant")
    for (let i = 0; i < optionVariant.length; i++){
        if (optionVariant[i].value.length > 0){
            let option = document.createElement("option")
            let optionInner = document.createTextNode(optionVariant[i].value)
            option.appendChild(optionInner)
            selectIdPass.appendChild(option)
        }
    }
    OAppendPlace.innerHTML= " ";
}



const createText = document.getElementById("createText")
const contet = document.getElementById("content")

createText.onclick = function(){
    contet.innerHTML = selectCreate.innerHTML;
    OptionsChoosePage.style.display = "none";
    optionsList.style.display = "none";
    selectCreate.innerHTML = " ";
}



const copyIcon = document.getElementById("copyIcon")

copyIcon.onclick = function(){
    let misingWord = document.getElementsByClassName("misingWord")
    let bool
    let textBase64 = "";

    for (let i = 0; i < misingWord.length; i++){
        textBase64 +=  misingWord[i].value + " "
        if (misingWord[i].value[0] == '_'){
            bool = true
            break ;
        }
    }
    if (bool)
    {
        alert("Work is not done yet");
    }
    else{

        prompt("Please copy this key:", btoa(textBase64));
    }
}