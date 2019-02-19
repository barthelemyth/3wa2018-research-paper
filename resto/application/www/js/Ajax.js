execute();
var selecteur=document.getElementById('meal');
selecteur.addEventListener('change', execute);

// var items = [];
// load();

// console.log(items);

function execute(){

var produit= document.getElementById('meal').value;
$.getJSON('http://localhost/dev/resto/index.php/user/meal?id='+produit+'', callBack);

}



    
    function callBack(response) {
    	
        console.log(response);
        console.log(response.Name);
        var article=document.getElementById('meal-details');                               
        $('#meal-details p').text(response.Description);
        $('#meal-details h2').text(response.Name);
       	$('#meal-details strong').text(parseFloat(response.SalePrice).toFixed(2));
        $('#meal-details img').attr('src', getWwwUrl()+'/images/meals/'+response.Photo);
       


      
  
    }


// var button=document.getElementById('button1');
// button.addEventListener('click',execute2);

// function execute2(event){
// 	event.preventDefault();
// 	console.log('coucou');

//     var quantity=parseFloat($('#quantity').val());
//     var Description=$('#meal-details p').text();
//     var price=$('#meal-details strong').text();
//     var Name=$('#meal-details h2').text();

//      tab={Name,quantity,Description,price};
//      console.log(tab);
//      console.log(items);

//      for (var i=0; i<items.lenght+1 ; i++)

//      {

//      if (tab.Name=items[i].Name)

//      	    {
//      		items[i].quantity=items[i].quantity+tab.quantity
//      		saveDataToDomStorage('panier',items);
//      		return;
//      		}
//     else  {items.push(tab);
//         saveDataToDomStorage('panier',items);}


//      } 

   

       
       
  

    

// }




// function load() {

// 	items = loadDataFromDomStorage('panier');

// 	if (items == null ) {
// 		items = [];
// 	}
// }



