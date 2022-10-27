let pagina=document.querySelector(".container");
let btn=document.querySelector(".btnHide");

let show=true;

btn.addEventListener("click",()=>{
    if(show==true){
        btn.textContent="Show biciclete";
        show=false;
    }else{
        btn.textContent="Hide list";
        show=true;
    }

    pagina.classList.toggle("dispare");
});

let btnChange=document.querySelector('.modifica');
let biciclete=document.querySelector('.schimba');
var inp=document.getElementById('desc');

btnChange.addEventListener("click",()=>{
    biciclete.textContent=inp.value;
    inp.value="";
})

let btnAdd=document.querySelector('.addBicicleta');
let adaug=document.querySelector('.adauga');
let newElem=document.querySelector('.enum');

btnAdd.addEventListener("click",()=>{
    const element=document.createElement("p");
    element.textContent=adaug.value;
    newElem.appendChild(element);
    adaug.value="";
});

let btnRemove=document.querySelector('.removeBicicleta');

btnRemove.addEventListener("click",()=>{
    let lastChild=newElem.lastChild;
    newElem.removeChild(lastChild);
})