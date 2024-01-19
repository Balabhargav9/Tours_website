import Testimonial from './Testimonial.js';
import reviews from './data.js';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h1 style={{display:"flex",justifyContent:"center"}}>Our Testimonal</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Testimonial reviews={reviews}/>
        </div>
      </div>
    </div>
  );
}

export default App;
