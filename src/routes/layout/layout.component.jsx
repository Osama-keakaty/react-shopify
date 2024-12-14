import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component'

const Layout = ({ children }) => {

    return (
        <>
            <Navigation />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;