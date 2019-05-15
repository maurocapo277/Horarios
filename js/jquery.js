function mostrar() {
    document.getElementById('lun-gut-mdz').style.display="block";
    document.getElementById('lun-pan-gut').style.display="block";
    document.getElementById('sab-gut-pan').style.display="none";
    document.getElementById('sab-pan-gut').style.display="none";
    document.getElementById('dom-gut-mdz').style.display="none";
}
function mostrar_sabado(){
    document.getElementById('sab-gut-pan').style.display="block";
    document.getElementById('sab-pan-gut').style.display="block";
    document.getElementById('lun-gut-mdz').style.display="none";
    document.getElementById('lun-pan-gut').style.display="none";
    document.getElementById('dom-gut-mdz').style.display="none";
    }
    function mostrar_dom(){
        document.getElementById('lun-gut-mdz').style.display="none";
        document.getElementById('lun-pan-gut').style.display="none";
        document.getElementById('sab-gut-pan').style.display="none";
        document.getElementById('sab-pan-gut').style.display="none";
        document.getElementById('dom-gut-mdz').style.display="block";
    }

