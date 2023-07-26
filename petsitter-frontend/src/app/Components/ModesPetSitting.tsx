"use client";
import Image from "next/image";
import img_text from "../../../public/Images/section-289-1.png";
import icon_famille from "../../../public/Icon/rester-a-la-maison (1).png";
import icon_localisation from "../../../public/Icon/adresse-du-domicile.png";
import icon_visite from "../../../public/Icon/gamelle-pour-chien.png";
import icon_promenades from "../../../public/Icon/empreinte-de-patte1.png";
import { Container } from "react-bootstrap";

export default function ModesPetSitting() {
  return (
    <section className="modes_pet_sitting">
      <Container>
        <div className="content-modes">
          <div className="col-text">
            <h2>4 MODES DE GARDE POSSIBLE</h2>
            <ul className="list_mode">
              <li>
                <Image src={icon_famille} alt={""} className="icon_list" />
                <div className="text-mode">
                  <span className="mode">Chez une famille d'accueil :</span>
                  <p>
                    Faites garder votre animal en famille d'accueil et soyez sûr
                    qu’il passera des vacances entre de bonnes mains !
                  </p>
                </div>
              </li>
              <li>
                <Image src={icon_localisation} alt={""} className="icon_list" />
                <div className="text-mode">
                  <span className="mode">A votre domicile :</span>
                  <p>
                    Notre petsitter viendra habiter à votre domicile pendant
                    toute la durée de votre absence.
                  </p>
                </div>
              </li>
              <li>
                <Image src={icon_visite} alt={""} className="icon_list" />
                <div className="text-mode">
                  <span className="mode">Visite quotidienne de 1h :</span>
                  <p>
                    Une visite de chat quotidienne pour venir câliner, nourrir,
                    hydrater et divertir votre chat.
                  </p>
                </div>
              </li>
              <li>
                <Image src={icon_promenades} alt={""} className="icon_list" />
                <div className="text-mode">
                  <span className="mode">En promenade :</span>
                  <p>
                    Vous travaillez et vous habitez en grande ville? optez pour
                    des promenades de chien autour de chez vous.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-img-text">
            <Image src={img_text} alt={""} />
          </div>
        </div>
      </Container>
    </section>
  );
}
