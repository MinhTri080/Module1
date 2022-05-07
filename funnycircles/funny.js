function Vongtron(x,y,radius){
    this.x = x,
    this.y = y,
    this.radius = radius
}
function createVongtron(){
    var ctx = document.getElementById('#myCanvas').getContext("2d");
    var vongtron = new Vongtron(500,500,80);
    ctx.beginPacth();
    ctx.arc(vongtron.x,vongtron.y,vongtron.radius,0,2*Math.PI);
    ctx.fill();
}
createVongtron();