import './sidebar.styles.scss'

const Sidebar = ({ isOpened ,children}) => {
    return (
        <div className={`sidebar-container ${isOpened ? 'open' : 'close'}`}>
        {children}
        </div>
    );
}
export default Sidebar;