import React from 'react'
import DropdownItem from '../dropdown-item/dropdown-item.component';
import { RiArrowDropDownLine } from "react-icons/ri";
import './dropdown.styles.scss'
function Dropdown({ items ,title }) {
    return (
        <div className='dropdown-container'>
            <span className='dropdown-list-title' >{title}<RiArrowDropDownLine size={30} /></span>
            <ul className='dropdown-list-container'>
                {items.map((item, index) =>
                    <DropdownItem item={item} key={index} />
                )}
            </ul>
        </div>
    );
}

export default Dropdown