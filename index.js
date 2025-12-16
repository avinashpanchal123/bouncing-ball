var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var ctx = canvas.getContext('2d');
var posX = 500
var posY = 500
var velX = 5
var velY = -5
function animate() {
    ctx.beginPath()
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.arc(posX,posY,70,0,Math.PI*2)
    ctx.stroke()
    posX=posX+velX
    posY=posY+velY
    if(posX + 70 > canvas.width || posX - 70 < 0){
        velX = -velX
    }
    if(posY + 70 > canvas.height || posY - 70 < 0  ){
        velY = -velY
    }
    console.log(posY)
}
animate()
