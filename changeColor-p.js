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
    document.getElementById('web-style').href="./css/strawberry.css";
    document.getElementById('cuteimg').src="./man/strawberry-cute.png";
    document.getElementById('man').src="./man/strawberry.png";
    localStorage.setItem('color','strawberry');
}

function fChoco(){
    document.getElementById('web-style').href="./css/choco.css";
    document.getElementById('cuteimg').src="./man/choco-cute.png";
    document.getElementById('man').src="./man/choco.png";
    localStorage.setItem('color','choco');
}

function fMont(){
    document.getElementById('web-style').href="./css/mont.css";
    document.getElementById('cuteimg').src="./man/mont-cute.png";
    document.getElementById('man').src="./man/mont.png";
    localStorage.setItem('color','mont');
}

let sBtn =  document.getElementById('strawberry');
sBtn.addEventListener('click',fStrawberry)

let cBtn =  document.getElementById('choco');
cBtn.addEventListener('click',fChoco)

let mBtn =  document.getElementById('mont');
mBtn.addEventListener('click',fMont)