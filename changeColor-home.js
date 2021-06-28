if (localStorage.getItem('color') == 'strawberry'){
    fStrawberry()
}
else if(localStorage.getItem('color') == 'choco'){
    fChoco()
}
else if(localStorage.getItem('color') == 'mont'){
    fMont()
}

function fStrawberry(){
document.getElementById('web-style').href="/strawberry-home.css";
document.getElementById('cuteimg').src="./man/strawberry-cute.png";
localStorage.setItem('color','strawberry');
}

function fChoco(){
    document.getElementById('web-style').href="/choco-home.css";
    document.getElementById('cuteimg').src="./man/choco-cute.png";
    localStorage.setItem('color','choco');
}

function fMont(){
    document.getElementById('web-style').href="/mont-home.css";
    document.getElementById('cuteimg').src="./man/mont-cute.png";
    localStorage.setItem('color','mont');
}

let sBtn =  document.getElementById('strawberry');
sBtn.addEventListener('click',fStrawberry)

let cBtn =  document.getElementById('choco');
cBtn.addEventListener('click',fChoco)

let mBtn =  document.getElementById('mont');
mBtn.addEventListener('click',fMont)