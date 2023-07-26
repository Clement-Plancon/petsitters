"use client";
import Image from "next/image";
import img_text from "../../../public/Images/dog and cat on bed.jpg";
import icon_approuver from "../../../public/Icon/approuver.png";
import { Container } from "react-bootstrap";

export default function Presentation() {
  return (
    <section className="presentation-company">
      <Container>
        <div className="content-presentation">
          <div className="col-img">
            <Image src={img_text} alt={""} />
          </div>
          <div className="text-presentation">
            <h2>GARDE ANIMAUX EN FAMILLE D'ACCUEIL</h2>
            <p>
              Mieux que la pension, la garde d'animaux en famille d'accueil est
              incontestablement le meilleur mode de garde pour nos chiens et
              chats. Ils ont besoins de présence, de confort, d'amour et nos
              220.000 familles d'accueil sur tout le territoire sont là pour
              leur en donner pendant votre absence.
            </p>
            <ul className="list-text">
              <li>
                <Image src={icon_approuver} alt={""} className="icon" />
                <span>
                  Tous les pet sitters font l'objet d'une vérification
                  d'identité
                </span>
              </li>
              <li>
                <Image src={icon_approuver} alt={""} className="icon" />
                <span>
                  Chaque pet sitter soumet un profil détaillé et des
                  renseignements personnels
                </span>
              </li>
              <li>
                <Image src={icon_approuver} alt={""} className="icon" />
                <span>
                  Chaque pet sitter a été approuvé par notre équipe d'experts
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
