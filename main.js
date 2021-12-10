var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function next()
{
document.getElementById('myCanvas')
fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
    image = Img;

    image.scaleToWidth(1100);
    image.scaleToHeight(610);
    image.set({
    top:0,
    left:0
    });
    canvas.add(image);
    });
}

function sounds()
{
x.play();
}