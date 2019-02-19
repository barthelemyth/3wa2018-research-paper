var Program = function(canvas)
{

	this.pen          = new Pen();
    this.slate       = new Slate(this.pen, canvas);

	this.start();
	
	
}


Program.prototype.start = function() {

	var penColor = document.querySelectorAll('.pen-color');
    
    for (var i = 0; i < penColor.length; i++) {
    
    	penColor[i].addEventListener('click', this.onClickPenColor.bind(this));
    }



    	var pensize=document.querySelectorAll('.pen-size');
    	for (var i = 0; i < pensize.length; i++) {
    
    	pensize[i].addEventListener('click', this.onClickPensize.bind(this));

    
    }
    

}


Program.prototype.onClickPenColor = function(event) {

	var color = event.currentTarget.dataset.color;

	this.pen.color = color;
}


Program.prototype.onClickPensize = function(event) {

	var size = event.currentTarget.dataset.size;

	this.pen.size = size;
}


