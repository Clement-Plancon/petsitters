"use client";
// Inscription.js (ou Inscription.jsx)

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Layout from "../Components/Laoyout";
import { Button, Container, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import img_form from "../../../public/Images/owner-high-five.jpg";

export default function Inscription() {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    drivingLicense: string;
    dateOfBirth: string;
    mail: string;
    phoneNumber: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    drivingLicense: "",
    dateOfBirth: "",
    mail: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Utilisateur inscrit avec succès !");
      } else {
        console.error("Échec de l'inscription de l'utilisateur.");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'inscription de l'utilisateur :", error);
    }
  };

  return (
    <Layout>
      <section className="formulaire-inscription">
        <div className="img-form">
          <Image src={img_form} alt={""} />
        </div>
        <div className="form">
          <Container>
            <Form className="inputs" onSubmit={handleFormSubmit}>
              <h1 className="title">Je souhaite m’inscrire</h1>
              <Form.Group controlId="firstName" className="input">
                <Form.Label>Prénom :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Prénom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="lastName" className="input">
                <Form.Label>Nom :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="address" className="input">
                <Form.Label>Adresse :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="city" className="input">
                <Form.Label>Ville :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ville"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="postalCode" className="input">
                <Form.Label>Code Postale :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Code postale"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="drivingLicense" className="input">
                <Form.Label>Permis de conduire :</Form.Label>
                <div key={`inline-radio`}>
                  <Form.Check
                    inline
                    label="Oui"
                    name="drivingLicense"
                    type="radio"
                    id={`inline-radio-2`}
                    value="Oui"
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Non"
                    name="drivingLicense"
                    type="radio"
                    id={`inline-radio-3`}
                    value="Non"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="dateOfBirth" className="input input-anniversaire">
                <Form.Label>Date de naissance :</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="JJ/MM/ANNEE"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber" className="input">
                <Form.Label>Numéro :</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Numéro de téléphone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="mail" className="input">
                <Form.Label>Adresse mail :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" className="input">
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-inscription">
                S'inscrire
              </Button>
            </Form>
          </Container>
        </div>
      </section>
    </Layout>
  );
}
