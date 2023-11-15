import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { getProductAction } from "../../redux/actions/productAction";

const Product = (props) => {
  useEffect(()=>{
   
    return props.getProductAction();
  },[])
  return (
    
    <div style={{marginTop:"40px"}} className="allProduct">
      {console.log(props.products.products)}
      <div className="container">
        <h1>All product list</h1>
        <div className="row">
        {
          props.products.isLoading ? <h1>loading...</h1>  : props.products.products.length > 0 ?  props.products.products.map((item,index)=>(
            < ProductItem key={index} imageUrl={item.image} title={item.title} desc={item.description} />
          )) : <h1>Data tapilmadi</h1>
        }
         
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) =>{
  return{
    products: state.products,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps, {getProductAction}) (Product) ;
