function big() {
    document.getElementById("t").style.fontSize = "24pt";
}

function sty() {
    let x = document.getElementById("t");
    if (document.getElementById("f").checked) {
        x.style.fontWeight = "bold";
        x.style.color = "blue";
        x.style.textDecoration = "underline";
    } else {
        x.style.fontWeight = "normal";
        x.style.color = "black";
        x.style.textDecoration = "none";
    }
}

function m() {
    let x = document.getElementById("t");
    let s = x.value.toUpperCase();
    let p = s.split(".");
    x.value = p.join("-Moo.");
}