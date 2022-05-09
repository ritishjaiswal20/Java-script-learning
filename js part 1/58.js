//sort method
    // sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  

let numbers=[10,1,2,31,123];
numbers.sort();
console.log(numbers)//it will print [1, 10, 123, 2, 31] 
// as sort method in js sort according to string (asciivalue use karke)

let names=["ritish","sachin","rahul","saurav","sourav"];
names.sort();
console.log(names)//it will print [ 'rahul', 'ritish', 'sachin', 'saurav', 'sourav' ]

//to sort the numbers we ccan use the follwoing way
const number= [10,1,2,31,123];
number.sort((a,b)=>a-b);
console.log(number)//it will print [1, 10, 123, 2, 31]

// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200
//else if negative same it means low number comes first then the large numbber


//example 

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

const lowTohigh=products.slice(0).sort((a,b)=>a.price-b.price);
console.log(lowTohigh)//it will print  
// 1: {productId: 1, produceName: 'p1', price: 300}
// 2: {productId: 5, produceName: 'p5', price: 500}
// 3: {productId: 2, produceName: 'p2', price: 3000}
// 4: {productId: 4, produceName: 'p4', price: 8000}
// 5: {productId: 3, produceName: 'p3', price: 200}
//and in this product object clone is made using slice method then it is sorted according to price

const highTolow=products.slice(0).sort((a,b)=>b.price-a.price)  
console.log(highTolow)//it will print as it is sorted in reverse order



