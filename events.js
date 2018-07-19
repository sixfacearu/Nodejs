var event=require('events');

var eventemitter=new event.EventEmitter();

var b=function(message){
	console.log(message);
}

eventemitter.on('open',function(){console.log("welcome sixface")});

eventemitter.emit('open');

eventemitter.on('open1',b);

eventemitter.emit('open1', 'welcome');