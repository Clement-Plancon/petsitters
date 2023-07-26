"use client";
import Image from "next/image";
import icon_satisfait from "../../../public/Icon/sourire.png";
import icon_animaux from "../../../public/Icon/pattes.png";
import icon_xp from "../../../public/Icon/bouclier.png";
import { Container } from "react-bootstrap";

export default function RehassuranceBar() {
  return (
    <section className="rehassurance-bar">
      <Container>
        <h2 className="title">
          Rencontrez des gardiens qui traiteront vos animaux de compagnie comme
          des membres de la famille
        </h2>
        <div className="content-rehassurance">
          <div className="item">
            <Image
              src={icon_satisfait}
              alt={""}
              className="icon_rehassurance_bar"
            />
            <span className="key-number">98%</span>
            <p>de taux de satisfaction *</p>
          </div>
          <div className="item">
            <Image
              src={icon_animaux}
              alt={""}
              className="icon_rehassurance_bar"
            />
            <span className="key-number">+ de 150 000</span>
            <p>animaux gardés</p>
          </div>
          <div className="item">
            <Image src={icon_xp} alt={""} className="icon_rehassurance_bar" />
            <span className="key-number">12 ans</span>
            <p>d'expérience</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
