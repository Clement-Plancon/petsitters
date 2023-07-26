"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import facebook from "../../../public/Icon/facebook.png";
import instagram from "../../../public/Icon/instagram.png";
import linkedin from "../../../public/Icon/linkedin.png";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="content-footer">
          <div className=" col-logo">
            <Image src={logo} alt={""} className="img-logo" />
          </div>
          <div className="col-text-footer">
            <div className="content-text">
              <div className="col1">
                <span className="title">Nos services</span>
                <ul>
                  <li>
                    <Link href={"#"}>Garde à votre domicile</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Famille d’accueil</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Promenades</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Visites quotidienne</Link>
                  </li>
                </ul>
              </div>
              <div className="col2">
                <span className="title">A propos</span>
                <ul>
                  <li>
                    <Link href={"#"}>Nous contacter</Link>
                  </li>
                  <li>
                    <Link href={"#"}>A propos de nous</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Mention légales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-social-network">
            <div className="icons_social">
              <ul className="list_icon">
                <li>
                  <Link href={"#"}>
                    <Image src={facebook} alt={""} className="icon" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Image src={instagram} alt={""} className="icon" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Image src={linkedin} alt={""} className="icon" />
                  </Link>
                </li>
              </ul>
            </div>

            <Button
              variant="primary"
              as="a"
              className="btn_petsitter"
              href={"#"}
            >
              S'inscrire en tant que petsiiter
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
