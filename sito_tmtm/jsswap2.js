
function mantainClicked()
{
    document.getElementById("pagestyle").setAttribute("href", localStorage.getItem("href"));
    var z = document.getElementById("pagestyle").getAttribute("href");
    if (z == "teletext.css"){
        document.getElementById("Andre").setAttribute("src", "andrett.png");
        document.getElementById("Ari").setAttribute("src", "aritt.png");
        document.getElementById("Betti").setAttribute("src", "bettitt.png");
        document.getElementById("Ama").setAttribute("src", "amatt.png");
    }
     else if (z == "bauhaus.css"){ 
        document.getElementById("Andre").setAttribute("src", "andrebh.png");
        document.getElementById("Ari").setAttribute("src", "aribh.png");
        document.getElementById("Betti").setAttribute("src", "bettibh.png");
        document.getElementById("Ama").setAttribute("src", "amabh.png");
    }
    else if (z == "gospel.css"){
        document.getElementById("Andre").setAttribute("src", "andrego.png");
        document.getElementById("Ari").setAttribute("src", "arigo.png");
        document.getElementById("Betti").setAttribute("src", "bettigo.png");
        document.getElementById("Ama").setAttribute("src", "amago.png");
    }
    
    else if (z == "galilei.css"){
        document.getElementById("Andre").setAttribute("src", "andreg.png");
        document.getElementById("Ari").setAttribute("src", "arig.png");
        document.getElementById("Betti").setAttribute("src", "bettig.png");
        document.getElementById("Ama").setAttribute("src", "amag.png");
    }
    
    else if (z == "artn.css"){
        document.getElementById("Andre").setAttribute("src", "andrean.png");
        document.getElementById("Ari").setAttribute("src", "arian.png");
        document.getElementById("Betti").setAttribute("src", "bettian.png");
        document.getElementById("Ama").setAttribute("src", "amaan.png");
    }
    
    else if (z == "stili.css"){
        document.getElementById("Andre").setAttribute("src", "andre.png");
        document.getElementById("Ari").setAttribute("src", "ari.png");
        document.getElementById("Betti").setAttribute("src", "betti.png");
        document.getElementById("Ama").setAttribute("src", "ama.png");
    }
        else if (z == "millennium.css"){
        document.getElementById("Andre").setAttribute("src", "andre.png");
        document.getElementById("Ari").setAttribute("src", "ari.png");
        document.getElementById("Betti").setAttribute("src", "betti.png");
        document.getElementById("Ama").setAttribute("src", "ama.png");
    }
        else if (z == "2025.css"){
        document.getElementById("Andre").setAttribute("src", "andremin.png");
        document.getElementById("Ari").setAttribute("src", "arimin.png");
        document.getElementById("Betti").setAttribute("src", "bettimin.png");
        document.getElementById("Ama").setAttribute("src", "amamin.png");
    }
    
        else if (z == "20400.css"){
        document.getElementById("Andre").setAttribute("src", "andre40.png");
        document.getElementById("Ari").setAttribute("src", "ari40.png");
        document.getElementById("Betti").setAttribute("src", "betti40.png");
        document.getElementById("Ama").setAttribute("src", "ama40.png");
    }
}

function swapStyleSheet(url){
    document.getElementById("pagestyle").setAttribute("href", url);        
    localStorage.setItem("href", url);
    
    var x = document.getElementById("pagestyle").getAttribute("href");
    if (x == "teletext.css"){
        document.getElementById("Andre").setAttribute("src", "andrett.png");
        document.getElementById("Ari").setAttribute("src", "aritt.png");
        document.getElementById("Betti").setAttribute("src", "bettitt.png");
        document.getElementById("Ama").setAttribute("src", "amatt.png");
    }
     else if (x == "bauhaus.css"){ 
        document.getElementById("Andre").setAttribute("src", "andrebh.png");
        document.getElementById("Ari").setAttribute("src", "aribh.png");
        document.getElementById("Betti").setAttribute("src", "bettibh.png");
        document.getElementById("Ama").setAttribute("src", "amabh.png");
    }
    else if (x == "gospel.css"){
        document.getElementById("Andre").setAttribute("src", "andrego.png");
        document.getElementById("Ari").setAttribute("src", "arigo.png");
        document.getElementById("Betti").setAttribute("src", "bettigo.png");
        document.getElementById("Ama").setAttribute("src", "amago.png");
    }
    
    else if (x == "galilei.css"){
        document.getElementById("Andre").setAttribute("src", "andreg.png");
        document.getElementById("Ari").setAttribute("src", "arig.png");
        document.getElementById("Betti").setAttribute("src", "bettig.png");
        document.getElementById("Ama").setAttribute("src", "amag.png");
    }
    
    else if (x == "artn.css"){
        document.getElementById("Andre").setAttribute("src", "andrean.png");
        document.getElementById("Ari").setAttribute("src", "arian.png");
        document.getElementById("Betti").setAttribute("src", "bettian.png");
        document.getElementById("Ama").setAttribute("src", "amaan.png");
    }
    
    else if (x == "stili.css"){
        document.getElementById("Andre").setAttribute("src", "andre.png");
        document.getElementById("Ari").setAttribute("src", "ari.png");
        document.getElementById("Betti").setAttribute("src", "betti.png");
        document.getElementById("Ama").setAttribute("src", "ama.png");
    }
    else if (x == "millennium.css"){
        document.getElementById("Andre").setAttribute("src", "andreins.png");
        document.getElementById("Ari").setAttribute("src", "ariins.png");
        document.getElementById("Betti").setAttribute("src", "bettiins.png");
        document.getElementById("Ama").setAttribute("src", "amains.png");
    }
    else if (x == "2025.css"){
        document.getElementById("Andre").setAttribute("src", "andremin.png");
        document.getElementById("Ari").setAttribute("src", "arimin.png");
        document.getElementById("Betti").setAttribute("src", "bettimin.png");
        document.getElementById("Ama").setAttribute("src", "amamin.png");
    }
    
    else if (x == "20400.css"){
        document.getElementById("Andre").setAttribute("src", "andre40.png");
        document.getElementById("Ari").setAttribute("src", "ari40.png");
        document.getElementById("Betti").setAttribute("src", "betti40.png");
        document.getElementById("Ama").setAttribute("src", "ama40.png");
    }
}

document.onload= mantainClicked();
document.onload=swapStyleSheet(url);
