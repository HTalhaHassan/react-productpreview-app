import React,{useState} from 'react';
import ProductData from './ProductData';
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDataComponent from './ProductDataComponent';

function App() {
  const [productdata, updateproductdata] = useState(ProductData);
  const [currentimage,updatecurrentimage]=useState('https://imgur.com/iOeUBV7.png');
  const [position,updateposition]=useState(0);
  const [heartbeat,updateheartbeat]=useState(false);

  const onColorOptionClick=(pos)=>{
    let data=productdata.colorOptions[pos].imageUrl;
    updateposition(pos);
    updatecurrentimage(data);
  }

  const onfeatureitemclick=(pos)=>{
    if(pos===0){
      updateheartbeat(false);
    }else{
      updateheartbeat(true);
    }
  }

  return (
    <div className={classes.App}>
      <header>
        <nav className={classes.Topbar}> 
          <img src="Amazon.png" alt="Amazon Logo"/>
        </nav>
      </header>

      <div className={classes.Maincontainer}>

        <ProductPreview currentimage={currentimage} heartbeat={heartbeat}/>
        <ProductDataComponent data={productdata} onColorOptionClick={onColorOptionClick} position={position} onfeatureitemclick={onfeatureitemclick} heartbeat={heartbeat}/>

      </div>
    </div>
  );
}

export default App;
