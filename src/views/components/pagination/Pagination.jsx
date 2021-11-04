import { useState } from "react"

import './Pagination.css'

const Pagination = props => {
    const {
        next,
        prev,
        page
    } = props
    return(
        <div className='pag-container'>
            <button onClick={()=> prev()}>Prev</button>
            <p>{page}</p>
            <button onClick={()=> next()}>Next</button>
        </div>
    )
}
export default Pagination