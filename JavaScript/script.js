var menu = false;

document.getElementById('ImgCallerMenu').addEventListener('click', OpenMenu);
document.getElementById('indexsize').addEventListener('click', CloseMenu);

function OpenMenu() {
    if(menu == false){
    document.getElementById('op').style.animation = 'menuanimopen';
    document.getElementById('op').style.animationDuration = '1s';
    document.getElementById('fixedMenu').style.position = 'fixed';
    document.getElementById('op').style.animationDirection = 'linear';
    setTimeout(Fixed, 900)
    menu = true;
}else{
    document.getElementById('op').style.animation = 'menuanim';
    document.getElementById('op').style.animationDuration = '1s';
    document.getElementById('fixedMenu').style.position = 'absolute';
    document.getElementById('op').style.animationDirection = 'linear';
    setTimeout(NotFixed, 900)
    menu = false;
}
}
function CloseMenu() {
    if(menu == true){
        document.getElementById('op').style.animation = 'menuanim';
        document.getElementById('op').style.animationDuration = '1s';
        document.getElementById('op').style.animationDirection = 'linear';
        setTimeout(NotFixed, 900)
        menu = false;
    }
}

function ImgSize() {
    document.getElementById('indexsize').style.height = innerHeight + 'px';
}

function Fixed() {
    document.getElementById('op').style.left = '0px';
}
function NotFixed() {
    document.getElementById('op').style.left = '-100%';
}