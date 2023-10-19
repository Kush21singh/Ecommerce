import React ,{Fragment, useContext} from 'react';
import './Product.css';
import CartContext from '../Store/Cart-Context';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const cartElements = [

    {
        id:1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id:3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id:4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    
    ]

function Product() {
    
   const CartCtx= useContext(CartContext)
   const enterEmail=localStorage.getItem('email');
   const updatedEmail=enterEmail ?enterEmail.replace("@","").replace('.',''):'';
   
   async function  btnClickHandler(item){
    CartCtx.addItem({
        id:item.id,
        title:item.title,
        price:item.price,
        Image:item.imageUrl,
        amount:item.amount
    });
  toast.success("Item Added Successfully ")
    try{

        const response=await axios.post(`https://crudcrud.com/api/bf355cb525c64fbf859b1308cc5dcfec/${updatedEmail}`,item

        );
        console.log(response.data);
    } catch (error) {
      console.log("AxiosError:", error);
    }
    }


   
    

  return (
    <Fragment>
    <h2 style={{textAlign:"center",padding:"10px",marginTop:"10px"}}>Music</h2>
<div className='mainContent'>
    {cartElements.map((item)=>(
     <div className='Content' key={item.id}>
        <p style={{textAlign:"center",fontSize:"20px",fontWeight:"bold"}}>{item.title}</p>
        <div>
            <img src={item.imageUrl} alt=' bikash'/>
        </div>
        
        <div className='AddCart'>
            <span>${item.price}</span>
            <button className='btn1' onClick={()=>btnClickHandler(item)}>Add To Cart</button>
        </div>
     </div>
    ))}
</div>
<div className='btn3'>
    <button className='btn4' >Purchase</button>
</div>
<ToastContainer 
position="bottom-right"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
</Fragment>
  )
}

export default Product