function sayHello()
{
	document.write('<p>Bonjour à toutes et à tous !</p>');
    document.write('<p>Coucou</p>');
    

}


sayHello();

sayHello();

sayHello();

sayHello();


function sayHelloByName(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}

sayHelloByName('Marie', 'MAYERS');
sayHelloByName('Thib', 'Monesma');


function sayHello()
{
    return 'Bonjour à toutes et à tous !';
}

var message = sayHello();
document.write('<h2>' + message + '</h2>');

function addition(num1, num2) {
	var result = num1 + num2;
    
    return result;

    var test = addition(8, 5); //13

}

var test = addition(3, 5);

var tab = ['canard', 'chien', 'chat'];

tab.push('souris');//insere un élement dans le tableau

tab.push('oie');//insere un élement dans le tableau


tab.indexOf('chien') // 1

tab.indexOf('poule')// -1

tab.splice(2, 1); // supprime chat

