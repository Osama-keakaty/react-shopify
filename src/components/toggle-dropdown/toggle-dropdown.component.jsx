import './toggle-dropdown.styles.scss'
import { useEffect } from 'react';
const ToggleDropdown = ({ items, setStore, storeValue, toggleValue, setToggleValue ,className }) => {
    useEffect(() => {

        const closeHandler = (event) => {
            //! it shows the path of clicked elements 
            const path = event.composedPath();
            const toolbarIcon = path.find(element =>
                element.classList && (element.classList.contains(className) )
            );
            if (toolbarIcon === undefined) {
                setToggleValue(false)
            }

        }
        document.body.addEventListener('click', closeHandler);
        return () => document.body.removeEventListener('click', closeHandler)
            ;
    }, [setToggleValue,className]);
    
    return (
        <div className={` toggle-dropdown-container ${className}`}>
            <div className='toggle-dropdown-title' onClick={() => setToggleValue(!toggleValue)}>
                <span >{storeValue.value}</span>
                <img src={storeValue.img} alt="" />
            </div>
            <div className={`toggle-dropdown-content ${toggleValue ? "opened" : "closed"}`}>
                {items.map(item =>
                    <div key={item.id} className="toggle-dropdown-item" onClick={() => { setToggleValue(!toggleValue); setStore(item) }}>
                        <span>{item.value}</span>
                        {item.img && <img src={item.img} alt="" />}
                    </div>
                )}
            </div>

        </div>
    )
}
export default ToggleDropdown;