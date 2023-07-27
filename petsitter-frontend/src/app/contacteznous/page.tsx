"use client";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Image from "next/image";
import Hero from "../Components/Hero";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Envoyer les données du formulaire au serveur
      const response = await fetch("http://localhost:3001/email/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          telephone,
          objet,
          message,
        }),
      });

      if (response.ok) {
        // Vider le formulaire et afficher le message de succès
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
        setObjet("");
        setMessage("");
        setSuccessMessage("Votre message a été envoyé avec succès !");
        setErrorMessage("");
      } else {
        // Afficher le message d'erreur si la requête a échoué
        setErrorMessage("Une erreur s'est produite lors de l'envoi du message.");
        setSuccessMessage("");
      }
    } catch (error) {
      // Afficher le message d'erreur s'il y a une erreur lors de l'envoi
      setErrorMessage("Une erreur s'est produite lors de l'envoi du message.");
      setSuccessMessage("");
    }
  };

  return (
    <Layout>
      <Hero />
      <Container className="contact-container">
        <h1>CONTACTEZ-NOUS POUR LA GARDE DE VOS ANIMAUX</h1>
        <p>
          Besoin de conseils pour la garde de votre animal ? Une question sur le
          petsitting ? Une équipe de professionnels vous répond.
        </p>
        <p className="required-message">
          Tous les champs marqués d'un astérisque (*) sont obligatoires.
        </p>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="nom">
                <Form.Label>Nom : *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="prenom">
                <Form.Label>Prénom : *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email : *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="telephone">
                <Form.Label>Numéro de téléphone : *</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Entrez votre numéro de téléphone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="objet">
            <Form.Label>Objet de votre demande : *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez l'objet de votre demande"
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Votre message : *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Entrez votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="submit-button">
            Envoyer
          </Button>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Form>
      </Container>
    </Layout>
  );
}
