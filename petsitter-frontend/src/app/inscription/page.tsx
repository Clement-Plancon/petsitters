"use client";
import Image from "next/image";
import Layout from "../Components/Laoyout";
import {
  Button,
  Container,
  Form,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import img_form from "../../../public/Images/owner-high-five.jpg";

export default function Inscription() {
  return (
    <Layout>
      <section className="formulaire-inscription">
        <div className="img-form">
          <Image src={img_form} alt={""} />
        </div>
        <div className="form">
          <Container>
            <Form className="inputs">
              <h1 className="title">Je souhaite m’inscrire</h1>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Prénom :</Form.Label>
                <Form.Control type="text" placeholder="Prénom" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Nom :</Form.Label>
                <Form.Control type="text" placeholder="Nom" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Adresse :</Form.Label>
                <Form.Control type="text" placeholder="Adresse" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Ville :</Form.Label>
                <Form.Control type="text" placeholder="Ville" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Code Postale :</Form.Label>
                <Form.Control type="text" placeholder="Code postale" />
              </Form.Group>
              <Form.Group
                className="input input-anniversaire"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date de naissance :</Form.Label>
                <Form.Control type="date" placeholder="JJ/MM/ANNEE" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Numéro :</Form.Label>
                <Form.Control type="tel" placeholder="Numéro de téléphone" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Permis de conduire :</Form.Label>
                <div key={`inline-radio`}>
                  <Form.Check
                    inline
                    label="Oui"
                    name="group1"
                    type="radio"
                    id={`inline-radio-2`}
                  />
                  <Form.Check
                    inline
                    label="Non"
                    name="group1"
                    type="radio"
                    id={`inline-radio-3`}
                  />
                </div>

                <Form.Label>Adresse mail :</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="input"
              >
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn-inscription"
              >
                S'inscrire
              </Button>
            </Form>
          </Container>
        </div>
      </section>
    </Layout>
  );
}
