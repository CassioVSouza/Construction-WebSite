var menu = false;
let Imgs = ['assets/man1.jpg', 'assets/man2.jpg', 'assets/man3.jpg'];
let Names = ['Carl Honnor', 'Chris Damson', 'Dexter Noonan']
let Jobs = ['Founder & Director of The Barr Group', 'Director', 'Director']
let ImgCount = 0;

document.getElementById('ImgCallerMenu').addEventListener('click', OpenMenu);
document.getElementById('right').addEventListener('click', NextImg);
document.getElementById('left').addEventListener('click', PreviousImg);

function NextImg() {
    ImgCount += 1;
    if(ImgCount >= 3){
        ImgCount = 0;
    }
    document.getElementById('teamcellJS').style.transition = 'opacity 0';
    document.getElementById('teamcellJS').style.transitionDuration = '0.5s';
    document.getElementById('teamcellJS').style.opacity = 0;
    setTimeout(Change, 900);
}
function PreviousImg() {
    ImgCount -= 1;
    if(ImgCount <= -1){
        ImgCount = 2;
    }
    document.getElementById('teamcellJS').style.transition = 'opacity 0';
    document.getElementById('teamcellJS').style.transitionDuration = '0.5s';
    document.getElementById('teamcellJS').style.opacity = 0;
    setTimeout(Change, 900);
}

function Change() {
    document.getElementById('teamcellJS').style.transition = 'opacity 1';
    document.getElementById('teamcellJS').style.transitionDuration = '0.5s';
    document.getElementById('teamcellJS').style.opacity = 1;
    document.getElementById('ImgPeople').src = Imgs[ImgCount];
    document.getElementById('name').innerHTML = Names[ImgCount];
    document.getElementById('Job').innerHTML = Jobs[ImgCount];
}


function OpenMenu() {
    if(menu == false){
    document.getElementById('op').style.animation = 'menuanimopen';
    document.getElementById('op').style.animationDuration = '1s';
    document.getElementById('op').style.animationDirection = 'linear';
    setTimeout(Fixed, 900)
    menu = true;
}else{
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