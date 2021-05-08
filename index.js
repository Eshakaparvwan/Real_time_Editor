var express=require('express');
var app=express();
var socket=require('socket.io');
var fs = require('fs');
 var pdf = require('html-pdf');

var server=app.listen(4000,function(){
    console.log('listening');
});
app.use(express.static('assets'));

var io=socket(server);
io.on('connection',function(socket){
    console.log('connection made'+ socket.id);

    socket.on('type',function(data){

        socket.broadcast.emit('type',data);

    });
    socket.on('put_info',function(data){
        io.sockets.emit('put_info',data);
    });
    socket.on('save',function(data){
        // io.sockets.emit('put_info',data);
        //console(data);
         var html = fs.readFileSync('./assets/index.html', 'utf8');
    var options = { format: 'Letter' };
     
    pdf.create(html, options).toFile('document.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
    });


});
// var fs = require('fs');
//  var pdf = require('html-pdf');
// var download=document.getElementById('btn-download');
// download.addEventListener('click',function(){
//     alert('clicked');
//     var html = fs.readFileSync('./index.html', 'utf8');
//     var options = { format: 'Letter' };
     
//     pdf.create(html, options).toFile('./RE_doc.pdf', function(err, res) {
//       if (err) return console.log(err);
//       console.log(res); // { filename: '/app/businesscard.pdf' }
//     });
    
   
//     });

//previously app.use(pdf())
