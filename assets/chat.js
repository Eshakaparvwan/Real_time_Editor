
var socket=io.connect('http://localhost:4000');
var member=[];
var input_box=document.getElementById('ip_box');
var btn=document.getElementById('submit_btn');
var company=document.getElementById('c_name');
var fname=document.getElementById('f_name');
var heading=document.getElementById('name_of_company');
var dropdown=document.getElementById('dropdwn');
var download=document.getElementById('btn-download');


input_box.addEventListener('keypress',function(){
   
    console.log(input_box.innerHTML);
   
    socket.emit('type',{
            info:input_box.innerHTML,
            // company:company.value

          
    })
});
socket.on('type',function(data){
    input_box.innerHTML=data.info;
    // heading.innerHTML=data.comp2;
});

btn.addEventListener('click',function(){
    // heading.innerHTML=company;
    socket.emit('put_info',{
        company:company.value,
        person:fname.value
 })
});
socket.on('put_info',function(data){
    heading.innerHTML=data.company;
    member.push(data.person);
// member.forEach(element => {
//     dropdown.innerHTML ='<a class="dropdown-item" id="list-item">'+name + '</a>';
        
//     });
   
    
    var len=member.length;

    // for(var i=0;i<member.length;i++) {
        
        dropdown.innerHTML +='<a class="dropdown-item" id="list-item">'+member[len-1]+ '</a>';
    // }
    console.log(member);
});


download.addEventListener('click',function(){
    alert('clicked');
    // var html = fs.readFileSync('./index.html', 'utf8');
    // var options = { format: 'Letter' };
     
    // pdf.create(html, options).toFile('./RE_doc.pdf', function(err, res) {
    //   if (err) return console.log(err);
    //   console.log(res); // { filename: '/app/businesscard.pdf' }
    // });
    socket.emit('save',{
        pdf: document.pdf,
        // company:company.value

      
});
   
    });

