nosex = 0;
nosey = 0;

function preload(){
    nombre = loadImage('https://i.postimg.cc/RZs255Kf/perrito.png') 
}

function setup(){
    canvas = createCanvas(450,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,300);
    video.hide();
    posenet = ml5.poseNet(video,modelloded);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,450,300 );
    image(nombre,nosex,nosey,300,300);

}

function tomarfoto(){
    save('mifoto.png');
}

function modelloded(){
    console.log("modelo activado");
}

function gotposes(resoults){
    console.log(resoults);
    if(resoults.length >0){
        nosex = resoults[0].pose.nose.x;
        nosey = resoults[0].pose.nose.y;
        console.log(nosex + "nariz en x es");
        console.log("nariz en y es" + nosey);
    }
}