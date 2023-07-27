"use client";
import { useState } from "react";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Image from "next/image";
import img_petsitter from "../../../public/Images/log.png";

export default function Paiement() {
  // Données fictives pour le récapitulatif
  const petsitterInfo = {
    name: "Amélie Nems",
    animals: ["Chien", "Chat"],
    startDate: "2023-07-30",
    endDate: "2023-08-03",
    careMode: "Garde à domicile",
    dailyPrice: 30,
  };

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");

  /*  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Intégrer ici la logique de paiement avec un système de paiement tiers (Stripe, PayPal, etc.)
  }; */

  return (
    <Layout>
      <Container className="payment-container">
        {/* Récapitulatif fictif */}
        <h2>Récapitulatif</h2>
        <Card className="mb-4 recap-card">
          <Card.Body>
            <div className="recap-content">
              <Image
                src={img_petsitter}
                alt="Petsitter"
                width={80}
                height={80}
                className="rounded-circle petsitter-image"
              />
              <div className="petsitter-info">
                <h4>{petsitterInfo.name}</h4>
                <p className="animal-info">
                  Animaux à garder : {petsitterInfo.animals.join(", ")}
                </p>
                <p className="date-info">
                  Date de garde : du {petsitterInfo.startDate} au{" "}
                  {petsitterInfo.endDate}
                </p>
                <p className="care-mode-info">
                  Mode de garde choisi : {petsitterInfo.careMode}
                </p>
                <p className="price-info">
                  Prix journalier : {petsitterInfo.dailyPrice} €
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* Formulaire de paiement */}
        <h2>Formulaire de paiement</h2>
        <div className="payment-form">
          <Form>
            <Form.Group controlId="cardNumber" className="form-group">
              <Form.Label>Numéro de carte</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="cardName" className="form-group">
              <Form.Label>Titulaire de la carte</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="expiry" className="form-group">
                  <Form.Label>Date d'expiration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/AA"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="cvc" className="form-group">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    value={cvc}
                    onChange={(e) => setCVC(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="primary"
              className="payment-button" /* onClick={handlePaymentSubmit} */
            >
              Payer
            </Button>
          </Form>
        </div>
      </Container>
    </Layout>
  );
}
