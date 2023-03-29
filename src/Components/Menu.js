import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
// import Garri from "../Assets/Garri&Okrrrrro.png";
import Garri from "../Assets/Garri&Okrrrrro.jpg";

// import { useReactToPrint } from "react-to-print";
// import { items } from '../data';
// import { ComponentToPrint } from "../components/ComponentToPrint";
import MainLayout from "./layouts/MainLayout";

function Menu() {
  const items = [
    {
      id: 120,
      name: "Garri",
      price: "200",
      image: `${Garri}`,
    },
    {
      id: 123,
      name: "orange",
      price: "75",
      image:
        "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg",
    },
    {
      id: 131,
      name: "Milk",
      price: "150",
      image:
        "https://cdn.pixabay.com/photo/2018/03/16/16/42/milk-3231772_960_720.jpg",
    },
    {
      id: 132,
      name: "Ice Cream",
      price: "180",
      image:
        "https://cdn.pixabay.com/photo/2016/12/26/16/09/bowl-1932375_960_720.jpg",
    },
    {
      id: 133,
      name: "Salmon",
      price: "100",
      image:
        "https://cdn.pixabay.com/photo/2021/01/05/23/18/salmon-5892659_960_720.jpg",
    },
    {
      id: 134,
      name: "Watermelon",
      price: "165",
      image:
        "https://cdn.pixabay.com/photo/2015/09/27/18/18/watermelons-961128_960_720.jpg",
    },
    {
      id: 135,
      name: "Potato",
      price: "162",
      image:
        "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg",
    },
  ];

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const toastOptions = {
    autoClose: 400,
    pauseOnHover: true,
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    // const result = await axios.get('products');
    // setProducts(await result.data);
    // const result = await axios.get('products');
    setProducts(items);
    console.log(products);

    setIsLoading(false);
  };

  const addProductToCart = async (product) => {
    // check if the adding product exist
    let findProductInCart = await cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);
      toast(`Added ${newItem.name} to cart`, toastOptions);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
      toast(`Added ₦{product.name} to cart`, toastOptions);
    }
  };

  const removeProduct = async (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

 

 

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((icart) => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-8">
          {isLoading ? (
            "Loading"
          ) : (
            <div className="row">
              {products.map((product, key) => (
                <div key={key} className="col-lg-4 mb-4">
                  <div
                    className="menu-item px-3 text-center border"
                    onClick={() => addProductToCart(product)}
                  >
                    <p>{product.name}</p>
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.name}
                    />
                    <button type="button" class="btnAddToCart btn-primary">
                      <span class="cart-label">Add to Cart</span>
                      <i class="fas fa-shopping-cart cart-icon"></i>
                    </button>

                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <div style={{ display: "none" }}>
            {/* <ComponentToPrint
              cart={cart}
              totalAmount={totalAmount}
              ref={componentRef}
            /> */}
          </div>
          <div className="table-responsive bg-dark">
            <table className="table table-responsive table-dark table-hover">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Total</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {cart
                  ? cart.map((cartProduct, key) => (
                      <tr key={key}>
                        <td>{cartProduct.id}</td>
                        <td>{cartProduct.name}</td>
                        <td>{cartProduct.price}</td>
                        <td>{cartProduct.quantity}</td>
                        <td>{cartProduct.totalAmount}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeProduct(cartProduct)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  : "No Item in Cart"}
              </tbody>
            </table>
            <h2 className="px-2 text-white">Total Amount: ₦{totalAmount}</h2>
          </div>

          <div className="mt-3">
            {totalAmount !== 0 ? (
              <div>
                <button className="btn btn-primary">
                  Pay Now
                </button>
              </div>
            ) : (
              "Please add a product to the cart"
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Menu;
