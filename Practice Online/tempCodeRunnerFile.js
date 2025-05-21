// Initialisation
var a =7;
let b =8;
const pi =3.14;

console.log(a);
console.log(b);
console.log(pi);
console.log();

// Reinitialisation 
var a =10;
//this will show error
// let b =8; 
// const pi =3.145;

console.log(a);
console.log(b);
console.log(pi);
console.log();

// Redeclearation
a =100;
b=9;
// pi = 3.145;

console.log(a);
console.log(b);
console.log(pi);
console.log();

var c="sat";
c=c+1;
console.log(c);

c=c+a;
console.log(c);
console.log();



if (100>90) {
    console.log("100>90");
    console.log(100>90);
    console.log();
} 
console.log();
console.log();

if (100<90) {
    console.log("100>90");
    console.log(100>90);
    console.log();
} 
else
{   console.log("100<90");
    console.log(100<90);
    console.log();
}





// class in js
const item = {
    item_name : "book",
    price : "150"
}


console.log("item :", item);
console.log("item name:", item.item_name);
console.log("price:", item.price);
console.log();

/*multiline
comment
*/

// Define a student object
let student = {
    name: "John Doe",
    phoneNumber: "1234567890",
    marks: {
        math: 85,
        science: 90,
        english: 88
    }
};

// Display student details
console.log("Student Name:", student.name);
console.log("Phone Number:", student.phoneNumber);
console.log("Marks:", student.marks);
