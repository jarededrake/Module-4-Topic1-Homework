function solve() {
    document.getElementById("dropdown").addEventListener("click", function() {
        let display = document.getElementById("dropdown-ul");
        switch(display.style.display) {
            case "none":
            case "":
            document.getElementById("dropdown-ul").style.display = "block";
            break;
            case "block":
            document.getElementById("dropdown-ul").style.display = "none";
            document.getElementById("box").style.backgroundColor = "rgb(114, 112, 112)";
            break;
        }
    });
    let dropdown = document.getElementById("dropdown-ul");

    for(let li of dropdown.children) {
        li.addEventListener("click", function() {
            document.getElementById("box").style.backgroundColor = this.textContent;
        });
    }
}