const message = `Поздравляю с 8 марта! 🌸

Желаю тебе всегда оставаться такой же
доброй, красивой и жизнерадостной.

Пусть в жизни будет больше
улыбок, радости и хорошего настроения.

Пусть исполняются мечты,
каждый день приносит что-то хорошее,
а рядом будут только хорошие люди.

С праздником! 🌷`

let i = 0

function typeWriter(){

if(i < message.length){

document.getElementById("text").innerHTML += message.charAt(i)

i++

setTimeout(typeWriter,35)

}

}

typeWriter()


document.addEventListener("click", createFlower)
document.addEventListener("touchstart", createFlower)

function createFlower(e){

const flower=document.createElement("div")

flower.className="flower"

const flowers=["🌸","🌷","🌺"]

flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)]

flower.style.left=e.pageX+"px"
flower.style.top=e.pageY+"px"

document.body.appendChild(flower)

setTimeout(()=>{

flower.remove()

},3000)

}

function floatingHearts(){

const heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="💗"

heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

}

setInterval(floatingHearts,1000)
