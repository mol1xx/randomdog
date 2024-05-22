let img =document.querySelector("img")
let video =document.querySelector("video")
document.querySelector("button").addEventListener("click", update)
async function update(){
    let responce = await fetch("https://dog.ceo/api/breeds/image/random")
let result = await responce.json()
img.src =result.message
}


update()