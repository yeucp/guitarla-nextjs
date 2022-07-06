import styles from '../styles/Course.module.css'

const Course = ({course}) => {
    const {title, description, image} = course
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className="heading">{title}</h2>
                    <p className={styles.text}>{description}</p>
                    <a className={styles.link} href="#">Más información</a>
                </div>
            </div>
            <style jsx>{`
                section{
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0/.8), rgb(0 0 0 /.7)), url(${image.url});
                    background-size: cover;
                    background-position: 50%;
                }
            `}</style>
        </section>
    );
};

export default Course;