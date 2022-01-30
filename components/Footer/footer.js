
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

const footer = () => {
let currentYear = new Date().getFullYear()
  return <div>
      <footer className={styles.footer}>
    <a
    href=""
    rel="noopener noreferrer">
    Powered by{' '}
    <span className={styles.logo}>
        <Image src="/logo.jpg" alt="fsmutimeer" width={72} height={16} />
    </span>
</a>

<p>{currentYear}</p>
</footer>
  </div>;
};

export default footer;



