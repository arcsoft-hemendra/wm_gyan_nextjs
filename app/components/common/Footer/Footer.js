import React from 'react'
import style from './Footer.module.css';

function Footer() {
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
        <span style={{ color: "rgb(249, 99, 50)" }}>बनाओ </span>
        <span style={{ color: "rgb(255, 255, 255)" }}>अपनी </span>
        <span style={{ color: "rgb(18, 136, 7)" }}>पहचान</span>
      </p>
    </div>
  </div>
  <div className={style.bottomContent}>
    <p
      className="hide-m"
      style={{ flex: "1 1 0%", textAlign: "left", color: "white" }}
    >
      Aapki Digital Pehchan
    </p>
    <p className={style.footer_madeWithLove}>
      <span>Made with</span>
      <img
        src="https://www.workmob.com/static/media/heart.33403302.svg"
        alt="heart"
        width={12}
        height={12}
      />
      <span>in Bharat</span>
    </p>
    <p
      className="hide-m"
      style={{ flex: "1 1 0%", textAlign: "right", color: "white" }}
    >
      We can. India can.
    </p>
  </div>
</div>

  )
}

export default Footer