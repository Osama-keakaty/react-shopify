import './search-box.styles.scss'
import search from '../../assets/search.png'
const SearchBox = ()=>{
return(
    <>
        <div className="search-box-container">
            <input type="text" placeholder='search ecommerce' spellCheck={false}/>
            <div className='search-icon'>
            <img src={search} alt="" />
            </div>
        </div>
    </>
)
}
export default SearchBox;