"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Layout from "../Components/Laoyout";
import { Button, Container, Form } from "react-bootstrap";
import img_form from "../../../public/Images/owner-high-five.jpg";

export default function MdpoublieReset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Ajouter ici la logique pour changer le mot de passe en envoyant une requête au backend avec le nouveau mot de passe et le token
      alert("Le mot de passe a été réinitialisé avec succès !");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la réinitialisation du mot de passe :", error);
    }
  };

  return (
    <Layout>
      <Container>
        <section className="mdpoublie-reset-section">
          <div className="mdpoublie-reset-content">
            <h2>Changer le mot de passe</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Nouveau mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Entrez votre nouveau mot de passe" value={password} onChange={handlePasswordChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirmez le nouveau mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Confirmez votre nouveau mot de passe" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Changer le mot de passe
              </Button>
            </Form>
          </div>
          <div className="mdpoublie-reset-image">
            <Image src={img_form} alt={""} />
          </div>
        </section>
      </Container>
    </Layout>
  );
}
