import { Link } from "react-router-dom";
import "./product.css"
import Chart from "../../Components/charts/Chart";
import { productData } from "../../dummyData";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newProduct">
             <button className="productAddButton">Create</button> 
          </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="./Image/An1.jpeg" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales</span>
                      <span className="productInfoValue">$1,230</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
}
