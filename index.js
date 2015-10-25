var Myo = require('myo');
var Player = require('player');

var beat = new Player('sounds/friday.mp3');
var beat2 = new Player('sounds/piano.mp3');

var snare = new Player('sounds/cena2.mp3');
var laser = new Player('sounds/laser.mp3');

var rSnare = new Player('sounds/snarebeat.mp3');
var hihat = new Player('sounds/hihat.mp3');
var fart = new Player('sounds/fart.mp3');
var clap = new Player('sounds/clap.mp3');

/*fart.on('playend', function(item) {
    console.log('src' + item + 'is donee');
});

clap.on('playend', function(item){
    console.log('src' + item + 'is done');
});

clap.on('playend', function(item){
    console.log('src' + item + 'is done');
});

rSnare.on('playend', function(item) {
    console.log('src' + item + 'done');
});

hihat.on('playend', function(item){
    console.log('src' + item + 'done');
});*/


//Start talking with Myo Connect
Myo.connect('com.example.musicApp');

var ifFirst = 0;
Myo.on('fist', function(){
    if (ifFirst == 0){
        console.log('made fist number: ' + ifFirst);
        // this.vibrate();
        this.trigger('beat-beat');
        console.log('play beat 1');    
        ifFirst++;
    }
    else if (ifFirst >= 1) {
        this.trigger('beat-beat-pause');
        console.log('fist number: ' + ifFirst);
        this.trigger('snare');
        snare.on('playing',function(item){
            console.log('im playing... src:' + item);
        });
        console.log('play snare');
        snare.on('error', function(err){
            // when error occurs
            console.log(err);
        });
        ifFirst++;
    }
});
/*Myo.on('fist', function(){
    if (ifFirst == 0){
        console.log('made fist number: ' + ifFirst);
        // this.vibrate();
        this.trigger('beat-beat2-pause');
        this.trigger('beat-beat');   
        ifFirst ++;
    }
    else if (ifFirst >= 1) {
        console.log('fist number: ' + ifFirst);
        this.trigger('snare');
        console.log('play snare drum');
        ifFirst++;
    }
});*/

Myo.on('wave_in', function(){
    console.log('slap my booty honey');
    this.vibrate();
});

Myo.on('wave_on', function(){
    console.log('oooh backslap that ass bitch');
    this.vibrate();
});


Myo.on('double_tap', function(){
    console.log('mmm... lemme see dat tounge');

    this.vibrate();
});

Myo.on('connected', function(){
    console.log('connected!', this.id)
    this.vibrate('long');
});

Myo.on('disconnected', function() {
    console.log('disconnected the Myo rip');
});

/*Myo.on('accelerometer', function(data){ 
 if (data.x > 0) {
    console.log('moving forward');
 } else if (data.x < 0) {
    console.log('moving backward');
 } else {
    console.log('spin that shit');
 }*/

Myo.on('fingers_spread', function(){
    console.log('shooting laser');
    this.trigger('laser');
    this.vibrate();
});

/*Myo.on('gyroscope', function(data) {
    if (data.x > 0) {
        console.log('turning right');
    }

});*/

Myo.on('beat-beat', function() {
    //strong beat
    beat.play();
});

Myo.on('beat-beat-pause', function(){
    beat.stop();
});

Myo.on('beat-beat2', function(){
    beat2.play();
});

Myo.on('beat-beat2-pause', function(){
    beat2.stop();
});

Myo.on('snare', function(){
    snare.play();
});

Myo.on('laser', function(){
    laser.play();
    laser.on('error', function(err){
        // when error occurs
        console.log(err);
    });
});

/*Myo.on('orientation', function(data){
   // console.log('receiving data about orientation');
    if(data.x > 0){
        //console.log('x greater than 0');
        setTimeout(function() {
            rSnare.play();
            rSnare.on('error', function(err){
                // when error occurs
                console.log(err);
            })
        }, 3000);
    } else if (data.x<0) {
        //console.log('x is less than 0');
        setTimeout(function() {
            hihat.play();
            hihat.on('error', function(err){
                // when error occurs
                console.log(err);
            });
        }, 3000);  
    } else if (data.y > 0){
        //console.log('y greater than 0');
        setTimeout(function() {
            fart.play();
            fart.on('error', function(err){
                // when error occurs
                console.log(err);
            });
        }, 3000);  
    } else if (data.y < 0){
       // console.log('y is less than 0');
        setTimeout(function() {
            clap.play();
            clap.on('error', function(err){
                // when error occurs
                console.log(err);
            });
        }, 3000);  
    } else if(data.z > 0){
        //console.log('z greater than 0');

    } else {
       // console.log('z is less than 0');
    }


});
Myo.on('gyroscope', function(data) {
    if(data.x>0){
       // console.log('turning right');
    }
})*/