import GuitarList from '../components/GuitarList';
import Layout from '../components/Layout'

const Store = ({guitars}) => {
    return (
        <Layout
            page='Tienda virtual'
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra colección </h1>
                <GuitarList
                    guitars={guitars}
                />
            </main>
        </Layout>
    );
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitars`
    const response  = await fetch(url)
    const result = await response.json()
    return {
        props: {
            guitars: result
        }
    }
}

export default Store;