"use client";
import Image from "next/image";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Link from "next/link";
import img_form from "../../../public/Images/devenir-petsitter.jpg";
import jwtDecode from "jwt-decode"; // Import jwt-decode library
import { adminCredentials } from "../credentials";

export default function Connexion() {
  const [isPetsitter, setIsPetsitter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const firstName = formData.get("firstName") as string;
    const password = formData.get("password") as string;

    try {
          // Vérifier si l'utilisateur est l'administrateur
          const isAdmin = firstName === adminCredentials.username && password === adminCredentials.password;

          // Déterminer la route appropriée en fonction de l'état de la case à cocher et de l'identité de l'utilisateur
          let loginRoute = "/auth/login/user";
          if (isPetsitter) {
            loginRoute = "/auth/login/petsitter";
          } else if (isAdmin) {
            const adminId = `${Date.now()}-${Math.random()}`;
            localStorage.setItem("userId", adminId);
            window.location.href = `/admin?adminId=${adminId}`;
          }
    

      const response = await fetch(`http://localhost:3001${loginRoute}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, password }),
      });

      if (response.ok) {
        // Récupérer le token de la réponse
        const token = await response.text();

        // Utiliser jwt-decode pour extraire le payload du token
        const decodedToken: { sub: number; firstName: string } = jwtDecode(token);

        // Extraire l'ID de l'utilisateur du payload du token
        const userId = decodedToken.sub;

        // Stocker le token et l'ID de l'utilisateur dans le stockage local (localStorage)
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userId", userId.toString());

       // Rediriger l'utilisateur vers la page de profil appropriée après la connexion
      if (isPetsitter) {
        window.location.href = "/profil_petsitter";
      } else {
        window.location.href = "/profil_user";
      }
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
                    Mot de passe oublié ? <Link href={"/mdpoublie"}>Cliquez ici</Link>
                  </span>
                </Form.Group>
                <Form.Group controlId="isPetsitter" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Je suis un petsitter"
                    checked={isPetsitter}
                    onChange={(e) => setIsPetsitter(e.target.checked)}
                  />
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
