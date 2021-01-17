function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    var theme = document.getElementsByTagName('link')[0]; 

    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == 'light.css') { 
        theme.setAttribute('href', 'dark.css'); 
    } else { 
        theme.setAttribute('href', 'light.css'); 
    } 
} 

//Toggle theme toglie e mette il tema 
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