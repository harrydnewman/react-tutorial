import styles from '../styles/Home.module.css'
import HelloHolder from '../components/HelloHolder';
import { useState } from 'react';
export default function Home() {
    const [hello, setHello] = useState("Hello")

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 10);
        setHello(helloInLanguages[randomNumber]);
    }



    const helloInLanguages = [
        "Hello",
        "Hola",
        "Bonjour",
        "Hallo",
        "Ciao",
        "Olá",
        "こんにちは",
        "안녕하세요",
        "你好",
        "Привет"
    ];

    return (
        <div className={styles.mainDiv}>
            <h1>This is the home page!</h1>
            <button className={styles.helloButton} onClick={handleClick}><HelloHolder hello={hello}/></button>
        </div>

    )
}