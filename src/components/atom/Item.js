import React from "react";
import myImage from "../../assets/photo1.png";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
function Item() {
  const styles = {
    container: "flex items-center",

    detailProduct: "p-2",
    nameProduct: "font-Montserrat text-inherit",
    price: "flex justify-between",
    realPrice: "line-through",
    finalPrice: "text-xl text-[#F2994A]",
    amountProduct: "",
    contentQuantityAmount: "flex py-4",
  };
  return (
    <div className={styles.container}>
     

        <img className ="rounded-2xl p-2" src={myImage} alt=""></img>
      
    
      <div className={styles.detailProduct}>
        <div className={styles.nameProduct}>Vintage Backbag</div>
        <div className={styles.price}>
          <div className={styles.finalPrice}>54.99$</div>
          <div className={styles.realPrice}>94.99$</div>
        </div>
        
   
      <div className={styles.contentQuantityAmount}>


      <HiMinus className="item-center"
        // Add your className and onClick handler here
      />
      <input
        className="border text-center w-1/3 rounded-lg"
        type="number" // Use "text" if you want the number to be non-editable
        readOnly // Add this attribute to make the input read-only
        value={3} // Set the value to "3" or the dynamic value you want to display
      />
      <HiPlus className="item-center"
        // Add your className and onClick handler here
      />
      </div>
      </div>
    </div>
  );
}

export default Item;
