
import Image from 'next/image';

const footer = () => {
let currentYear = new Date().getFullYear()
  return <div>
      <footer >
    <a
    href=""
    rel="noopener noreferrer">
    Powered by{' '}
    <span>
        <Image src="/logo.jpg" alt="fsmutimeer" width={72} height={16} />
    </span>
</a>

<p>{currentYear}</p>
</footer>
  </div>;
};

export default footer;



