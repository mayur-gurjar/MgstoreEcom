

const Fakestoreapi = {
 fetchallproduct: async ()=>{
   const data =  await fetch('https://fakestoreapi.com/products')
   const result= await data.json(); 
       return result
    
   }
  


 ,
 fetchproductbyid: async (prodid)=>{
    const data = await fetch(`https://fakestoreapi.com/products/${prodid}`);
    const result = await data.json(); 
        return result

 },
 fetchproductbysearch: async (query)=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result.filter((product)=>product.category.toLowerCase().includes(query))
 }
}
export default Fakestoreapi;