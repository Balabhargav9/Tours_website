
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
function Card(props){
let review = props.review;

return(<div style={{height:"550px",width:"600px",border:"2px solid black",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"50px",backgroundColor:"#865fcf"}}>
    
<div style={{height:"250px",width:"200px",display:"flex",flexDirection:"column",justifyContent:'center',backgroundColor:"white",borderRadius:"50%"}} >
    <img style={{height:"200px",width:"200px",borderRadius:"50%"}} src={review.image}  alt="bhargav"></img>
</div>

<div style={{height:"50px",width:"500px",display:"flex",justifyContent:"center",color:'white',fontSize:"25px",fontWeight:'bold',alignItems:"center"}}>
    <p>{review.name}</p>
</div>

<div style={{height:"50px",width:"500px",display:"flex",justifyContent:"center",color:'white',fontSize:"25px",fontWeight:'bold',alignItems:"center"}}>
    <p>{review.job}</p>
</div>

<div style={{height:"25px",width:"500px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <FaQuoteLeft/> 
</div>

<div style={{height:"100px",width:"500px",display:"flex",flexDirection:"column",overflow:"scroll",color:'white',fontSize:"25px",fontWeight:'bold',alignItems:"center"}}>
    {review.text}
</div>

<div style={{height:"25px",width:"500px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <FaQuoteRight/>
</div>


</div>)



}
export default Card;