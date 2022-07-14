const template = document.createElement('template');

template.innerHTML = `
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

<style>       
hr{
    height: 3px;
    text-shadow: 2px 2px var(--font-shadow-color);
    border-style: dashed;
    background-color: var(--sidebar-color);            
    border: none;
}
</style>
`;

document.body.appendChild(template.content);