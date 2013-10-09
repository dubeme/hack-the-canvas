var cnvElement = null,
    cnv2DContext = null;

function init(cnvID) {
    try {
        
        cnvElement = document.getElementByid(cnvID);

        if (cnvElement != null) {
            cnv2DContext = cnvElement.getContext("2d");
        }
    }
    catch (e) {
    }
}

function drawLine(x,y,l) {
    
}

function drawCircle(x,y,r) {
    
}

function drawRectangle(x,y,w,h) {
}

function drawPolygon(x,y,numberOfSides) {
    
}

function drawText(x,y,text) {

}

function drawImage(url,x,y,scaleW,scaleH) {
    var img = new Image();
    img.onload = function () {
        cnv2DContext.drawImage(this,x,y,scaleW,scaleH);
    }
    img.src = url;
}