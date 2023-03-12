const nzb = document.getElementById("nzb")
const bzn = document.getElementById("bzn")

const neunzehn = document.getElementById("neunzehn")
const sieben = document.getElementById("sieben")

const euro = document.getElementById("euro")

function berechnen(){
    const nzb = document.getElementById("nzb").checked
    const bzn = document.getElementById("bzn").checked
    const neunzehn = document.getElementById("neunzehn").checked
    const sieben = document.getElementById("sieben").checked
    const euro = document.getElementById("euro").value
    let ergebnis = document.getElementById("ergebnis")
    console.log(neunzehn)
    if (nzb && neunzehn) {
        euro*1.19
        ergebnis.innerHTML = "<p><span>Ergebnis</span><br>Mehrwertsteuerbetrag</p>"+Math.abs(euro - (euro*1.19))
        .toFixed(2)+"€"+"<p>Bruttobetrag (Endpreis)<br></p>"+(euro*1.19).toFixed(2)+"€"
        console.log((euro*1.19).toFixed(2))
    } else if (nzb && sieben) {
        euro*1.07
        ergebnis.innerHTML = "<p><span>Ergebnis</span><br>Mehrwertsteuerbetrag</p>"+Math.abs(euro - (euro*1.07))
        .toFixed(2)+"€"+"<p>Bruttobetrag (Endpreis)<br></p>"+(euro*1.07).toFixed(2)+"€"
        console.log((euro*1.07).toFixed(2))        
    } else if (bzn && neunzehn) {
        euro/1.19
        ergebnis.innerHTML = "<p><span>Ergebnis</span><br>Mehrwertsteuerbetrag</p>"+Math.abs(euro - (euro/1.19))
        .toFixed(2)+"€"+"<p>Nettobetrag<br></p>"+(euro/1.19).toFixed(2)+"€"
        console.log((euro/1.19).toFixed(2))
    } else if (bzn && sieben) {        
        euro/1.07
        ergebnis.innerHTML = "<p><span>Ergebnis</span><br>Mehrwertsteuerbetrag</p>"+Math.abs(euro - (euro/1.07))
        .toFixed(2)+"€"+"<p>Nettobetrag<br></p>"+(euro/1.07).toFixed(2)+"€"
        console.log((euro/1.07).toFixed(2))
    }

}

function headlineChange() {
    const headline = document.getElementById("headline")
    if (nzb.checked) {
        headline.innerHTML = "<h2>Nettobetrag (Preis ohne Mehrwertsteuer) in €*</h2>"
    } else if (bzn.checked) {
        headline.innerHTML = "<h2>Bruttobetrag (Preis inklusive Mehrwertsteuer) in €*</h2>"
        
    }
}