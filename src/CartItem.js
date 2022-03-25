import React from "react";

const CartItem = (props) => {
  const { title, price, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt="" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs. {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>

        <div className="cart-item-actions">
          <img
            className="action-icons"
            alt="increase"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            className="action-icons"
            alt="decrease"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            className="action-icons"
            alt="delete"
            src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
