"use client";
import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Image from "next/image";
import img_user from "../../../public/Images/CAP-698x700.jpg";
import { useState, useEffect } from "react";

export default function ProfilUser() {
  const [selectedFile, setSelectedFile] = useState();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Get the user ID from localStorage
        const userId = localStorage.getItem("userId");

        // Fetch user data using the user ID
        const response = await fetch(`http://localhost:3001/users/${userId}`);
        const data = await response.json();

        // Update the state with user data
        setUserData(data);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des informations de l'utilisateur :", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  // Function to handle changes in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        // Informations mises à jour avec succès
        alert("Vos informations ont été mises à jour avec succès !");
      } else {
        // Gérer les cas d'erreur
        const data = await response.json();
        console.error("Erreur lors de la mise à jour des informations :", data.message);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la mise à jour des informations :", error);
    }
  };

  return (
    <Layout>
      <Container>
        <section className="profil-user">
          <Breadcrumb className="mt-5">
            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
            <Breadcrumb.Item active>Mon profil</Breadcrumb.Item>
          </Breadcrumb>
          <div className="profil">
            <h1 className="name_user">{userData.firstName} {userData.lastName}</h1>
            <div className="informations_profil">
              <Image src={img_user} alt={""} className="img-profil" />
              <div className="informations">
                <h2>Mes informations</h2>
                <div className="bloc-inputs">
                  <Form className="inputs" onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Prénom"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nom"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Adresse"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="city">
                      <Form.Label>Ville</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ville"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postalCode">
                      <Form.Label>Code postal</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Code postal"
                        name="postalCode"
                        value={userData.postalCode}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dateOfBirth">
                      <Form.Label>Date de naissance</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Date de naissance"
                        name="dateOfBirth"
                        value={userData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Adresse mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Adresse mail"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Numéro de téléphone"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-modify">
                      Modifier mes informations
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
