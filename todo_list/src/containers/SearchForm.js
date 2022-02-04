import React, { useContext } from 'react'
import { Context } from '../Context/ContextStates'

const SearchForm = () => {
    const {searchedData, setSearchedData} = useContext(Context)
    // Search tickets by every onclick
    const handleOnChange=(e)=>{
        setSearchedData(e.target.value)
    }
    return (
        <div className="input-group-sm">
            <div className="form-outline">
                <input id="search-input form1 " type="search" className="form-control" placeholder="Search" value={searchedData} onChange={(e)=>{handleOnChange(e)}}/>
            </div>
        </div>
    )
}

export default SearchForm
