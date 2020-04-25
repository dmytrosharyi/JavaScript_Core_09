function show(data) {
    console.log(data)
}
//4

function filterRange(array,a,b) {
    var nNumbers = array.slice(a,b);
return nNumbers;
}
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
show (filterRange(numbers,2,16));

//5

var string = 'my-short-string';
function camelize(str)
{ 
var str = str.split("-");
 for (var i = 1, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)};
 return str.join ("")  
}

show (camelize(string));