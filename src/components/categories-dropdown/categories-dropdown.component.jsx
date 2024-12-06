import './categories-dropdown.styles.scss'
import { categoriesData } from '../../categories-data';
import CategoryDropdown from '../category-dropdown/category-dropdown.component';
import { useNavigationStore } from '../../stores/navigation.store';
import { useShallow } from 'zustand/shallow';
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { useEffect } from 'react';
const CategoriesDropdown = () => {
    const { categoriesDropdownIsOpened, setCategoriesDropdownIsOpened } = useNavigationStore(useShallow((state) => ({
        categoriesDropdownIsOpened: state.categoriesDropdownIsOpened,
        setCategoriesDropdownIsOpened: state.setCategoriesDropdownIsOpened,
    })));
    useEffect(() => {

        const closeHandler = (event) => {
            //! it shows the path of clicked elements 
            const path = event.composedPath();
            const categoriesIcon = path.find(element =>
                element.classList && (element.classList.contains('categories-dropdown-container') || element.classList.contains('category-dropdown-container'))
            );
            if (categoriesIcon === undefined) {
                setCategoriesDropdownIsOpened(false)
            }

        }
        document.body.addEventListener('click', closeHandler);
        return () => document.body.removeEventListener('click', closeHandler)
            ;
    }, [setCategoriesDropdownIsOpened]);


    const categoriesOpenedHandler = () => {
        setCategoriesDropdownIsOpened(!categoriesDropdownIsOpened)
    }
    return (
        <div className='categories-dropdown-container'>
            <div className="categories-dropdown-title" onClick={categoriesOpenedHandler}>
                <TbCategory size={25} className='categories-logo'/>
                <span>Categories</span>
                <RiArrowDropDownLine size={25} className='categories-dropdown-icon' />
            </div>
            <div className={`categories-dropdown-content ${categoriesDropdownIsOpened ? 'opened' : 'closed'}`}>
                {categoriesData.map((category) =>
                (
                    <CategoryDropdown key={category.id} category={category} />
                )
                )}
            </div>
        </div>
    );
}
export default CategoriesDropdown;