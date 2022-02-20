import React from "react";
import classes from './App.module.css'

const ProductPreview=(props)=>{
    const currenthour=new Date().getHours() > 9 ? new Date().getHours() : '0'+ new Date().getHours();
  const minutes=new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes()
    return(
        <div className={classes.Productpreview}>
            <img src={props.currentimage}/>

            {
                props.heartbeat
                ? 
                    <div className={classes.Heartbeatsection}>
                    <img src="https://img.icons8.com/fluency/48/000000/like.png" alt='Heart Beat'/>
                    <p>78</p>
                    </div>
                :
                    <div className={classes.Timesection}>
                    <p>{`${currenthour}:${minutes}`}</p>
                    </div>
            }
            
        </div>
    )
}

export default ProductPreview;