import Guitar from "./Guitar";

import styles from '../styles/GuitarList.module.css'

const GuitarList = ({guitars}) => {
    return (
        <div className={styles.list}>
            {guitars.map(guitar => (
                <Guitar
                    key={guitar.url}
                    guitar={guitar}
                />
            ))}
        </div>
    );
};

export default GuitarList;