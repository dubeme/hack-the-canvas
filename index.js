window.onload = init("myCanvas");

var cnvElement = null,
    cnv2DContext = null;

// Initialize the 2D context
function init(cnvID) {
    try {
        cnvElement = document.getElementById(cnvID);
        if (cnvElement != null) {
            cnv2DContext = cnvElement.getContext("2d");
        }
    }
    catch (e) {
        console.log(e)
    }
}
// Draw a line to the canvas
function drawLine(ctx,x1,y1,x2,y2,color) {
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
// Draws a circle to the canvas
function drawCircle(ctx, color, lineWidth,centerX,centerY,radius, startAngleRadians, endAngleRadians, counterClockwise) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,startAngleRadians,endAngleRadians,counterClockwise);
    ctx.stroke();
}
// Clears a given rectangle
function clearRectangle(ctx,x,y,w,h) {
    ctx.clearRect(x,y,w,h)
}
// Draws a rectangle with its border and inner fillings visible
function drawRectangle_0(ctx, x,y,w,h, fillStyle, strokeStyle,lineCap,lineWidth, lineJoin) {
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.lineCap = lineCap;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = lineJoin;
    
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
}
// Draws a rectangle with only the border visible
function drawRectangle1_1(ctx, x,y,w,h, strokeStyle,lineCap,lineWidth, lineJoin) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineCap = lineCap;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = lineJoin;
    
    ctx.beginPath();
    ctx.strokeRect(x,y,w,h);
}
// Draws a rectangle without the borders
function drawRectangle_2(ctx, x,y,w,h, fillStyle,lineCap,lineWidth, lineJoin) {
    ctx.fillStyle = fillStyle;
    ctx.lineCap = lineCap;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = lineJoin;
    
    ctx.beginPath();
    ctx.fillRect(x,y,w,h);
}
// Draws a polygon
function drawPolygon(ctx,x,y,numberOfSides) {
    
}
// Draws a text to the canvas
function drawText(ctx,text,x,y) {
    ctx.font="30px Arial";
    ctx.fillText(text,x,y);
}
// Draws an image to the canvas
function drawImage(ctx,url,x,y) {
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img,x,y);
    };
    img.src = url;
}
// Transform the given image at the "url" with the 3x3 transformation matrix,
// then draw the transformed Image.
function transformAndDrawImage(ctx,url,x,y,h,w,kernel_3_3) {
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img,x,y);
    };
    img.src = url;
}