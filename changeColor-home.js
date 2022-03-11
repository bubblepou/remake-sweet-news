if (localStorage.getItem('color') == 'strawberry') {
    fStrawberry()
}
else if (localStorage.getItem('color') == 'choco') {
    fChoco()
}
else if (localStorage.getItem('color') == 'mont') {
    fMont()
}

function fStrawberry() {
    document.getElementById('web-style').href = "./strawberry-home.css";
    document.getElementById('cuteimg').src = "./man/strawberry-cute.png";
    localStorage.setItem('color', 'strawberry');
}

function fChoco() {
    document.getElementById('web-style').href = "./choco-home.css";
    document.getElementById('cuteimg').src = "./man/choco-cute.png";
    localStorage.setItem('color', 'choco');
}

function fMont() {
    document.getElementById('web-style').href = "./mont-home.css";
    document.getElementById('cuteimg').src = "./man/mont-cute.png";
    localStorage.setItem('color', 'mont');
}

let sBtn = document.getElementById('strawberry');
sBtn.addEventListener('click', fStrawberry)

let cBtn = document.getElementById('choco');
cBtn.addEventListener('click', fChoco)

let mBtn = document.getElementById('mont');
mBtn.addEventListener('click', fMont)



/*resize image*/

let images = document.getElementsByClassName('key-new-image')
let div = document.getElementsByClassName('key-new')

Change_Height();


function Change_Height() {
    for (let i = 0; i < images.length; i++) {
        let div_height = div[i].clientHeight;
        let image_height = images[i].clientHeight;
        let div_weight = div[i].clientWidth;
        let image_weight = images[i].clientWidth;
        if (image_height - div_height < 0 && image_weight - div_weight >= 0) {
            images[i].style.height = "100%";
            images[i].style.weight = "auto";
        }
        else if (image_height - div_height >= 0 && image_weight - div_weight < 0) {
            images[i].style.height = "auto";
            images[i].style.weight = "100%";
        };
    };
}

window.onresize = Change_Height;