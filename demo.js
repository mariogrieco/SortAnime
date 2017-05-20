// Privacy with Privileged Methods

class Animal {
     constructor(name,age){
         let _privateName = name;
         let _privateAge = age;

         let foOut = "demo";
         
         // need a clousure to remenber the context
         this.getAge = function(){
             return _privateAge;
         }

         this.getName = function(){
             return _privateName;
         }

         this.setAge= function(age){
             _privateAge = age;
         }
     } 

     static walk(){  // no se instancia y corre!!!
        //  console.log(`${_privateName} is walking`);
        // out of scope block scope let generate
        alert("esto es auto!");

     }

     getForOut(){
         console.log(`demo ${foOut}`);
     }

     caminar(){
          console.log(`${this.getName()} es normal`); // var is not defined!
     }  
}

class Human extends Animal{
    constructor(){
        super("non",1);
    }

}


a = new Animal(1,2);
// https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/
// https://www.sitepoint.com/patterns-object-inheritance-javascript-es2015/
