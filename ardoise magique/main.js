var canvas = document.getElementById('slate');


var prog = new Program(canvas);



var co= new ColorPalette();






var eff=document.getElementById('tool-clear-canvas');


var picker=document.getElementById('tool-color-picker');
picker.addEventListener('click', show);

function show()
{

var mont=document.getElementById('color-palette');
mont.classList.toggle('hide');


}












