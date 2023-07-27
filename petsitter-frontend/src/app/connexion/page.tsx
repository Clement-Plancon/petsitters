"use client";
import Image from "next/image";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Link from "next/link";
import img_form from "../../../public/Images/devenir-petsitter.jpg";

export default function Connexion() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const firstName = formData.get("firstName") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("http://localhost:3001/auth/login/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, password }),
      });

      if (response.ok) {
        // Récupérer le token de la réponse
        const token = await response.text();
        
        // Stocker le token dans le stockage local (localStorage)
        localStorage.setItem("accessToken", token);

        // Rediriger l'utilisateur vers la page de profil après la connexion
        window.location.href = "/profil";
      } else {
        // Gérer les cas d'erreur
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
    }
  };

  return (
    <Layout>
      <section className="form-connexion">
        <div className="content-form">
          <div className="img-form">
            <div className="overlay" />
            <Image src={img_form} alt={""} />
          </div>
          <div className="form">
            <Container>
              <Form className="form-inputs" onSubmit={handleFormSubmit}>
                <div className="title-form">
                  <h1>Connexion</h1>
                  <span>
                    Vous ne possédez pas de compte ?{" "}
                    <Link href={"/inscription"}>Inscrivez-vous ici</Link>
                  </span>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Form.Group className="input" controlId="firstName">
                  <Form.Label>Identifiant</Form.Label>
                  <Form.Control type="text" placeholder="Identifiant" name="firstName"/>
                </Form.Group>
                <Form.Group className="input" controlId="password">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe"  name="password" />
                  <span className="forget_mdp">
                    Mot de passe oublié ? <Link href={"#"}>Cliquez ici</Link>
                  </span>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-connection">
                  Se connecter
                </Button>
              </Form>
            </Container>
          </div>
        </div>
      </section>
    </Layout>
  );
}
