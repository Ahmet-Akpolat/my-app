import { useEffect } from 'react'
import { ProductModel } from '../../models/responses/ProductModel'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/slices/productSlice'
import { AppDispatch } from '../../store/configureStore'

type Props = {}

const Homepage = (props: Props) => {

    const productState = useSelector((state:any) => state.product);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=> {
        dispatch(fetchProducts());
    },[dispatch])

  return (
    <div className='container'>
        <div className='row' >
            {productState.products.map((product:ProductModel) => (
                <div key={product.id} className='col-3 mt-3'>
                    <ProductCard product={product} ></ProductCard>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Homepage