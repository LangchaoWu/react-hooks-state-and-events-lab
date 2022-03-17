import React,{useState} from "react";


function Item({ name, category }) {
  const [isInCart,setIsInCart]=useState(false);
  const ItemClass=isInCart? 'in-cart': '';
  const buttonClass=isInCart?'remove':'add'

  function handleClick(){
    setIsInCart(isInCart=>!isInCart)
  }
  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{isInCart? "Remove From Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
