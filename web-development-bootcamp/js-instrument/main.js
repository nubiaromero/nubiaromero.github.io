console.log("Hola mundo")
const myName = 'Nubia';
let myAge = 15;
let x = 3;
let y = 4;
let z;

const likesMusic = true;
console.log('myName', myName);
console.log('myAge', myAge);
console.log('x', x);
console.log('y', y);
console.log('likesMusic', likesMusic);

console.log('myName es de tipo', typeof myName);
console.log('myAge de tipo', typeof myAge);
console.log('x es de tipo', typeof x);
console.log('y es de tipo', typeof y);
console.log('z es de tipo', typeof z);
console.log('likesMusic es de tipo', typeof likesMusic);

z = x + y;
console.log('La suma de ' + x + ' y ' + y + ' es ' + z);
z = x - y
console.log('La resta de ' + x + ' y ' + y + ' es ' + z)
z = x * y
console.log('La multiplicación de ' + x + ' y ' + y + ' es ' + z)
z = x / y
console.log('La división de ' + x + ' y ' + y + ' es ' + z)



console.log('Valor actual de x es', x);
x++;
console.log('Operador de incremento', x);
x--;
console.log('Operador de decremento', x);
console.log('Negación unaria', -x);
console.log('Suma unaria', +x);


console.log('Igualdad', x == y);
console.log('Desigualdad', x != y);
console.log('Igualdad estricta', x === y);
console.log('Desigualdad estricta', x !== y);
console.log(x, ' mayor a ', y, ' ', x > y);
console.log(x, ' mayor o igual a ', y, ' ', x >= y);
console.log(x, ' menos que ', y, ' ', x < y);
console.log(x, ' menos o igual que ', y, ' ', x < y);

if (likesMusic === true) { console.log('Me gusta la música'); }
else { console.log('No me gusta la música'); }

const lovesArt = false;

if (likesMusic === true || lovesArt === true) { console.log('Dedícate al arte'); }
else { console.log('Dedícate a algo más'); }

if (likesMusic === true & lovesArt === true) { console.log('Dedícate al arte'); }
else { console.log('Dedícate a algo más'); }

let compraRealizada = false;
let pisoBarrido = false;
let dinero = 0;

//compra, sino piso, sino nada
if (compraRealizada === true) {
    let dinero = 10; console.log('El hermano tiene: ', dinero, ' pesos');
}
else if (pisoBarrido === true) {
    let dinero = 10; console.log('El hermano tiene: ', dinero, ' pesos');
}
else {
    let dinero = 5; console.log('El hermano tiene: ', dinero, ' pesos');
}

//compra o piso
if (compraRealizada === true || pisoBarrido === true) {
    let dinero = 10; console.log('El hermano tiene: ', dinero, ' pesos');
}
else {
    let dinero = 5; console.log('El hermano tiene: ', dinero, ' pesos');
}

//compra y piso
if (compraRealizada === true & pisoBarrido === true) {
    let dinero = 20; console.log('El hermano tiene: ', dinero, ' pesos');
}
else {
    let dinero = 0; console.log('El hermano tiene: ', dinero, ' pesos');
}

for (let i = 0; i < 9; i++) {
    console.log(i);
}

let YOB = 2007;
const d = new Date();
let CY = d.getFullYear();


for (let year = YOB; year <= CY; year++) {
    if (year === YOB) {
        console.log('En ', year, ' yo nací');
    } else if (year - YOB == 1) {
        console.log('En ', year, ' yo tenía ', year - YOB)
    }
    else if (year == CY) {
        console.log('En el', year, ' yo tendré ', (year - YOB), ' años');
    } else {
        console.log('En ', year, ' yo tenía ', (year - YOB), ' años');
    }
};

let year = YOB

while (year <= CY) {
    let age = year - YOB

    if (year == YOB) {
        console.log('Nací en ', year);
    }
    else if (age == 1) {
        console.log('En el ', year, ' yo tenía ', age)
    }
    else if (year == CY) {
        console.log('En el', year, ' yo tendré ', age)
    }
    else { console.log('En el', year, ' yo tenía ', age) }
    year++
};
console.log('')


//num=25
//console.log(' En grados fahrenheit,',num,' es igual a ')

//function aCelsius(num){
//    return(num-32)/1.8
//}

//console.log('',aCelsius(num),' grados, en Celsius')

num = 25
const aCelsius = (num) => {
    return (num - 32) / 1.8
}
console.log(aCelsius(num))



function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classlist.remove('active');
    });
}

const WHITE_KEYS = ['z', 'x', 'x', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key))
});
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);

nameElement.textContent = myName;
ageElement.textContent = myAge;
likesMusicElement.textContent = likesMusic;

if (likesMusic === true) {
    likesMusicElement.textContent = 'Me gusta la música';
}
else { likesMusicElement.textContent = 'No me gusta la música'; }

const body = document.querySelector('body');
const text = document.createElement('p');
text.textContent = 'Hola mundo desde el DOM';

body.appendChild(text);
body.removeChild(text);

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    console.log('key', key);
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

const persona = {
    nombre: {
        primerNombre: myName,
        apellidoPaterno: 'Romero',
        apellidoMaterno: 'Monje',
    },
    edad: myAge,
    bio: function () {
        console.log(this.nombre.primerNombre, ' tiene ', this.edad, ' años.',)
    },
    presentarseArrowFn: () => { console.log(this.nombre.primerNombre) },
    presentarse: function () {
        console.log('Hola! Mi nombre es ', this.nombre.primerNombre)
    }
};

const frutas = ['Manzana', 'Mango', 'Melón', 'Sandía', 'Durazno'];
frutas[5] = 'Piña';
frutas[0] = 'Higo';
frutas.push('Frambuesa');
frutas.shift();
console.log(frutas);

const calificaciones = [10, 6, 5, 8, 8, 7, 5, 10, 9, 9];
const reprobados = calificaciones.find(calificacion => calificacion <= 5);
const mayora8 = calificaciones.map(calificacion => calificacion >= 8);
const aprobados = calificaciones.filter(calificacion => calificacion > 5);

const sumatoria = calificaciones.reduce(
    (valorAnterior, valorActual) => valorAnterior + valorActual,
    0
);

const promedio = sumatoria / calificaciones.length;

console.log('Aprobados:', aprobados);
console.log('Reprobados:', reprobados);
console.log('Mayor a 8:', mayora8);

console.log('El promedio general de la escuela es de:', promedio);

const getAge = async () => {
    const response = await fetch('https://api.agify.io?name=nubia');
    console.log(response);

    const data = await response.json(); 
    console.log(data)
} 
    
const printJuan = () => {
    let age = 10; 
    let years = 5; 
    console.log('Juan' + (age + years));
}
 
const main = async () => {
    await getAge(); 
    printJuan(); 
    console.log('Pepe')
}

main();

const getGuessedAge = async () => {
    const response = await fetch('https://api.agify.io?name=noe');
    const data = await response.json();
    return data.age;
}

const displayGuessedAge = async () =>{
    const guessedAgeSpan = document.getElementById('guessedAge');
    const guessedAge = await getGuessedAge();
    guessedAgeSpan.textContent = guessedAge;
}

//
//const displayisGuessRight = async () =>{
//    const isGuessRightSpan = document.getElementById('isGuessRight');
//    const isGuessRight = await getisGuessRight();
//    isGuessRightSpan.textContent = isGuessRight;
//}

displayGuessedAge();
