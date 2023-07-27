"use client";
import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Image from "next/image";
import img_user from "../../../public/Images/CAP-698x700.jpg";
import { useState } from "react";

export default function ProfilUser() {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <Layout>
      <Container>
        <section className="profil-user">
          <Breadcrumb className="mt-5">
            <Breadcrumb.Item href="/">Acceuil</Breadcrumb.Item>
            <Breadcrumb.Item active>Mon profil</Breadcrumb.Item>
          </Breadcrumb>
          <div className="profil">
            <h1 className="name_user">Amélie Nems</h1>
            <div className="informations_profil">
              <Image src={img_user} alt={""} className="img-profil" />
              <div className="informations">
                <h2>Mes informations</h2>
                <div className="bloc-inputs">
                  <Form className="inputs">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control type="text" placeholder="Prénom" readOnly />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Nom</Form.Label>
                      <Form.Control type="text" placeholder="Nom" readOnly />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Adresse"
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ville</Form.Label>
                      <Form.Control type="text" placeholder="Ville" readOnly />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Code postal</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Code postal"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Date de naissance</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Date de naissance"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Asdresse mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Adresse mail"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="passeword"
                        placeholder="Mot de passe"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Numéro de téléphone"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Sélectionner une image de profil</Form.Label>
                      <Form.Control type="file" className="mb-3" />
                    </Form.Group>
                  </Form>
                  <Button variant="primary" className="btn-modify">
                    Modifier mes informations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
