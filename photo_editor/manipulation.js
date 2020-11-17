var foto;
window.onload = function() {
    foto = new Foto();
}

function selectImage() {
    document.getElementById("foto-file").click();

}

function makeGray() {
    foto.grayscale();
}

function makeBrighter() {
    foto.makeBright();
}

function makeDarker() {
    foto.makeDark();
}

function makeBlur() {
    foto.applyBlurFilter();
}

function makeEmboss() {
    foto.applyEmbossFilter();
}

function makeSharp() {
    foto.applySharpFilter();
}

function download() {
    foto.export();
}

