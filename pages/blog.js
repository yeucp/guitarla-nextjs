import Layout from '../components/Layout'
import EntryList from '../components/EntryList';

const Blog = ({entries}) => {
    return (
        <Layout
            page='Blog'
        >
            <main className='contenedor'>
                <EntryList
                    entries={entries}
                />
            </main>
        </Layout>
    );
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            entries: result
        }
    }
} 

export default Blog;