// 1
function show(data) {
    console.log(data)
}

var products = ['bread','milk','eggs','flour','butter','bananas','rice'];
show (products [products.length -1]);

// 2
var styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
show (styles);
styles[styles.length-2]='Classic'
show (styles);
styles.shift();
show (styles[0]);
styles.unshift('Rap','Raggie');
show (styles);


//3
var numbers = [1,2,3,4,5,6,7,8,9];
var material = ['silk','cotton','polyester','jaquard','wool','leather']
function find(arr,value){
    for (var i=0; i<arr.length; i++) {
    if (arr[i]==value) return i;
    }
    return -1;
}
show (find(numbers,4));
show (find(material,'cotton'))

