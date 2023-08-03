import React from "react";
import Item from "./atom/Item";
function Card() {
  const styles = {
    container: "bg-slate-200 md:w-1/3",
    productList: "",
    shippingFee: "",
    totalFee: "",
  };
  return (
    <div>
      <div className={styles.container}>
        <Item />
      </div>
    </div>
  );
}

export default Card;
