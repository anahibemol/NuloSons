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


let ladobarra = `
<body>
<div class="sidebar">
<div><li><a href="index.html">Main Page</a></li></div>
<div><li><a href="about.html">About</a></li></div>
<div><li><a href="contact.html">Contact </a></li></div>

    </div>        
    <div class="body-text">
    <!-- body content -->
    </div>
</body>
`
