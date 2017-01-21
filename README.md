# iSAM2016.github.io


/**
*
* LazyMan('Hank'): Hi This is Hank!
* LazyMan('Hank').sleep(10).eat('dinner'): 
*       Hi This is Hank!
*       //等待10s
*       wake up after 10
*       eat dinner 
*
*LazyMan('Hank').sleepFirst(5).eat('supper'): 
*       //等待5s
*       wake up after 5
*       Hi This is Hank!
*       eat dinner     
*/
(function(){
function lazyMan(name){
    this.tasks = [];
    var self = this;
    var fn = (function(n){
        var name = n;
        return function(){
            console.log('Hi this is' + name + '!');
            self.next();
        }
    })(name)
    this.tasks.push( fn );
    setTimeout( function(){
        self.next()
    }, 0)
   
}

lazyMan.prototype.next = function(){
    var fn = this.tasks.shift();
    fn && fn();
}

lazyMan.prototype.sleep = function(time){
    var self = this;
    var fn = (function(t){
        var time = t;
        return function(){
            setTimeout(function(){
                console.log('wake up after' + time + 's');
                self.next();
            }, time*1000);
        }
    })(time)
    this.tasks.push( fn );
    return this;
}

lazyMan.prototype.eat = function(food){
    var self = this;
    var fn = (function(f){
        var food = f;
        return function(){
                console.log(' wake up afte' + food );
                self.next();
        }
    })(food)
    this.tasks.push( fn );
    return this;
}

lazyMan.prototype.sleepFirst = function(time){
    var self = this;
    var fn = (function(){
        setTimeout(function(){
            console.log('wake up after' + time + 's');
            self.next();
            return this;
        }, time*1000);
    })()
    this.tasks.unshift(fn);
    return this;
}

function LazyMan( name ){
    return new lazyMan( name );
}

//LazyMan('Hank').sleep( 2 ).eat( 'apple' );
LazyMan('Hank').sleepFirst(2).eat('apple');

})()