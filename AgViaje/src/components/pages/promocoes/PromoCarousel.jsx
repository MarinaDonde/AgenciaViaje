import { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight }
  from 'react-icons/fa'
import styles from '../destinos/Carousel.module.css';

export default function Carousel() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/promocoes.json').then((response) => response.json()).then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if (!data || !data.length) return null;

  return (
    <section className={styles.section_carousel}>
      <h1 className={styles.title}>Confira:</h1>
      <div className={styles.container_carousel}>
        <div className={styles.carousel} ref={carousel} >

          {data.map((item) => {
            const { id, name, days, info, promoPrice, oldPrice, image } = item;
            return (
              <div className={styles.item} key={id}>
                <div className={styles.image}>
                  <img src={image} alt={name} />
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.days}>{days}</span>
                  <span className={styles.info}>{info}</span>
                  <span className={styles.oldPrice}>R${oldPrice} </span>
                  <span className={styles.promoPrice}>R${promoPrice} </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <button onClick={handleLeftClick} ><FaChevronLeft /></button>
          <button onClick={handleRightClick} ><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );


}