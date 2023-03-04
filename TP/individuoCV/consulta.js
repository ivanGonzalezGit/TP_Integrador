console.log("hola mundo!");

var i = 1;
console.log(i);

i++

console.log(i)

function hola(nom) {
  console.log('hola, ' + nom);
} 

hola('Perico');

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
      