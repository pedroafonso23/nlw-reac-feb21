import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallangesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/pedroafonso23.png" alt="Pedro Afonso" />
            <div>
                <strong>Pedro Afonso</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}