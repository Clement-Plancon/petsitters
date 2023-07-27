"use client";

import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Image from "next/image";
import img_petsitter from "../../../public/Images/CAP-698x700.jpg";
import icon_domicile from "../../../public/Icon/adresse-du-domicile_vert.png";
import icon_profil from "../../../public/Icon/utilisateur.png";
import star from "../../../public/Icon/star.png";

export default function ProfilPetsitter() {
  return (
    <Layout>
      <Container>
        <section className="profil-petsitter">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Acceuil</Breadcrumb.Item>
            <Breadcrumb.Item active>Mon profil de petsitter</Breadcrumb.Item>
          </Breadcrumb>

          <div className="profil">
            <h1>Amélie Nems</h1>
            <div className="informations-petsitter">
              <div className="img-profil">
                <Image src={img_petsitter} alt={""} />
              </div>
              <div className="informations">
                <h2 className="mt-5">Mes informations</h2>
                <div className="bloc-inputs">
                  <Form className="inputs">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control type="text" placeholder="Prénom" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Nom</Form.Label>
                      <Form.Control type="text" placeholder="Nom" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control type="text" placeholder="Adresse" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ville</Form.Label>
                      <Form.Control type="text" placeholder="Ville" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Code postal</Form.Label>
                      <Form.Control type="number" placeholder="Code postal" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Date de naissance</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Date de naissance"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Adresse mail</Form.Label>
                      <Form.Control type="email" placeholder="Adresse mail" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="passeword"
                        placeholder="Mot de passe"
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
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Sélectionner une image de profil</Form.Label>
                      <Form.Control type="file" className="mb-3" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Animaux possédé</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                  <Button variant="primary" className="btn-modify">
                    Modifier mes informations
                  </Button>
                </div>
              </div>
            </div>
            <div className="other-informations">
              <div className="services">
                <h2>Services proposés</h2>
                <div className="info-service">
                  <div className="cards-selectionner">
                    <div className="card">
                      <Image src={icon_domicile} alt={""} className="icon" />
                      <span>A votre domicile</span>
                    </div>
                    <div className="card">
                      <Image src={icon_domicile} alt={""} className="icon" />
                      <span>A votre domicile</span>
                    </div>
                    <div className="card">
                      <Image src={icon_domicile} alt={""} className="icon" />
                      <span>A votre domicile</span>
                    </div>
                  </div>
                  <div className="zone-deplacement">
                    <h2>Zones d'action</h2>
                    <Form.Select className="mt-4">
                      <option>Ville</option>
                      <option>Ville</option>
                      <option>Ville</option>
                      <option>Ville</option>
                      <option>Ville</option>
                    </Form.Select>
                    <p className="mt-3"> zone selectionner</p>
                  </div>
                </div>
              </div>
              <div className="commentaires-clients">
                <h2>Avis</h2>
                <div className="last-comments">
                  <div className="comment">
                    <div className="head-comment">
                      <div className="pseudo">
                        <Image src={icon_profil} alt={""} />{" "}
                        <span>Jeannine</span>
                      </div>
                      <div className="note">
                        <span>5</span>
                        <Image src={star} alt={""} />
                      </div>
                    </div>
                    <p className="text-comment">
                      Amélie est adorable, mon petit chien a passé un très bon
                      WE chez elle. Câlins et ballades garantis, je lui
                      confierai de nouveau en toute confiance ! Merci
                    </p>
                  </div>
                  <div className="comment">
                    <div className="head-comment">
                      <div className="pseudo">
                        <Image src={icon_profil} alt={""} />{" "}
                        <span>Jeannine</span>
                      </div>
                      <div className="note">
                        <span>5</span>
                        <Image src={star} alt={""} />
                      </div>
                    </div>
                    <p className="text-comment">
                      Amélie est adorable, mon petit chien a passé un très bon
                      WE chez elle. Câlins et ballades garantis, je lui
                      confierai de nouveau en toute confiance ! Merci
                    </p>
                  </div>
                  <div className="comment">
                    <div className="head-comment">
                      <div className="pseudo">
                        <Image src={icon_profil} alt={""} />{" "}
                        <span>Jeannine</span>
                      </div>
                      <div className="note">
                        <span>5</span>
                        <Image src={star} alt={""} />
                      </div>
                    </div>
                    <p className="text-comment">
                      Amélie est adorable, mon petit chien a passé un très bon
                      WE chez elle. Câlins et ballades garantis, je lui
                      confierai de nouveau en toute confiance ! Merci
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="primary" className="btn-contact-petsitter">
              Contacter ce pets-siter
            </Button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
