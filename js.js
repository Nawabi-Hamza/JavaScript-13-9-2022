// class fruit {
//     constructor (){
//     }
// }
                // class lessons

function pen(_name,_color,_price){
    this.name = _name;
    this.color = _color ;
    this.price = _price;

}
pen.prototype.showPenDetails = function(){
    return "the pen name is "+ this.name+ " and color is" +this.color + " color and it is price is " + this.price;
}
let objp = new pen('pino cristal' , "blue" , 10)
console.log(objp.showPenDetails())

//==========================================================================

class pen2 {
    constructor(name,color,price){
        this.name = name;
        this.color = color ;
        this.price = price;
    }
showPenDetails(){
    return `the pen name is ${this.name} it is color is ${this.color} and it price is ${this.price}`
}
}
let objPen= new pen2('big', 'red',10)
console.log(objPen.showPenDetails())

//========================================================================

class Rectengle{
    constructor (hight,width,color){
        this.hight = hight;
        this.width = width;
        this.color = color;
    } 
    show(){
        return `the Rectengle height is ${this.hight} and width is  ${this.width} and color is ${this.color}`
    }
}
let objr = new Rectengle(300,200,"red")
console.log(objr.show())

//========================================================================

class person{
    constructor(name,age,lastName,height,weight,colorEye,colorSkin){
        this.name = name;
        this.age = age;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
        this.colorEye = colorEye;
        this.colorSkin = colorSkin;
    
    }
    
    show(){
        return `my name is  ${this.name} and my last name is ${this.lastName} and my age is : ${this.age} and my height is ${this.height} and width is ${this.weight} and my color eye is ${this.colorEye} and my color skin is ${this.colorSkin}`
    }

    walk(){
        return `I can walk my name is ${this.name}`
    }
    talk(tal){
        return `my name is ${this.name}  I can talk `+ tal;
    }
    see(){
        return `my name is ${this.name}  I can see you `
    }
}
let objPerson = new person('hamza',19,'nawabi',170, 66, 'brown','gandomi')
                // in the paragraph in html file show 
var showthe = document.getElementById('sho')
showthe.innerHTML= objPerson.show() +'</br>'+objPerson.walk()+'</br>'+objPerson.talk('rusia')+'</br>'+objPerson.see()
                // in the  console show data
/*
console.log( objPerson.show() )
console.log( objPerson.walk() )
console.log( objPerson.talk() )
console.log( objPerson.see()  ) 
*/

//========================================================================

class Person{
    
    constructor(name,DOB){
        this.name = name;
        this.DOB = DOB;
    }
    age(){
        let date = new Date()
        let year = date.getFullYear()
        return `my name is ${this.name} and my age is ${year-this.DOB}`

    }
}


let objPer = new Person("Hamza",2000)
let obj2 = new Person("Nabi",1990)

console.log(objPer.age())
console.log(obj2.age())

//========================================================================

class Car {
    constructor(brand){
        this.brand = brand
    }
    carName(){
        return `my car name is ${this.brand}`
    }
}
class Model extends Car {
    constructor(brand,model){
        super(brand)
        this.model = model;
    }
    showModel(){
        return this.carName() + `and it is model is ${this.model}`
    }
}

// let obj = new Car('toyota')
// console.log(obj.carName())

let obj =new Model('Benz' , 2000)
console.log(obj.showModel())

//========================================================================

class PERson {
    constructor(name){
        this.name = name;
    }
    get gpn (){
        return `the person name is ${this.name}`
    }
}
let objpe = new PERson('Ahmad')
console.log(objpe.gpn)

//==========================================================================

class classA {
    constructor(name , chair){
        this.name = name;
        this.chair = chair
    }
    get classP(){
        return `we have in our class a ${this.name} and we sit on ${this.chair}`
    }
    set spn(newName){
        this.name = newName;
    }
    set spn2(newName){
        this.name = newName;
    }
}
let objC= new classA('Dell' , 'chairs')
console.log(objC.classP)

objC.spn= "Israial"
console.log(objC.classP)

objC.spn2= "Hamza"
console.log(objC.classP)

//==========================================================================

class classB {
    constructor(name , chair){
        this.name = name;
        this.chair = chair
    }
    get classP(){
        return `we have in our class a ${this.name} and we sit on ${this.chair}`
    }
    set spn(newName){
        this.name = newName;
    }
    static pln(){
        return `Hello Aghanistan thsi si static methode `
    }
}


console.log(classB.pln())

