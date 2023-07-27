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

/*   const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici le code pour envoyer les informations du formulaire au serveur
    // Par exemple, vous pouvez utiliser Axios pour effectuer une requête POST
  }; */

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
        <Form /* onSubmit={handleSubmit}  */className="contact-form">
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
        </Form>
      </Container>
    </Layout>
  );
}

