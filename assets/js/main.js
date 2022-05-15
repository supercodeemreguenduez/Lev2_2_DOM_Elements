let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");

function abschicken() {
    console.log(
        "Fullname: " +
        vorname.value +
        " " +
        nachname.value +
        " " +
        "Land: " +
        land.value
    );
}