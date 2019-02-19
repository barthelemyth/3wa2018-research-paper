<?php
 class rectangle
 {  private $x;
 	private $y;
    private $color;
    private $fill;
    private $height;
    private $width;

    public function __construct($x, $y, $color,$fill,$height,$width) 
    {
    
		$this->x = $x; 
    	$this->y = $y;
		$this->color = $color;
		$this->fill = $fill;
		$this->height = $height; 
    	$this->width = $width;
		$this->color = $color;


	}
   

   public function dessiner() {
    
    	echo imagerectangle($this->x,$this->y,$this->color,$x/2-25,$y-25,$bleu);
    }


 }

?>