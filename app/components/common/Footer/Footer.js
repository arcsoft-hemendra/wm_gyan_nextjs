import React from 'react'
import style from './Footer.module.css';

function Footer() {

  const heart = "https://www.workmob.com/static/media/heart.33403302.svg"

  return (
    <div className={style.HomePageFooter}>
  <div className={style.footerMainContainer}>
    <div className={style.footerMiddle}>
      <p className={style.footer_meriKahani}>
        <img
          src="/images/gyan_footer.png"
          alt="gyanmanch-footer"
        />
      </p>
      <p className={style.footer_celebrating} />
      <p className={style.footer_titleBox}>
        आओ हम सब मिलकर अपना ज्ञान बाँटें और भारत को विद्या, शिक्षा एवं संस्कृति
        के क्षेत्र में शिखर पर पहुँचाने में अपना योगदान दें। आपके शिक्षाप्रद
        वीडियो के माध्यम से भारतवासियों से जुड़ें और अपने व्यक्तिगत ब्रांड तथा
        स्किल इंडिया इनिशिएटिव को आगे बढ़ाएं। ज्ञान बाँट कर डिजिटल युग में अपनी
        एक नयी पहचान बनाएं।
      </p>
      <p className={style.footer_banaoApniPehchan}>
        <span className={style.orange}>बनाओ </span>
        <span className={style.white}>अपनी </span>
        <span className={style.green}>पहचान</span>
      </p>
    </div>
  </div>
  <div className={style.bottomContent}>
    <p
      className={`${style.footer_text} hide-m`} 
    >
      Aapki Digital Pehchan
    </p>
    <p className={style.footer_madeWithLove}>
      <span>Made with</span>
      <img
        src={heart}
        alt="heart"
        width={12}
        height={12}
      />
      <span>in Bharat</span>
    </p>
    <p
      className={`${style.footer_text} ${style.footer_align_right} hide-m`} 
    >
      We can. India can.
    </p>
  </div>
</div>

  )
}

export default Footer