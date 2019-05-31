import React from 'react';

class Pagination extends React.Component{
    constructor(){
        super();
        this.state = {
            currentPage: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
}