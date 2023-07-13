import { createContext, useContext, useReducer, useState } from "react"; 
import Fakestoreapi from "../sevices/fakeapi";


const Cart = createContext();

function Context({children}){
    
    const product = Fakestoreapi.fetchallproduct()
    const[cart,setcart]=useState([])
    
    function Addcart(prod){
        setcart([...cart,{prod,qty:1,tp:prod.price},])   
    }
    function Removecart(id){
        const newcart = cart.filter((p)=>p.prod.id!==id)
        setcart(newcart)
        
    }
    function changequntity(id){
      const qty= cart.filter((f)=>f.prod.id===id?(f.qty=f.qty+1,f.tp=f.prod.price*f.qty):f.qty=f.qty)
      
      setcart(qty)
    }
    function changequntityminus(id){
        const qty1= cart.filter((f)=>f.prod.id===id?(f.qty=f.qty-1,f.tp=f.prod.price*f.qty):f.qty=f.qty)
        
        setcart(qty1)
      }
    return (
        <Cart.Provider value={{Addcart,cart,Removecart,changequntity,changequntityminus}}>
         {children}
        </Cart.Provider>
    )
}
 
export default Context;

export function Cartstate(){
    return useContext(Cart)
}