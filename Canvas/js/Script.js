elem = document.getElementById('canvas');
width = elem.getAttribute("width");
height = elem.getAttribute("height");
counter = elem.getAttribute("count");
timer = 0;
stops=0;
wid = width/counter;
count = 0;
color = [
    "000f",
    "800f",
    "f00f",
    "f80f",
    "8f0f",
    "0f0f",
    "0f8f",
    "08ff",
    "00ff",
    "008f"
]
function sdraw(){
    timer = setInterval(function () {
        count = count + 1;
        draw(count);
        if (count>counter){count =0}
    }.bind(this), 1000/10);
}
document.addEventListener("DOMContentLoaded", sdraw);
function stop(){
    if (stops == 1){sdraw();stops=0}
    else{
        clearInterval(timer);
        stops=1
    }
}
document.addEventListener("click", stop);
function draw(count) {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        function arr(x,y,z,counter){
            ctx.beginPath()
            ctx.moveTo(x,y)
            ctx.lineTo(x+20,y)
            ctx.lineTo(x+40,y+20)
            ctx.lineTo(x+20,y+40)
            ctx.lineTo(x,y+40)
            ctx.lineTo(x+20,y+20)
            ctx.fillStyle = z;
            ctx.fill()
            ctx.closePath()
        }
        let z=0;
        let log = "";
        for (i=0;i<counter;i++){
            if ( i>= count){
                z=i-count
            }else{
                z=counter-(count-i)+1
            };
//                            log = log+" "+z;

            arr(i*20-20,20,"#"+color[z]);
        }
//          console.log(log);
    }
}