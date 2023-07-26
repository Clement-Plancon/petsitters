"use client";
import Image from "next/image";
import { Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Link from "next/link";
import img_form from "../../../public/Images/devenir-petsitter.jpg";

export default function Connexion() {
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
              <Form className="form-inputs">
                <div className="title-form">
                  <h1>Connexion</h1>
                  <span>
                    Vous ne possédez pas de compte ?{" "}
                    <Link href={"#"}>Inscrivez-vous ici</Link>
                  </span>
                </div>
                <Form.Group
                  className="input"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Adresse mail</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="input" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Mot de passe
                  </Form.Label>
                  <Form.Control type="password" placeholder="Mot de passe" />
                  <span className="forget_mdp">
                    Mot de passe oubliée ? <Link href={"#"}>Cliquez ici</Link>
                  </span>
                </Form.Group>
                <Button variant="primary" className="btn-connection">
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
