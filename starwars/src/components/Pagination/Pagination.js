import React from 'react';

const Pagination = props => {
    return(
        <div className={`pagination-item page${props.index +1}`}>
            <p>{props.page}</p>
        </div>
    )
}

export default Pagination;