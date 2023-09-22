window.onresize = screen;
window.onload = screen;
function screen(){
    Width = window.innerWidth;
    document.querySelector("#size").innerHTML =`Width : ${Width} px`;
    if(Width <= 576){
        document.querySelector("#text").innerHTML = `Mobile`;
    }
    else if(Width <= 768 && Width > 576){
        document.querySelector("#text").innerHTML = `Tablet`;
    }
    else if(Width <= 992 && Width > 768){
        document.querySelector("#text").innerHTML = `Laptop`;
    }
    else{
        document.querySelector("#text").innerHTML = `Desktop`;
    }
}
main = function(){
    console.log("Ready");
    console.log(window.innerWidth);
    screen();
}
main()