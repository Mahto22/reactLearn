export default function Product(){
    //const products = ["Laptop","Phone","Modem","Computer","Phone"];
//     const products = [
//     {
//         id:1,name:"Laptop",price:500000
//     },
//     {
//         id:2,name:"Iphone",price:1500000
//     },
//     {
//         id:3,name:"SmartWatch",price:40000
//     },
//     {
//         id:4,name:"AC",price:48000
//     },
//     {
//         id:5,name:"Frezze",price:240000
//     }
// ]
//     const productList = products.map((product)=>(
//         <h3 key={product.id}>{product.id}. {product.name} : Rs.{product.price}/-</h3>
//     ));
//     return <div>
//         {productList}
//     </div>

const fruits = ["Apple","Orange","Mango"];
const fruitsList  = fruits.map((fruit,index)=>(
    //console.log(index);
    <h3 key={index}>{fruit}</h3>
));

return <div>{fruitsList}</div>
}