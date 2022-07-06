import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from '../styles/Header.module.css'

const Header = ({ guitar }) => {
    const { pathname } = useRouter()
    return (
        <header className={styles.header}>
            <div className='contenedor'>
                <div className={styles.bar}>
                    <div>
                        <Link href='/'>
                            <a>
                                <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
                            </a>
                        </Link>
                    </div>
                    <nav className={styles.navigation}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/us'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/store'>Tienda</Link>
                        <Link href='/chart'>
                            <a>
                                <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="Cariito" />
                            </a>
                        </Link>
                    </nav>
                </div>
                {guitar && (
                    <div className={styles.model}>
                        <h1>Modelo {guitar.name}</h1>
                        <p>{guitar.description}</p>
                        <p className={styles.price}>${guitar.price}</p>
                        <Link href={`/guitars/${guitar.url}`}>
                            <a className={styles.link}>
                                Ver producto
                            </a>
                        </Link>
                    </div>
                )}

                {pathname === '/' && (
                    <div className={styles.guitar}>
                        <Image layout="fixed" width={500} height={1200} src='/img/header_guitarra.png' alt='Imagen guitarra' />
                    </div>
                )
                }
            </div>
        </header>
    );
};

export default Header;