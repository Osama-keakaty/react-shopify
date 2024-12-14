import './navigation.styles.scss'
import { Outlet } from 'react-router-dom'
import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import googleIcon from '../../assets/google.png'
import Arabic from '../../assets/ksa_flag.png'
import English from '../../assets/usa_flag.png'
import lightMode from '../../assets/light-mode.png'
import darkMode from '../../assets/dark-mode.png'
import { useNavigate } from 'react-router-dom'
import { useNavigationStore } from '../../stores/navigation.store'
import ToggleDropdown from '../toggle-dropdown/toggle-dropdown.component'
import Toolbar from '../toolbar/toolbar.component'
import { useShallow } from 'zustand/shallow'
import TabBar from '../tab-bar/tab-bar.component'

const Navigation = () => {
    const navigate = useNavigate();
    const { setDropdownTheme, dropdownTheme, setDropdownLanguage, dropdownLanguage, setLanguage, language, setMode, mode } = useNavigationStore(useShallow((state) => ({
        setLanguage: state.setLanguage,
        language: state.language,
        setMode: state.setMode,
        mode: state.mode,
        dropdownLanguage: state.dropdownLanguage,
        setDropdownLanguage: state.setDropdownLanguage,
        dropdownTheme: state.dropdownTheme,
        setDropdownTheme: state.setDropdownTheme,
    })))
    return (
        <div className='navigation-container'>
            <div className='header'>
                <span className='header-title' onClick={() => navigate('/')}>React Shopify</span>
                <div className='content-container'>
                    <ToggleDropdown items={[
                        {
                            id: 1,
                            value: "dark",
                            img: darkMode
                        },
                        {
                            id: 2,
                            value: "light",
                            img: lightMode
                        },
                    ]} setStore={setMode}
                        storeValue={mode}
                        setToggleValue={setDropdownTheme}
                        toggleValue={dropdownTheme}
                        className="theme"
                    />
                    <ToggleDropdown items={[
                        {
                            id: 1,
                            value: "Ar",
                            img: Arabic
                        },
                        {
                            id: 2,
                            value: "En",
                            img: English
                        },
                    ]}
                        setStore={setLanguage}
                        storeValue={language}
                        setToggleValue={setDropdownLanguage}
                        toggleValue={dropdownLanguage}
                        className='language'
                    />
                    <div className="nav-icons-container">
                        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'><img src={facebookIcon} alt="facebook" /></a>
                        <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>  <img src={instagramIcon} alt="instagram" /></a>
                        <a href="https://www.google.com" target='_blank' rel='noreferrer'><img src={googleIcon} alt="google" /></a>

                    </div>
                </div>
            </div>
            <div className="toolbar">
                <Toolbar />
            </div>
            <div className="tab-bar">
                <TabBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;