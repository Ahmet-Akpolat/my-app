import React from 'react'
import { Link } from 'react-router-dom'
import { ProductModel } from '../../models/responses/ProductModel';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

type Props = {
    product: ProductModel;
}

const ProductCard = (props: Props) => {

  const dispatch = useDispatch();

  const addProductToCard = () => {
    dispatch(addToCart(props.product))
  }

  function truncateString(str:string, num:number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div key={props.product.id} className="card" style={{ minHeight:"55vh" , maxHeight: "55vh"}} >
      <img src={props.product.thumbnail} className="card-img-top" style={{height: "220px"}} alt={props.product.title} />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">  {truncateString(props.product.description, 50)}</p>
        <Link to={`/product/${props.product.id}`} className="btn btn-primary">Detail</Link>
        <button className='btn btn-danger'>Sil</button>
        <button onClick={addProductToCard} className='btn btn-success'>Sepete Ekle</button>
      </div>
    </div>
  )
}

export default ProductCard