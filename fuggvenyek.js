function osszead() {
    var szam = parseInt(document.getElementById("szam").value);
    var osszeg = 0;
    while (osszeg <= szam){
        osszeg +=1;
    }
    console.log("A végösszeg " + osszeg)
    console.log("a szám " + szam)
}