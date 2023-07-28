"use client";
import { useEffect } from "react"; // Import the useEffect hook
import Image from "next/image";
import logo from "../../../public/logo.png";
import facebook from "../../../public/Icon/facebook.png";
import instagram from "../../../public/Icon/instagram.png";
import linkedin from "../../../public/Icon/linkedin.png";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  // Function to load the reCAPTCHA script
  const loadReCaptchaScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  };

  // Load the reCAPTCHA script when the component mounts
  useEffect(() => {
    loadReCaptchaScript();
  }, []);

  // Function to handle form submission
  const onSubmit = () => {
    // Implement your form submission logic here
    console.log("Form submitted!");
  };

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

            {/* Google reCAPTCHA */}
            <button
              id="continueToSixthStep"
              type="submit"
              value="Envoyer"
              name="submit"
              className="g-recaptcha" // Add the class name for reCAPTCHA
              data-sitekey="6Le7b8MkAAAAAJZU9-W-gpfO8_K8YVlo_x_Bq-iV" // Replace this with your actual reCAPTCHA site key
              data-callback="onSubmit"
              data-action="submit"
              style={{ display: "none" }}
            >
              Envoyer le questionnaire
            </button >
          </div>
        </div>
      </Container>
    </footer>
  );
}
