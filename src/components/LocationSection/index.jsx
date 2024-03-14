import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section_padding">
      <div className="container">
        <div className={styles.map_title}>
          <h2 className="title md">{t("Local")}</h2>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <div className={styles.map}>
              <iframe
                title="Location Map"
                style={{ width: "100%", height: "400px", maxWidth: "100%" }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Curitiba+Bigorrilho+864&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <a href="https://online-timer.me/"></a>
              <br />
              <a href="https://online.stopwatch-timer.net/"></a>
              <br />
            </div>
            <style>{`
            .mapouter{display:flex; align-items:center;justify-content:center;width:100%;}
            .gmap_canvas{overflow: hidden;background: none !important}
          `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};
