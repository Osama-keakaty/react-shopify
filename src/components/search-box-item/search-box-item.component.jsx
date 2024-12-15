import { useShallow } from 'zustand/shallow';
import { useNavigationStore } from '../../stores/navigation.store';
import './search-box-item.styles.scss'
import { useNavigate } from 'react-router-dom'
const SearchBoxItem = ({ item }) => {
    const  setSearchBoxIsOpened = useNavigationStore(useShallow(state => state.setSearchBoxIsOpened ))
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(`/${item.category}/${item.id}`)
        setSearchBoxIsOpened(false)
    }
    return (
        <div className='search-box-item-container' onClick={onClickHandler}>
            <span>{item.name}</span>

        </div>
    )
}
export default SearchBoxItem;
