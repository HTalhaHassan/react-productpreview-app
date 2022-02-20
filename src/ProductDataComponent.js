import React from "react";
import classes from './App.module.css'

const ProductDataComponent=(props)=>{

    const coloroptions=props.data.colorOptions.map((item,pos)=>{
        const classarr=[classes.Productimage];
        if(pos===props.position){
            classarr.push(classes.Selectedproductimage);
        }
        return(
            <img src={item.imageUrl} key={pos} alt={item.styleName} className={classarr.join(' ')} onClick={()=>props.onColorOptionClick(pos)} />
        )
    });

    const features=props.data.featureList.map((item,pos)=>{
        const classarr=[classes.Featureitem];
        if(pos===1 && props.heartbeat){
            classarr.push(classes.Selectedfeatureitem);
        }else if(pos===0 && !props.heartbeat){
            classarr.push(classes.Selectedfeatureitem);
        }
        return(
            <button className={classarr.join(' ')} key={pos} onClick={()=>props.onfeatureitemclick(pos)}>{item}</button>
        )
    })
    return(    
        <div className={classes.Productdata}>

          <h1 className={classes.Producttitle}>{props.data.title}</h1>
          <p className={classes.Productdescription}>{props.data.description}</p>

          <h3 className={classes.Selectcolortitle}>Select Color:</h3>
          <div>
              {coloroptions}
          </div>

          <h3 className={classes.Selectcolortitle}>Features:</h3>
          <div>
              {features}
          </div>

          <button className={classes.Buynow}>Buy Now</button>

        </div>
    )
}

export default ProductDataComponent;