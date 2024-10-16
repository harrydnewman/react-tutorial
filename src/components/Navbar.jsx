import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <div className={styles.Navbar}>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
        </div>
    )
}