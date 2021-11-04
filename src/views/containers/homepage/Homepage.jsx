import React, { useEffect, useState } from 'react'
import { getProduct } from '../../../services/products'
import Category from '../../components/category/Category'
import Pagination from '../../components/pagination/Pagination'

import './Homepage.css'

const ProductCard = React.lazy(() => import('../../components/productCard/ProductCard'))

const Homepage = props => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(8)
    const [loading, setLoading] = useState(false)
    const slug = props.match.params.slug

    useEffect(async() => {
        setLoading(true)
        const data = await getProduct({ 
            per_page: perPage, 
            page: page,
            category_name: slug || ''
        })
        if(data?.status !== 200) return
        setProducts(data?.response)
        setLoading(false)
    },[page, slug])

    const onPrevClick = () => {
        if(page <= 1) return
        setPage(page - 1)
    }
    const onNextClick = () => {
        if(page >= 50) return
        setPage(page + 1)
    }

    return(
        <div className='homepage-container'>
            {loading
            ? <div>Loading....</div>
                :<>
                    <Category />
                    <div className='productList-container'>
                        {products.length > 0
                            &&  products
                                .map((product, index) => {
                                return(
                                    <ProductCard
                                        id={product.id}
                                        key={index}
                                        imgSrc={product.images}
                                        name={product.product_name}
                                        price={product.price}
                                        discount={product.discount}
                                        city={product.city_name}
                                        seller={product.seller_name}
                                    />
                                )
                            })
                        }
                    </div>
                    <Pagination 
                        page={page}
                        prev={onPrevClick}
                        next={onNextClick}
                    />
                </>
            }
        </div>
    )
}
export default Homepage