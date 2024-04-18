import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios'
function ModalSection({price}) {
  
  const handleCheckoutAndOrder = (e) => {
    e.preventDefault();
    checkoutHandler(); // Call checkoutHandler
    handleOrder(e); // Call handleOrder
  };
  

  const checkoutHandler = async (id) => {
    const res = await axios.get("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline! Failed to load...");
    }

    var options = {
      key: "rzp_test_1sh4xAWBK0C6e5", // Enter the Key ID generated from the Dashboard
      amount: price* 100,
      currency: "INR",
      name: "FitClub",
      description: "Thank you so much for helping",
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      prefill: {
        email: "trishit456@gmail.com",
        contact: +919477704221,
      },

      handler: function (response) {
        
        //console.log(response);
        setAmt(null);
       
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  const handleOrder = (e)=>{
    e.preventDefault();
    if(!orderDetails.fullName ||
        !orderDetails.address ||
        !orderDetails.mobile ||
        !orderDetails.pinCode
        )
        return toast.error("Please fill all the fields")
    else{
        //toast.success("order successfull")
        onCloseModal()
    }
  }









    const [openModal, setOpenModal] = useState(false);
  const [orderDetails,setOrderDetails] = useState({
    fullName:'',
    address:'',
    pinCode:'',
    mobile:'',
  });

  const handleChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value
    });
   // console.log(orderDetails)
  };

  
  

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails('');
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}
      className='w-full'
      >Checkout</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your Full Name" />
              </div>
              <TextInput
                
                name='fullName'
                value={orderDetails.fullName}
                onChange={handleChange}
                required
              />

            </div>



            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your Full Address" />
              </div>
              <TextInput
                
                name='address'
                value={orderDetails.address}
                onChange={handleChange }
                required
              />
            </div>


            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your Pin Number" />
              </div>
              <TextInput
                
                name='pinCode'
                value={orderDetails.pinCode}
                onChange={handleChange}
                required
              />
             </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your Mobile Number" />
              </div>
              <TextInput
                
                name='mobile'
                value={orderDetails.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
  <Button className='w-full' onClick={handleCheckoutAndOrder}>
    Order Now
  </Button>
</div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSection;
