import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../../services/ProductService'

type Props = {}

const ProductDetail = (props: Props) => {

    // const location = useLocation();
    // useEffect(() => {
    //     let query = new URLSearchParams(location.search);
    //     console.log(query.get("id"));
    // }, [location] );

    const params = useParams<{id: string}>()
    useEffect(() => {
        if (params.id) {
            fetchDetails(params.id)
        .then(response => {
        })
        }
    }, [params.id])

    const fetchDetails = async (id:string) => {
      let service: ProductService = new ProductService();
        let response = await service.getById(parseInt(id))
        console.log(response)
    }

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail