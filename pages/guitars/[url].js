import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitar.module.css'

const Product = ({ product, addToChart }) => {
    const [quantity, setQuantity] = useState(1)
    const { id, name, description, image, price } = product[0]

    const handleSubmit = e => {
        e.preventDefault()
        if(quantity < 1){
            alert('')
            return
        }
        addToChart({
            id,
            image: image.url,
            name,
            price,
            quantity
        })
    }

    return (
        <Layout
            page={`Guitarra ${name}`}
        >
            <div className={styles.guitar}>
                <Image
                    layout="responsive"
                    width={180}
                    height={350}
                    src={image.url}
                    alt={`Guitar image ${name}`}
                    priority='true'
                />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label>Cantidad:</label>

                        <select
                            value={quantity}
                            onChange={e => setQuantity(parseInt(e.target.value))}
                        >
                            <option value='0'>--Seleccione--</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                        </select>

                        <input 
                            type='submit' 
                            value='Agregar al carrito'
                        />
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps({ query: { url } }) {
    const productUrl = `${process.env.API_URL}/guitars?url=${url}`
    const response = await fetch(productUrl)
    const result = await response.json()

    return {
        props: {
            product: result
        }
    }
}

export default Product;