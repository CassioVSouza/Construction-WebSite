let Imgs = ['assets/man1.jpg', 'assets/man2.jpg', 'assets/man3.jpg', 'assets/man4.jpg'];
let Names = ['Carl Honnor', 'Chris Damson', 'Dexter Noonan', 'Annie Glad']
let Jobs = ['Founder & Director of The Barr Group', 'Director', 'Director', 'Head of Communications']
let ImgCount = 0;

document.querySelector('p#right').addEventListener('click', NextImg);
document.getElementById('left').addEventListener('click', PreviousImg);

function NextImg() {
    ImgCount += 1;
    if(ImgCount >= 4){ //aumentar quando coloca imagem
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
        ImgCount = 3; //aumentar quando coloca imagem
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
