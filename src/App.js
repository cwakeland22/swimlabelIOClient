import React, { useState, useEffect } from "react";
import "./App.css";






function postIm(i,s) {

  fetch("https://swim-io.herokuapp.com/post", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      im_name: i,
      stroke: s
    })
  })




}


/*class App extends React.Component {

  

  render () {
    
    let mess;
    if (true) {
      mess = <OutOfImages num = {1}/>;
    }

    return (
      <div>
        {mess}
      </div>
    )
  }


}*/


function App() {
  
  const [imgtitle, setMessage] = useState("https://s3.us-east-2.amazonaws.com/swimlabel.io/loadingGif/loading-gif.gif");
  const [count, setCount] = useState(0);
  const [outIm, setOut] = useState(false);






  //const [outIm, setIm] = useState(false);
  
  useEffect(() => {
    fetch("https://swim-io.herokuapp.com/")  
      .then((res) => res.json())
      .then(function(data) {
        setOut(data.outOfIm)
        setMessage(data.imPath)
      });
      
      
      //, (data) => setOut(data.outOfIm));   
      
      
  }, []);


  const upIm = async () => {
  
    const response = await fetch('https://swim-io.herokuapp.com/');
    const data = await response.json();
    console.log(data.outOfIm);
    if (data.outOfIm) {
      console.log('OUT OF IMAGES2');
  
      //return (<h1>Out of Images!2</h1>);
      setOut(true)
      setCount(69)
      
    } else {
    //document.getElementById('Image').src = data.imPath
    setMessage(data.imPath)
    }

  };
    //upIm();
    if (!outIm) {

    return (
      <div className="App">
        
        <img src={imgtitle} alt='test' id = 'Image'></img>
        
      <div className="Buttons">
        <button className = "button-free" type="submit" onClick={() => {
          postIm(document.getElementById("Image").src,0);
          upIm();
          setCount(count+1);
          }}>
            Free
            </button>
            <button className = "button-back" type="submit" onClick={() => {
          postIm(document.getElementById("Image").src,1);
          upIm();
          setCount(count+1);
          }}>
            Back
            </button>
            <button className = "button-breast" type="submit" onClick={() => {
          postIm(document.getElementById("Image").src,2);
          upIm();
          setCount(count+1);
          }}>
            Breast
            </button>
            <button className = "button-fly" type="submit" onClick={() => {
          postIm(document.getElementById("Image").src,3);
          upIm();
          setCount(count+1);
          }}>
            Fly
            </button>
            <div>
            <button className = "button-unsure" type="submit" onClick={() => {
          postIm(document.getElementById("Image").src,4);
          upIm();
          setCount(count+1);
          }}>
            Not Swimming/Unsure
            </button>

            </div>
            
            
      <h1>You've labeled {count} images</h1>
      </div>
      </div>
      
    );
        } else {
          return (<h1>Out of images, either add more yourself or wait for Clark to add more!</h1>)
        }
  
}

export default App