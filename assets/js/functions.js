var x = 0;
function showMobileMenue() {
    if(x === 0) {
        x = 1;
        document.getElementById("navLinks").style.left = "0";
    } else {
        x = 0;
        document.getElementById("navLinks").style.left = "-100vw";
    }
}