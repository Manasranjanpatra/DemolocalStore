import React, { useRef, useState } from "react";
import "./productUpdate.css";
import Nav from "../narbar/Nav";
import Sitebar from "../sitebar/Sitebar";

const Updateproduct = () => {
  const useImg=useRef();
  const [image,setImage]=useState();
  const handelImagechange=(e)=>{
    const file=e.target.files[0];

    if(file){

      const imageUrl =URL.createObjectURL(file);
      setImage(imageUrl)
    }

  }
  return (
    <div>
      <Nav />
      <div className="mainpu">
        <Sitebar/>

        <div className="fm">
          <div className="ucontent1  brw">
            <h3>General information</h3>

            <div>
              <h5>Producxt Name</h5>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Inforformation ...."
              />
            </div>
            <div>
              <h5>Description</h5>
              <textarea name="" id="large"></textarea>
            </div>
          </div>
          <div className="ucontent2 brw">
            <h3>Prices</h3>
            <div>
              <h5>Base Price</h5>
              <input type="text" name="" id="" placeholder="price...." />
            </div>
            <div>
              <div className="twop">
                <div>
                  <h5>Discount Percentage (%)</h5>
                  <input type="text" name="" id="" placeholder="percentage...." />
                </div>
                <div>
                  <h5> Select Discount Type</h5>
                  <select name="" id="">
                    <option value="">Select a discount type</option>
                    <option value="">Second</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="ucontent3 brw">
            <h3>Quantity</h3>
            <div className="threep">
              <div>
                <h4> SKU</h4>
                <input type="text" name="" id="" placeholder="Enter sku...." />
              </div>
              <div>
                <h4>Barcode</h4>
                <input type="text" name="" id="" placeholder="Enter barcode...." />
              </div>
              <div>
                <h4>Quantity</h4>
                <input
                  type="text"
                  name=""
                  id=""
                placeholder="Enter quantity"
                />
              </div>
            </div>
          </div>
          <div className="ucontent4 brw">
            <h3>Variation</h3>
            <div>
              <div className="twop">
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Variation Type"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="SKU variation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sl">
          <div className="slcontainer brw">
            <h3>Product media</h3>
            <div>
              <h5>Photo product</h5>
              <div className="img">
                <input type="file" name="" id="inputimg"   onChange={handelImagechange} ref={useImg} />
                {
                  image?<img src={image}  id="realimg1" onClick={()=>useImg.current.click()}  />
                  :   <img src='' alt="" onClick={() => useImg.current.click()} />
                }
                    {
                                    image ? "" : <i className="fa-solid fa-arrow-up-from-bracket" onClick={() => useImg.current.click()} id="realimg2"></i>
                                }
                              



                <button>Upload Image</button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="slcontainer brw">
            <h3>Category</h3>
            <div>
              <h5>Chose Category</h5>

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Inforformation ...."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateproduct;
