import './dropdown-item.styles.scss'
const DropdownItem = ({ item }) => {
    return (
        <li className='dropdown-item-container'>
            <a href={item.url} target='_blank' rel='noreferrer'>{item.title}</a>
        </li>
    );
}

export default DropdownItem;