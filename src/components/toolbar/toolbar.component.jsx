import './toolbar.styles.scss'
import user from '../../assets/user.png'
import cart from '../../assets/cart.png'
import SearchBox from '../search-box/search-box.component'
import { useCartStore } from '../../stores/cart.store'
import { useShallow } from 'zustand/shallow'
import { ReactComponent as ShopLogo } from '../../assets/shop-logo.svg'
import Sidebar from '../sidebar/sidebar.component'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SidebarCart from '../sidebar-cart/sidebar-cart.component'

const Toolbar = () => {
    const { cartIsOpened, setCartIsOpened,productNum } = useCartStore(useShallow((state) => ({
        cartIsOpened: state.cartIsOpened,
        setCartIsOpened: state.setCartIsOpened,
        productNum:state.productNum,
    })))
    useEffect(() => {

        const closeHandler = (event) => {
            //! it shows the path of clicked elements 
            const path = event.composedPath();
            const toolbarIcon = path.find(element =>
                element.classList && (element.classList.contains('toolbar-icon') || element.classList.contains('sidebar-container'))
            );
            if (toolbarIcon === undefined) {
                setCartIsOpened(false)
            }

        }
        document.body.addEventListener('click', closeHandler);
        return () => document.body.removeEventListener('click', closeHandler)
            ;
    }, [setCartIsOpened]);
    return (
        <div className="toolbar-container">
            <div className="sidbar">
                <Sidebar isOpened={cartIsOpened} children={<SidebarCart/>} />
            </div>
            <Link to={'/'} className="logo-container" >
                <ShopLogo />
                <h5>React <br />Shopify</h5>
            </Link>
            <div className="search-box">
                <SearchBox />
            </div>
            <div className="toolbar-icons">
                <Link className="toolbar-icon" to={'/auth'}>
                    <img src={user} alt="" />
                </Link>
                <div className="toolbar-icon" onClick={() => setCartIsOpened(!cartIsOpened)}>
                    <img src={cart} alt="" />
                    <span className='cart-items-count'>{productNum}</span>
                </div>
            </div>
        </div>
    )



}

export default Toolbar;