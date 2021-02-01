
document.onload = mantainClicked();

function mantainClicked()
{
    if (localStorage.getItem("href") == undefined) {
        document.getElementById("pagestyle").setAttribute("href", "stili.css");
    }
    else {
    document.getElementById("pagestyle").setAttribute("href", localStorage.getItem("href"));
    var z = document.getElementById("pagestyle").getAttribute("href");
    if (z == "site_styles_css/TelevideoSTYLE/teletext.css") {
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrett.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/aritt.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettitt.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amatt.png");
    }
    else if (z == "site_styles_css/BauhausSTYLE/bauhaus.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrebh.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/aribh.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettibh.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amabh.png");
    }
    else if (z == "stili.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andre.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/ari.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/betti.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/ama.png");
    }
    else if (z == "site_styles_css/GospelSTYLE/gospelSite.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrego.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arigo.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettigo.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amago.png");
    }
    
    else if (z == "site_styles_css/GalileiSTYLE/galilei.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andreg.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arig.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettig.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amag.png");
    }
    
    else if (z == "site_styles_css/1890STYLE/artn.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrean.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arian.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettian.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amaan.png");
    }
    else if (z == "site_styles_css/MilleniumSTYLE/millennium.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andreins.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/ariins.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettiins.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amains.png");
    }
    else if (z == "site_styles_css/2025STYLE/2025.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andremin.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arimin.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettimin.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amamin.png");
    }
    
    else if (z == "site_styles_css/2040STYLE/20400.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andre40.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/ari40.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/betti40.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/ama40.png");
    }
}
}



function swapStyleSheet(url){
    document.getElementById("pagestyle").setAttribute("href", url);        
    localStorage.setItem("href", url);
    var x = document.getElementById("pagestyle").getAttribute("href");

    if (x == "site_styles_css/TelevideoSTYLE/teletext.css") {
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrett.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/aritt.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettitt.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amatt.png");
    }
    else if (x == "site_styles_css/BauhausSTYLE/bauhaus.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrebh.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/aribh.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettibh.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amabh.png");
    }
    else if (x == "stili.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andre.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/ari.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/betti.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/ama.png");
    }
    else if (x == "site_styles_css/GospelSTYLE/gospelSite.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrego.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arigo.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettigo.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amago.png");
    }
    
    else if (x == "site_styles_css/GalileiSTYLE/galilei.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andreg.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arig.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettig.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amag.png");
    }
    
    else if (x == "site_styles_css/1890STYLE/artn.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andrean.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arian.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettian.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amaan.png");
    }
    else if (x == "site_styles_css/MilleniumSTYLE/millennium.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andreins.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/ariins.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettiins.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amains.png");
    }
    else if (x == "site_styles_css/2025STYLE/2025.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andremin.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/arimin.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/bettimin.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/amamin.png");
    }
    
    else if (x == "site_styles_css/2040STYLE/20400.css"){
        document.getElementById("Andre").setAttribute("src", "images/aboutUsImages/andre40.png");
        document.getElementById("Ari").setAttribute("src", "images/aboutUsImages/ari40.png");
        document.getElementById("Betti").setAttribute("src", "images/aboutUsImages/betti40.png");
        document.getElementById("Ama").setAttribute("src", "images/aboutUsImages/ama40.png");
    }
    
}


 //localStorage.getItem("href")
 
 
//if(document.getElementById('mantain').clicked == true)
//{
//alert("button was clicked");
//}

// creare un array con otto figure per ogni stile
//sviluppare funzione in cui il cambio avviene usando l'indice tipo function SwapImages(currentstyle) for i in range 8, if style == teletext.css --> Arraypreviousstyle[i] == Arraycurrentstyle[i] , usando il get elements by ? Class?
