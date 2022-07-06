import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout'

import styles from '../styles/Chart.module.css'

const Chart = ({chart, updateQuantity, deleteProduct}) => {
    const [total, setTotal] = useState(0)

    useEffect(()=> {
        const totalCalc = chart.reduce((total, product) => total + (product.quantity * product.price), 0)
        setTotal(totalCalc)
    }, [chart])
    return (
        <Layout>
            <h1 className='heading'>Carrito</h1>
            <main className={`${styles.contenido} contenedor`}>
                <div className={styles.chart}>
                    <h2>Artículos</h2>
                    {chart.length === 0 ? '' : (
                        chart.map(product => (
                            <div key={product._id} className={styles.product}>
                                <div>
                                    <Image layout='responsive' width={250} height={480} src={product.image} alt={product.name}/>
                                </div>
                                <div>
                                    <p className={styles.name}>{product.name}</p>
                                    <div className={styles.quantity}>
                                        <p >Cantidad:</p>
                                        <select
                                            value={product.quantity}
                                            className={styles.select}
                                            onChange={e => updateQuantity({
                                                quantity: e.target.value,
                                                id: product._id
                                            })}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                        </select>
                                    </div>
                                    <p className={styles.price}>$ <span>{product.price}</span></p>
                                    <p className={styles.subtotal}>Subtotal: <span>${product.price * product.quantity}</span></p>
                                </div>
                                <button
                                    type='button'
                                    className={styles.delete}
                                    onClick={e => deleteProduct(product._id)}
                                >X</button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resume}>
                    <h3>Resumen del pedido</h3>
                    {total > 0 ? (
                        <>
                            <p>Resumen del pedido</p>
                            <p>Total a pagar: ${total}</p>
                        </>
                    ) : (<p>No hay productos en el carrito</p>)}
                </div>
            </main>
        </Layout>
    );
};

export default Chart;