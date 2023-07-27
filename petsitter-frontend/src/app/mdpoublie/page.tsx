"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Layout from "../Components/Laoyout";
import { Button, Container, Form } from "react-bootstrap";
import img_form from "../../../public/Images/owner-high-five.jpg";

export default function Mdpoublie() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Envoyer une requête au backend pour demander la réinitialisation du mot de passe
      const response = await fetch("http://localhost:3001/email/mdpoublie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Un e-mail de réinitialisation a été envoyé à votre adresse e-mail.");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'envoi de la demande de réinitialisation du mot de passe :", error);
    }
  };

  return (
    <Layout>
      <Container>
        <section className="mdpoublie-section">
          <div className="mdpoublie-content">
            <h2>Mot de passe oublié</h2>
            <p>Veuillez saisir votre adresse e-mail pour réinitialiser votre mot de passe :</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre adresse e-mail" value={email} onChange={handleInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Réinitialiser le mot de passe
              </Button>
            </Form>
          </div>
          <div className="mdpoublie-image">
            <Image src={img_form} alt={""} />
          </div>
        </section>
      </Container>
    </Layout>
  );
}
