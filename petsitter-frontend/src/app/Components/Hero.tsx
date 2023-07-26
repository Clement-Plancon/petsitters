"use client";
import Image from "next/image";
import img_hero from "../../../public/Images/hero_home.jpg";
import icon_loupe from "../../../public/Icon/loupe.png";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content_hero">
        <Container>
          <h1 className="text_hero">
            Vous recherchez un pet-sitter près de chez vous ?
          </h1>
          <span className="text_hero sub-title">
            Pet-sitters, lieux et amis des animaux à proximité de votre
            location.
          </span>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="recherchez un petsitter"
              aria-label=""
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2" className="btn_search">
              <Image src={icon_loupe} alt={""} className="background_hero" />
            </Button>
          </InputGroup>
        </Container>
      </div>
      <div className="overlay" />
      <Image src={img_hero} alt={""} className="background_hero" />
    </section>
  );
}
