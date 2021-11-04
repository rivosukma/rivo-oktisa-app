import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { getCategory } from "../../../services/category"

import './Category.css'

const Category = () => {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(async() => {
        setLoading(true)
        const arr = []
        const data = await getCategory()
        if(data?.status !== 200 && data?.response.length <= 0) return
        const parent = data?.response.filter(ctg => ctg.parent_id === 0 && ctg.status === 1)

        parent
        ?.map(sub => {
            let subArr = []
            const subFiltered = data?.response.filter(ctg => ctg.parent_id === sub.id)
            subArr = [...subFiltered]
            subArr.unshift(sub)
            arr.push(subArr)
        })
        setCategory(arr)
        setLoading(false)
    },[])

    return(
        <div className='category-container'>
            {loading
            ?   <div>Loading...</div>
            :   <>
                    {category.length > 0
                        &&  category
                            .map((lists, index) => {
                            return(
                                <div
                                    key={index}
                                    className='category-list'
                                >
                                    {lists[0].category_name}
                                    <div className='dropdown-content'>
                                        {lists?.length > 0
                                            &&  lists
                                                .map((list, index) => {
                                                    return(
                                                        <a
                                                            key={index}
                                                            href={`/${list.slug}`}
                                                        >
                                                            {list.category_name}
                                                        </a>
                                                    )
                                                })
                                        }
                                    </div>
                                </div>
                            )
                            })
                    }
                </>
            }
        </div>
    )
}
export default Category