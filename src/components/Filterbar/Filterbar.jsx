import "./Filterbar.css"
// import { useState } from "react";
function Filterbar(props) {
    function filterbyeprice(e) {
        props.onchangeorderfilter(e.target.value)
    }
    function filterbysize(e) {
        props.onchange_by_size(e.target.value)

    }
    return (
        <div className="filterbar">
            <div className="filteritems">
                <span>{props.dadaindex} Products</span>
                <div>
                    <label >Order </label>
                    <select onChange={filterbyeprice}>
                        <option id="Lowest" value='Lowest'>Lowest</option>
                        <option id="Highest" value='Highest'>Highest</option>
                    </select>
                </div>
                <div>
                    <label>Filter </label>
                    <select onChange={filterbysize} >
                        <option id="" value='ALL'>ALL</option>
                        <option id="" value='XS'>XS</option>
                        <option id="" value='S'>S</option>
                        <option id="" value='M'>M</option>
                        <option id="" value='L'>L</option>
                        <option id="" value='XL'>XL</option>
                        <option id="" value='XXL'>XXL</option>
                    </select>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}
export default Filterbar