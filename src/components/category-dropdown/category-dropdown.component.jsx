import './category-dropdown.styles.scss'
import shoppingCart from '../../assets/shopping-cart.png'
import { useNavigationStore } from '../../stores/navigation.store';
import { useShallow } from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';
const CategoryDropdown = ({ category }) => {
    const navigate=useNavigate();
    const { setCategoriesDropdownIsOpened } = useNavigationStore(useShallow((state) => ({
        setCategoriesDropdownIsOpened: state.setCategoriesDropdownIsOpened,
    })));
    const categoryClickedHandler=()=>{
        setCategoriesDropdownIsOpened(false)
        navigate(category.title.toLowerCase())
    }
    return (
        <div className='category-dropdown-container' onClick={categoryClickedHandler}>
        <img src={shoppingCart} alt=""/>
            <span>{category.title}</span>
        </div>
    )
}
export default CategoryDropdown; 