var stuff = require('./stuff.js');
var events = require('events');
var util = require('util');


var Person = function(name){
  this.name= name;
};


util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var marie = new Person('marie');
var ryu = new Person('ryu');

var people = [james, marie, ryu];
people.forEach(function(Person){
  Person.on('speak',function(mssg){
    console.log(Person.name + ' said : '+mssg);
  } )
});

james.emit('speak', 'hey dudes !');
marie.emit('speak', 'je suis marie');
ryu.emit('speak', ' yohaaa !');



/*
var myEmitter = new event.EventEmitter();
myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted');


console.log(stuff.counter(['shaun','crystal','ryu']));
console.log(stuff.adder(2,2));
console.log(stuff.pi);


/*
function callFunction(fun){
  fun();
}


var sayHi = function(){

  console.log(__dirname);
  console.log(__filename);

}

sayHi();
callFunction(sayHi);

/*
var time = 0 ;
setInterval(function(){

time += 2
    console.log(' Time : ' + time + ' seconds');

if (time >5 ){

  clearInterval(time);
}

},2000);
*/
