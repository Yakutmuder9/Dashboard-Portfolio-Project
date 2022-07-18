import React, { useState, useEffect } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Auth/firebase/firebase";

const Stripe = ({ TotalPrice }) => {
  const [user] = useAuthState(auth);
  const [cart, setCart] = useState([]);
  const [courseEnrolled, setCourseEnrolled] = useState([]);
  const [getCart, setGetCart] = useState([]);
  const [userChacker, setUserChacker] = useState();

  useEffect(() => {
    fetch("http://localhost:3500/courseEnrolled")
      .then((res) => res.json())
      .then((data) => {
        setCourseEnrolled(data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`http://localhost:3500/cart`)
      .then((res) => res.json())
      .then((data) => {
        setGetCart(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  // const newPostCourse = [...new Set([...courseEnrolled, ...getCart])];
  console.log([...getCart])
  // const extractedCourse = newPostCourse.substring(1, newPostCourse.length - 1);
  // console.log("New Array" , extractedCourse)


//   var A = [{}]; 
//   var B = {}; 
//   A = [{
//         "Name": "TEST",
//         "deviceId": "",
//         "CartId": "",
//         "timestamp": 1383197265540,
//         "FOOD": [],
//         "City": "LONDON CA"
//      }]
// B = A[0]; console.log(B)


  // const tmpStr = `[
  //   {
  //     Name: "TEST",
  //     deviceId: "",
  //     CartId: "",
  //     timestamp: 1383197265540,
  //     FOOD: [],
  //     City: "LONDON CA",
  //   },
  // ]`;
  // var newStr = tmpStr.substring(1, tmpStr.length - 1);
  // console.log(newStr)

  const removeItem = () => {
    // console.log(...newPostCourse)
    // const putData = async ( ) =>{
    //   const response = await fetch('http://localhost:3500/courseEnrolled', {
    //       method: 'POST', 
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(...newPostCourse)
    //   });
    //  const data = await response.json( ); 
    //   console.log(data);     
    //   setCourseEnrolled(data); };


    fetch("http://localhost:3500/courseEnrolled", {
      method: "POST",
      body: JSON.stringify({
        getCart
         
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourseEnrolled( data);
        // setCourseEnrolled((item)=> [...item, data]);
      })
      .catch((err) => {
        console.log(err);
      });

    for (let i = 0; i < 25; i++) {
      // fetch(`http://localhost:3500/cart/${i}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setGetCart(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // fetch(`http://localhost:3500/courseEnrolled`, {
      //   method: "PUT",
      //   body:
      //   // JSON.stringify(
      //     ({...newPostCourse}),
      //     // { id: getCart.id,
      //     // titel: getCart.titel,
      //     // dicription: getCart.dicription,
      //     // url: getCart.url,
      //     // price: getCart.price,}
      //   // ),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // }).then((res) => {
      //     if (res.status !== 201) {
      //       return;
      //     } else {
      //       return res.json();
      //     }
      //   }).then((data) => {setCourseEnrolled((item) => [...item, data]);
      //   }).catch((err) => {
      //     console.log(err);
      //   });
      // fetch(`http://localhost:3500/cart/${i}`, {
      //   method: "DELETE",
      // })
      //   .then((res) => {
      //     if (res.status !== 200) {
      //       return;
      //     } else {
      //       setCart(
      //         cart.filter((user) => {
      //           return user.id !== i;
      //         })
      //       );
      //       return setTimeout(() => window.location.reload(), 500);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
    return setTimeout(() => window.location.reload(), 1000);
  };

  const handleToken = (token) => {
    fetch("/payment/payed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, TotalPrice }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  return (
    <>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
        token={handleToken}
        name=""
        panelLabel={`Comfirm and Pay`}
        currency="USD"
        amount={TotalPrice * 100}
        className="w-100 h-100 m-0 "
      ></StripeCheckout>
      <button className="mt-3" onClick={() => removeItem()}>
        clear
      </button>
    </>
  );
};
export default Stripe;
