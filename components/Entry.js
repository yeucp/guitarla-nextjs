import Link from 'next/link';
import Image from 'next/image';
import {formatDate} from '../helpers/index'

import styles from '../styles/Entry.module.css'

const Entry = ({ entry }) => {
    const { title, resume, image, published_at, id } = entry
    return (
        <article>
            <Image priority='true' layout='responsive' width={800} height={600} src={`${image.url}`} alt={`Image blog ${title}`}/>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>{formatDate(published_at)}</p>
                <p className={styles.resume}>{resume}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.link}>Leer entrada</a>
                </Link>
            </div>
        </article>
    );
};

export default Entry;