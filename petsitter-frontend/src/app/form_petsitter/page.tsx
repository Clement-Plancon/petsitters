"use client";
import Image from "next/image";
import Layout from "../Components/Laoyout";
import { Container, Form } from "react-bootstrap";
import img_test from "../../../public/Images/EYMM2XAV2ZKTU662PYK6L5B6BE.jpg";
import Stepper from "awesome-react-stepper";
import icon_famille from "../../../public/Icon/rester-a-la-maison (1).png";
import icon_promenade from "../../../public/Icon/empreinte-de-patte1.png";
import icon_domicile from "../../../public/Icon/adresse-du-domicile.png";
import icon_visites from "../../../public/Icon/gamelle-pour-chien.png";

export default function FormPetsitter() {
  return (
    <Layout>
      <section className="form_petsitter">
        <div className="img-form">
          <Image src={img_test} alt={""} />
        </div>
        <div className="stepper-form">
          <Container>
            <h1>Je souhaite devenir pet sitter</h1>
            <Stepper
              strokeColor="#17253975"
              fillStroke="#172539"
              activeColor="#172539"
              activeProgressBorder="2px solid #17253975"
              submitBtn={<button className="stepperBtn">Valider</button>}
              continueBtn={<button className="stepperBtn">Suivant</button>}
              backBtn={<button className="stepperBtn">Précédant</button>}
              //   onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
            >
              <div className="stepperSubDiv">
                <Form className="form">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Prénom :</Form.Label>
                    <Form.Control
                      type="text"
                      name=""
                      value=""
                      placeholder="Prénom"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      name=""
                      value=""
                      placeholder="Nom"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control
                      type="text"
                      name=""
                      value=""
                      placeholder="Adresse"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                      type="text"
                      name=""
                      value=""
                      placeholder="Ville"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Code postal</Form.Label>
                    <Form.Control
                      type="number"
                      name=""
                      value=""
                      placeholder="Code postal"
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
                        // onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Non"
                        name="drivingLicense"
                        type="radio"
                        id={`inline-radio-3`}
                        value="Non"
                        // onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Date de naissance</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="JJ/MM/ANNEE"
                      name="dateOfBirth"
                      value=""
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Numpéro</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Numéro de téléphone"
                      name=""
                      value=""
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Numéro de téléphone"
                      name=""
                      value=""
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Mot de passe"
                      name=""
                      value=""
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="stepperSubDiv">
                <div className="cards-besoin">
                  <h2>Services :</h2>
                  <div className="cards">
                    <Form className="card">
                      <Image
                        src={icon_famille}
                        alt={""}
                        className="icon-card"
                      />
                      <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={"default"}
                        label={"Chez une famille d'accueil"}
                      />
                    </Form>
                    <Form className="card">
                      <Image
                        src={icon_promenade}
                        alt={""}
                        className="icon-card"
                      />
                      <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={"default"}
                        label={"Promenades"}
                      />
                    </Form>
                    <Form className="card">
                      <Image
                        src={icon_domicile}
                        alt={""}
                        className="icon-card"
                      />
                      <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={"default"}
                        label={"A votre domicile"}
                      />
                    </Form>
                    <Form className="card">
                      <Image
                        src={icon_visites}
                        alt={""}
                        className="icon-card"
                      />
                      <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={"default"}
                        label={"Visites quotidienne"}
                      />
                    </Form>
                  </div>
                </div>
              </div>
              <div className="stepperSubDiv">
                <div className="zone">
                  <h2 className="mt-3">Zone d'activité autour de chez vous</h2>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Distance (en km)</Form.Label>
                      <Form.Control
                        type="text"
                        name=""
                        value=""
                        placeholder="distance en km"
                      />
                      <Form.Text muted>Exemple : 15/km</Form.Text>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Stepper>
          </Container>
        </div>
      </section>
    </Layout>
  );
}
