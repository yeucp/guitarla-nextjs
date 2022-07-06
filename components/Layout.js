import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, page, guitar }) => {
    return (
        <div>
            <Head>
                <title>Guitar LA - {page}</title>
                <meta name="Guitar LA" description="Sitio de venta de guitarras" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            </Head>
            <Header 
                guitar={guitar}
            />
            {children}
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    guitar: null
}

export default Layout;