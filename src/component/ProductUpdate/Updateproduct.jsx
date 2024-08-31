import React from "react";
import "./productUpdate.css";
import Nav from "../narbar/Nav";

const Updateproduct = () => {
  return (
    <div>
      <button className="backbut">⬅️</button>
    <Nav/>
      <div className="mainpu">

        <div className="fm">
          <div className="ucontent1  brw">
            <h3>General information</h3>

            <div>
              <h5>Producxt information</h5>
              <input type="text" name="" id="" placeholder="Enter Inforformation ...." />
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
              <input type="text" name="" id="" value="$ 118.89" />
            </div>
            <div>
              <div className="twop">
                <div>
                  <h5>Discount Percentage (%)</h5>
                  <input
                    type="text"
                    name=""
                    id=""
                    value="25%"
                  />
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
            <h3>Inventory</h3>
            <div className="threep">
              <div>
                <h4> SKU</h4>
                <input
                  type="text"
                  name=""
                  id=""
                  value="112322"
                />
              </div>
              <div>
                <h4>Barcode</h4>
                <input
                  type="text"
                  name=""
                  id=""
                  value="FFS221HSA"
                />
              </div>
              <div>
                <h4>Quantity</h4>
                <input
                  type="text"
                  name=""
                  id=""
                  value="Enter product quantity"
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
                <button>Add More Page</button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="slcontainer brw">
            <h3>Category</h3>
            <div>
              <h5>Product category</h5>
              <div className="hyr">
                <select name="" id="">
                  <option value="">Select  Category</option>
                  <option value="">Eletronics</option>
                  <option value="">Mobiles</option>
                  <option value="">computer</option>
                </select>
              </div>
            </div>
            <div>
              <h5>Product tags</h5>
              <div className="btg">
                <select name="" id="">
                  <option value="">Select  tags</option>
                  <option value="">Second</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
            </div>
          </div>
          <div className="slcontainer  hrw tpm">
            <h3>Product Tags</h3>
            <label htmlFor="">
              <input type="checkbox" name="" id="" /> Clothing
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" /> Toys
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" /> Internet of things
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" /> Books & stations
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" /> ant Supplies
            </label>
            <button>Select tags</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateproduct;
