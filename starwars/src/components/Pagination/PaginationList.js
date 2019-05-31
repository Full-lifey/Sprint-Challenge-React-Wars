import React from 'react';
import Pagination from './Pagination'

class PaginationList extends React.Component{
    constructor(){
        super();
        this.state = {
            currentPage: 1,
            pages: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render(){
        return(
            <div className='pagination-list'>
                {this.state.pages.map((eachPage, index) => {
                    return <Pagination page={eachPage} index={index}/>
                })}
            </div>
        )   
    }
}

export default PaginationList 