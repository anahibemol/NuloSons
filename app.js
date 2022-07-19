'use strict';


let className = document.body.className;
const switcher = document.querySelector('.btn');
switcher.textContext = "Dark";

function switching(){
    document.body.classList.toggle('light-theme'); 
    document.body.classList.toggle('dark-theme');
    className = document.body.className;
    if(className == "light-theme"){switcher.textContent = "Dark";}
    else{switcher.textContent = "Light";};
    console.log('current class name: ' + className);};
    

switcher.addEventListener('click', switching);



