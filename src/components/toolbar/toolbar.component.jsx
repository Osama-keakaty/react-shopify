import './toolbar.styles.scss'
import user from '../../assets/user.png'
import cart from '../../assets/cart.png'
import SearchBox from '../search-box/search-box.component'
import { useCartStore } from '../../stores/cart.store'
import { useShallow } from 'zustand/shallow'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import Sidebar from '../sidebar/sidebar.component'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Toolbar = () => {
    const { isOpened, setIsOpened } = useCartStore(useShallow((state) => ({
        isOpened: state.isOpened,
        setIsOpened: state.setIsOpened
    })))

    useEffect(() => {

        const closeHandler = (event) => {
            //! it shows the path of clicked elements 
            const path = event.composedPath();
            const toolbarIcon = path.find(element =>
                element.classList && (element.classList.contains('toolbar-icon') || element.classList.contains('sidebar-container'))
            );
            if (toolbarIcon === undefined) {
                setIsOpened(false)
            }

        }
        document.body.addEventListener('click', closeHandler);
        return () => document.body.removeEventListener('click', closeHandler)
            ;
    }, [setIsOpened]);
    return (
        <div className="toolbar-container">
            <div className="sidbar">
                <Sidebar isOpened={isOpened} children={<h1>hey</h1>}/>
            </div>
            <Link to={'/'} className="logo-container" >
                <CrwnLogo/>
            </Link>
            <div className="search-box">
                <SearchBox />
            </div>
            <div className="toolbar-icons">
                <Link className="toolbar-icon" to={'/auth'}>
                    <img src={user} alt="" />
                </Link>
                <div className="toolbar-icon" onClick={() => setIsOpened(!isOpened)}>
                    <img src={cart} alt="" />
                </div>
            </div>
        </div>
    )



}

export default Toolbar;