
function toggleTheme(value) { 
    // Obtain the name of stylesheet  
    // as a parameter and set it  
    // using href attribute. 
    var sheets = document 
        .getElementsByTagName('link'); 

    sheets[0].href = value; 
} 
