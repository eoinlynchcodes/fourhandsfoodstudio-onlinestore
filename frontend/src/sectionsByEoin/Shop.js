import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function Shop(props){
    
    const [searchKeyword, setSearchKeyword] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const category = props.match.params.id ? props.match.params.id : "";
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts(category));
  
      return () => {
        //
      };
    }, [category]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(listProducts(category, searchKeyword, sortOrder));
    };

    return (
        <div>
      <section id="shop" className="homepagebox">
            <div className="coloredBox violet">
              <h2>Products</h2>
            </div>
            <div className="white">
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <ul className="products removeBullets">
                  {products.map((product) => (
                    <li key={product._id}>
                      {console.log(product)}
                      <div className="product">
                        <Link to={"/product/" + product._id}>
                          <img className="product-image" src={product.image} />
                        </Link>
                        <div className="productDetail">
                          <Link to={"/product/" + product._id}>
                            {product.name}
                          </Link>
                        </div>
                        <div className="productDetail">€{product.price}</div>
                        <Link to={"/product/" + product._id}>
                          <div className="curiousButton">Curious?</div>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <hr className="bottomHR"/>
          </section>
        </div>
    );
}

export default Shop;
