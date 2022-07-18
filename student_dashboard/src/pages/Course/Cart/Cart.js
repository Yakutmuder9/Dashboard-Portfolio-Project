import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../features/cart/cartSlice";
import { selectCart } from "../../../features/cart/cartSlice";
import { removeCartItem } from "../../../features/cart/cartSlice";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stripe from "../../../Auth/Strip/Stripe";

const Cart = () => {
  const cartItem = useSelector(selectCart);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [courseEnrolled, setCourseEnrolled] = useState([]);

  const notify = () => toast("Adding to the cart!");
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const removeItem = async (id) => {
    await fetch(`http://localhost:3500/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          window.location.reload();
          setCart(
            cart.filter((user) => {
              return user.id !== id;
            })
          );
          return setTimeout(() => window.location.reload(), 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
          return setTimeout(() => window.location.reload(), 5000);
  };

  const purchaseHandler = () => {
    console.log("name");
  };

  //   const purchaseHandlers = async () =>{
  //     const postsIdsArray = this.cartItem.map((post) => cartItem.id)
  //     postsIdsArray.forEach((id) => (this.deletePost(id),console.log("no")))
  //  }

  let TotalPrice = 0;
  for (let i = 0; i < cartItem.list.length; i++) {
    TotalPrice += cartItem.list[i].price;
  }
 

  return (
    <div className="w-100 vh-100 my-3">
      <h2>Shopping Cart {cartItem.list.length} items</h2>
      <Alert severity="info" className="mx-1 my-3">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <div className="row d-flex w-100 p-0 g-0 g-lg-3">
        <div className="col-12 col-lg-8">
          {cartItem &&
            cartItem.list.map((item, key) => {
              return (
                <Card
                  key={key}
                  className="mb-3 p-3 p-0 d-flex align-items-center justify-content-between"
                  sx={{ height: "220px", paddingRight: "0px" }}
                >
                  <div className="w-50 h-100 shadow d-flex align-items-center justify-content-between">
                    <img
                      src={item.url}
                      sx={{ height: "100px" }}
                      className="shadow rounded w-50 h-50 me-2"
                    />
                    <h6>{item.titel}</h6>
                  </div>

                  <div className="w-50 h-100 shadow d-flex flex-column py-4 align-items-center justify-content-between">
                    <div></div>
                    <div>
                      <h2>${item.price} </h2>
                      <p className="text-success">Free shipping</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-danger px-3 shadow"
                        onClick={() => {
                          removeItem(item.id);
                          notify();
                        }}
                      >
                        Remove
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>
        <Card
          className="col-12 col-lg-4  sticky-top mb-3 p-5  align-items-center justify-content-between"
          sx={{ height: "455px" }}
        >
          <form>
            <div className="form-group">
              <h3>Pay Here</h3>
              <div className="d-flex align-items-center justify-content-between">
                <h6>{cartItem.list.length}x items</h6>
                <h2> Total price ${TotalPrice}</h2>
              </div>

             
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>

          </form>
          <div className="vh-10 ">

              <Stripe TotalPrice={TotalPrice} className="vh-10"/>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <Card className=" d-flex p-2" sx={{ width: "100%", padding: 0, marginRight:"20px" }}>
<img src={item.url} className='w-50 p-3 rounded shadow me-2'/>
<div>Price</div>
</Card>
<Card className="" sx={{ width: "100%", padding: 0 }}>
ppurchase
</Card> */
}
