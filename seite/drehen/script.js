


function refreshDuration() {

    let value = parseInt(document.getElementById("slider").value);

    document.getElementById("rotor").style.animationDuration = `${1/(value/100)}s`;
}