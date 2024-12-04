import './tab-bar.styles.scss'
import Dropdown from '../dropdown/dropdown.component';
import { dropdownData } from '../../dropdown-data';
import { RxHamburgerMenu } from "react-icons/rx";
import CategoriesDropdown from '../categories-dropdown/categories-dropdown.component';
import { useShallow } from 'zustand/shallow';
import Sidebar from '../sidebar/sidebar.component';
import { useEffect } from 'react';
import { useNavigationStore } from '../../stores/navigation.store';
const TabBar = () => {
    const { hamburgerMenuIsOpened, setHamburgerMenuIsOpened } = useNavigationStore(useShallow((state) => ({
        hamburgerMenuIsOpened: state.hamburgerMenuIsOpened,
        setHamburgerMenuIsOpened: state.setHamburgerMenuIsOpened
    })))

    useEffect(() => {
        const closeHandler = (event) => {
            //! it shows the path of clicked elements 
            const path = event.composedPath();
            const toolbarIcon = path.find(element =>
                element.classList && (element.classList.contains('hamburger-menu') || element.classList.contains('sidebar-container'))
            );
            if (toolbarIcon === undefined) {
                setHamburgerMenuIsOpened(false)
            }

        }
        document.body.addEventListener('click', closeHandler);
        return () => document.body.removeEventListener('click', closeHandler)
            ;
    }, [setHamburgerMenuIsOpened]);
    return (
        <div className='tab-bar-container'>
            <div className="categories-dropdown">
                <CategoriesDropdown />
            </div>
            <div className='dropdowns-container'>
                <Dropdown items={dropdownData} title={'Electronics'}/>
                <Dropdown items={dropdownData} title={'Kitchen'} />
                <Dropdown items={dropdownData} title={'Books'}/>
            </div>
            <div className="hamburger-menu" onClick={() => setHamburgerMenuIsOpened(!hamburgerMenuIsOpened)}>
                <RxHamburgerMenu />
            </div>
            <Sidebar isOpened={hamburgerMenuIsOpened} children={
                <div className='dropdowns'>
                    <Dropdown items={dropdownData} />
                    <hr />
                </div>
            } />
        </div>
    );
}
export default TabBar;