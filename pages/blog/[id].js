import Image from 'next/image';
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

import {formatDate} from '../../helpers/index'

import styles from '../../styles/Entry.module.css'

const BlogEntry = ({ entry }) => {
    const { content, image, published_at, title } = entry
    return (
        <Layout
            page={title}
        >
            <main className='contenedor'>
                <h1 className='heading'>{title}</h1>
                <article className={styles.entry}>
                    <Image layout='responsive' width={800} height={600} src={image.url} alt={`Image ${title}`} />
                    <div className={styles.content}>
                        <p className={styles.date}>{formatDate(published_at)}</p>
                        <p className={styles.text}>{content}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const result = await response.json()

    const paths = result.map(item => ({
        params: { id: item._id }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { id } }) {
    const url = `${process.env.API_URL}/blogs/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return {
        props: {
            entry: result
        }
    }
}

/*export async function getServerSideProps({query: {id}}) {
    const url = `http://localhost:1337/blogs/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return {
        props: {
            entry: result
        }
    }
}*/

export default BlogEntry;