import Image from 'next/image';

import Layout from '../components/Layout'
import styles from '../styles/Us.module.css'

const Us = () => {
    return (
        <Layout
            page='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.content}>
                    <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Sobre nosotros' />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tempor mi. Suspendisse sagittis nunc sed enim gravida vehicula. Suspendisse at consectetur sapien. Curabitur porta arcu vel purus auctor, eget egestas neque efficitur. In hac habitasse platea dictumst. Proin a leo quis tellus fringilla efficitur et ac augue. Etiam ultricies leo quis justo pellentesque, ac facilisis mauris dapibus.
                        </p>
                        <p>
                            Suspendisse sit amet est eget mauris pretium lacinia non hendrerit velit. Integer at mauris vel velit commodo faucibus at quis ligula. Ut a diam id velit tempor aliquam ut quis erat. Morbi metus tellus, aliquam id accumsan vitae, volutpat eget augue. Proin vel massa a ligula varius ornare non in dolor. Etiam nec sem quis sapien tempor faucibus. Nunc ut odio ac enim eleifend laoreet in consectetur est. Etiam vitae diam et augue venenatis condimentum a porttitor nunc. Duis scelerisque, nibh id tincidunt facilisis, ligula magna facilisis sapien, vel bibendum quam risus sed turpis. Pellentesque at libero at ante volutpat condimentum nec quis nibh. Duis viverra tempus malesuada. Nulla at sollicitudin mi, ac lacinia urna. Nulla imperdiet consectetur massa ac maximus. Donec turpis nisi, condimentum quis euismod ut, tincidunt at elit. Cras semper, erat id tempus tempor, elit dui venenatis nunc, eget viverra lacus neque imperdiet nisi.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Us;