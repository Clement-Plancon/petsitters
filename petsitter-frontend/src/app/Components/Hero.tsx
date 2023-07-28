import Image from "next/image";
import img_hero from "../../../public/Images/hero_home.jpg";
import icon_loupe from "../../../public/Icon/loupe.png";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";


export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("searchQuery");

    // Redirect to the search_resultat page with the searchQuery as a query parameter
    window.location.href = `/search_resultat?search=${searchQuery}`;
  };

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
          <Form onSubmit={handleSubmitSearch}>
            <InputGroup className="mb-3">
              <Form.Control
                name="searchQuery"
                placeholder="recherchez un petsitter"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label=""
                aria-describedby="basic-addon2"
              />
              <Button type="submit" variant="primary" id="button-addon2" className="btn_search">
                <Image src={icon_loupe} alt={""} className="background_hero" />
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </div>
      <div className="overlay" />
      <Image src={img_hero} alt={""} className="background_hero" />
    </section>
  );
}
