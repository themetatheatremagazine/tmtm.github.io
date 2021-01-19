/*function toggleTheme2040() { 
    var theme = document.getElementsByTagName('link')[0]; 
    if (theme.getAttribute('href') ==! '2040.css') { 
        theme.setAttribute('href', '2040.css'); 
    } else {
        theme.setAttribute('href', '');
    }
} */

function toggleTheme(value) { 
    // Obtain the name of stylesheet  
    // as a parameter and set it  
    // using href attribute. 
    var sheets = document 
        .getElementsByTagName('link'); 

    sheets[0].href = value; 
} 

/*
<button onclick="toggleTheme('medieval.css')"> 
</button> 

<button onclick="toggleTheme('liberty.css')"> 
</button> 

<button onclick="toggleTheme('2020.css')"> 
</button> 

<button onclick="toggleTheme('2040.css')"> 
</button>
*/