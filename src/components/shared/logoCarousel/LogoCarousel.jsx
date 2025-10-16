import styles from './logoCarousel.module.css';
import img1 from './../../../assets/images/logo/logo1.png';
import img2 from './../../../assets/images/logo/logo2.png';
import img3 from './../../../assets/images/logo/logo3.png';
import img4 from './../../../assets/images/logo/logo4.png';
import img5 from './../../../assets/images/logo/logo5.png';
import img6 from './../../../assets/images/logo/logo6.png';
import img7 from './../../../assets/images/logo/logo7.png';

export const LogoCarousel = () => {
  const imgs = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className={styles.carousel}>
      <p>Trusted by the leaders</p>
      <div className={styles.track}>
        <div className={styles.group}>
          {imgs.map((img, i) => (
            <div key={`g1-${i}`} className={styles.img}>
              <img src={img} alt={`Logo ${i}`} />
            </div>
          ))}
        </div>
        <div className={styles.group}>
          {imgs.map((img, i) => (
            <div key={`g2-${i}`} className={styles.img}>
              <img src={img} alt={`Logo ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};