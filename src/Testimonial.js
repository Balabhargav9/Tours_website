import Card from './Card.js';
import { useState} from 'react';
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';
function Testimonial(props){
    let [index,setIndex]=useState(0);
    let reviews=props.reviews;
    function handleLeft(){
if(index-1<0){
   setIndex(reviews.length-1);
}
else{
    setIndex(index-1);
}
    }
    function handleRight(){
if(index+1>reviews.length){
    setIndex(0);
}
else{
    setIndex(index+1);
}
    }
    function supriseMe(){

        let num =Math.random(Math.floor()*reviews.length);
        console.log(num);
setIndex(num);

    }
    
return(
    <div style={{height:"650px",width:"700px",display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<Card review={reviews[index]}></Card>

<div style={{height:"50px",width:"600px",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
    <button style={{height:"30px",width:"50px",backgroundColor:"#865fcf",border:'1px solid #865fcf',borderRadius:"9px",display:"none"}} onClick={handleRight}>
<FiChevronLeft/>
</button>
<button style={{height:"30px",width:"50px",backgroundColor:"#865fcf",border:'1px solid #865fcf',borderRadius:"9px"}} onClick={handleLeft}>
<FiChevronRight />
</button>
</div>



    </div>
)
}
export default Testimonial;