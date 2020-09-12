//Object property shorthand
const name = 'Samir'
const userAge = 25

const user={
    name,
    age: userAge,
    location:"India"
}

console.log(user)

// value should be same as attribute
// then if we only give the name it will
// be equivalent to the name : name

// Object destructuring

const product ={
    label:'Red Notebook',
    price:3,
    stock:201,
    salePrice: undefined
}
const {label,stock,rating=5} = product
console.log(label)
console.log(stock)
console.log(rating)
//There is no attribute named rating in the product object, so we need to
// can define it while destructuring 
// renaming objects 

const {price:productPrice} = product

console.log(productPrice)

const transaction = (type,{label,stock})=>{
    console.log(type,label, stock)
}
transaction('order',product)