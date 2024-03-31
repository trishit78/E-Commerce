import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";

function AllProducts({AddToCart}) {
  //'https://dummyjson.com/products/categories'

//   https://dummyjson.com/products

  const [allProducts, setAllProducts] = useState([]);
  const [selectProduct,setSelectProduct] = useState("");

  const [all,setAll] = useState([]);
  const [showAllProducts,setShowAllProducts] = useState(true);


    useEffect(()=>{
        const AllProducts = async ()=>{
            const res = await axios("https://dummyjson.com/products");
            setAll(res.data.products);
        }
        AllProducts();
    },[]);

  useEffect(() => {
    const getAllProductsCategory = async () => {
      const res = await axios("https://dummyjson.com/products/categories");
      console.log(res);
      setAllProducts(res.data);
      console.log(allProducts);
    };
    getAllProductsCategory();
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
        if(selectProduct){

            const res = await axios(
                `https://dummyjson.com/products/category/${selectProduct}`
                );
                console.log(res.data.products);
                setProducts(res.data.products);
            }
    };
    getAllProducts();
  }, [selectProduct]);

  const filterProduct = (allProduct) =>{
        console.log(allProduct)
        setSelectProduct(allProduct);
        setShowAllProducts(false);
  }


  return (
    <>
      <>
        <div>
          <img
            src="https://synder.com/blog/wp-content/uploads/sites/5/2023/02/best-amazon-tools-for-sellers.jpg"
            className="h-full object-contain w-full"
            alt=""
          />
          <div className="w-full h-[126px] md:h-[390px] bg-black absolute top-0 left-0 opacity-[0.5] mt-[73px]" />
          <h2 className="absolute top-[15%] md:top-[50%] left-[10%] text-white font-semibold text-3xl md:text-6xl">
            All Products
          </h2>
        </div>

        {/* <div className="flex gap-3 flex-wrap">
            <select  onChange={(e)=>filterProduct(e.target.value)}>
                <option >
                    Filter By Category
                </option>
            
          {allProducts.map((allProduct, index) => (
            // <div className="" key={index}>
              {/* <button className="border bg-black text-white px-2 py-2 mt-5" onClick={()=>filterProduct(allProduct)} > 
                <option value={allProduct}>

                {allProduct}
                </option>
              {/* </button> 
            {/* </div> 
          ))}
        </select>
        </div> */}

<div className="flex gap-3 flex-wrap justify-center">
  <select onChange={(e) => filterProduct(e.target.value)}>
    <option value="">Filter By Category</option>
    {allProducts.map((allProduct, index) => (
      <option key={index} value={allProduct.id}>
        {allProduct} {/* Assuming 'name' is the property representing the category */}
      </option>
    ))}
  </select>
</div>

        <div className="flex">
          {products.map((item,index) => (
            <section className="text-gray-600 body-font " key={index}>
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="  p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.thumbnail}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Title : {item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Price : {item.price}
                      </h2>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Rating : {item.rating}
                      </h2>
                      <button className=" ml-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring:blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>AddToCart(item)} >
                        Add To Cart
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>



            {
                showAllProducts ==true && (
                    <div className="flex flex-wrap justify-center">
                {
                    all.map((allItem,index)=>(
                        <div  key={index}>
                            {/* <p>{allItem.price}</p> */}
                            <section className="text-gray-600 body-font ">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="  p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={allItem.thumbnail}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Title : {allItem.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Price : {allItem.price}
                      </h2>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Rating : {allItem.rating}
                      </h2>
                      <button className="ml-64 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring:blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>AddToCart(allItem)} >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
                            
                            </div>
                    )

                    )
                }
            </div>
                )
            }
            




      </>
    </>
  );
}

export default AllProducts;
