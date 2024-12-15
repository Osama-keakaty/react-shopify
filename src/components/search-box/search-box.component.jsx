import './search-box.styles.scss'
import search from '../../assets/search.png'
import { SHOP_DATA } from '../../shop-data.js'
import { useEffect, useState } from 'react';
import SearchBoxItem from '../search-box-item/search-box-item.component.jsx';
import { useNavigationStore } from '../../stores/navigation.store.js';
import { useShallow } from 'zustand/shallow';
const SearchBox = () => {
    const { searchBoxIsOpened, setSearchBoxIsOpened } = useNavigationStore(useShallow(state => ({
        searchBoxIsOpened: state.searchBoxIsOpened,
        setSearchBoxIsOpened: state.setSearchBoxIsOpened
    })))
    const [searchBoxValue, setSearchBoxValue] = useState('');
    const [shopData, setShopData] = useState([]);
    const [filteredShopData, setFilteredShopData] = useState(shopData);

    const onChangeHandler = (event) => {
        const boxValue = event.target.value
        if (boxValue.length) {
            setSearchBoxValue(boxValue)
        } else {
            setSearchBoxValue('')
        }

    }
    useEffect(() => {

        const closeHandler = (event) => {
            //! it shows the path of clicked elements 
            const path = event.composedPath();
            const categoriesIcon = path.find(element =>
                element.classList && element.classList.contains('search-box-container')
            );
            if (categoriesIcon === undefined) {
                setSearchBoxIsOpened(false)
            }

        }
        document.body.addEventListener('click', closeHandler);
        return () => document.body.removeEventListener('click', closeHandler)
            ;
    }, [setSearchBoxIsOpened]);


    useEffect(() => {
        const newMap = SHOP_DATA.map(section => section.items.map(item => item ? { ...item, category: section.title } : null))
        setShopData(newMap.flatMap(section => section))
    }, []);
    useEffect(() => {
        const newShopData = shopData.filter(item => item.name.toLowerCase().includes(searchBoxValue))
        setFilteredShopData(newShopData)
    }, [searchBoxValue, setFilteredShopData, shopData])
    console.log(searchBoxValue.length)
    return (
        <>
            <div className="search-box-container">
                <input type="text" placeholder='search ecommerce' spellCheck={false} onFocus={() => setSearchBoxIsOpened(true)} onChange={onChangeHandler} />
                <div className='search-icon'>
                    <img src={search} alt="" />
                    <div className={`search-box-list ${searchBoxValue.length > 0 && filteredShopData.length > 0 && searchBoxIsOpened ? 'search-box-active' : ''}`} >
                        {filteredShopData.map((filteredItem, index) => index < 6 &&
                            <div key={filteredItem.id}>
                                <SearchBoxItem  item={filteredItem} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchBox;