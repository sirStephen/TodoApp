import React from 'react';

export default class Search extends React.Component {
    render() {
        return(
            <div className='p2 search'>
                <input
                    className='search-input'
                    type="text"
                    value={this.props.search}
                    placeholder='Search Tasks'
                    onChange={this.props.onHandleSearch}
                />
            </div>
        )
    }
}