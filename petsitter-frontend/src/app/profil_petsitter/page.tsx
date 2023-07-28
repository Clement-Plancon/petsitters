"use client";

import { useEffect, useState } from "react";
import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Image from "next/image";
import img_petsitter from "../../../public/Images/log.png";
import icon_domicile from "../../../public/Icon/adresse-du-domicile_vert.png";
import icon_profil from "../../../public/Icon/utilisateur.png";
import star from "../../../public/Icon/star.png";

export default function ProfilPetsitter() {
  const [petsitterData, setPetsitterData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    dateOfBirth: "",
    mail: "",
    phoneNumber: "",
    password: "",
    dog: "",
    cat: "",
    rodent: "",
    fish: "",
    ferret: "",
    farmAnimal: "",
    reptile: "",
    horse: "",
    bird: "",
    hostFamily: "",
    atYourHome: "",
    dailyVisit: "",
    promenade: "",
    animauxPossedes: "",
  });

  useEffect(() => {
    // Récupérez les données du petsitter à partir du serveur en utilisant son ID (remplacez 'userId' par l'ID réel)
    const fetchPetsitterData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/petsitter/${localStorage.getItem("userId")}`);
        if (response.ok) {
          const data = await response.json();
          setPetsitterData(data);
        } else {
          console.error("Erreur lors de la récupération des données du petsitter");
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données du petsitter :", error);
      }
    };

    fetchPetsitterData();
  }, []);

  return (
    <Layout>
      <Container>
        <section className="profil-petsitter">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Acceuil</Breadcrumb.Item>
            <Breadcrumb.Item active>Mon profil de petsitter</Breadcrumb.Item>
          </Breadcrumb>

          <div className="profil">
            <h1>{`${petsitterData.firstName} ${petsitterData.lastName}`}</h1>
            <div className="informations-petsitter">
              <div className="img-profil">
                <Image src={img_petsitter} alt={""} />
              </div>
              <div className="informations">
                <h2 className="mt-5">Mes informations</h2>
                <div className="bloc-inputs">
                  <Form className="inputs">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Prénom"
                        name="firstName"
                        value={petsitterData.firstName}
                        onChange={(e) => setPetsitterData({ ...petsitterData, firstName: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nom"
                        name="lastName"
                        value={petsitterData.lastName}
                        onChange={(e) => setPetsitterData({ ...petsitterData, lastName: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Adresse"
                        name="address"
                        value={petsitterData.address}
                        onChange={(e) => setPetsitterData({ ...petsitterData, address: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Ville</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ville"
                        name="city"
                        value={petsitterData.city}
                        onChange={(e) => setPetsitterData({ ...petsitterData, city: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Code postal</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Code postal"
                        name="postalCode"
                        value={petsitterData.postalCode}
                        onChange={(e) => setPetsitterData({ ...petsitterData, postalCode: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Date de naissance</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Date de naissance"
                        name="dateOfBirth"
                        value={petsitterData.dateOfBirth}
                        onChange={(e) => setPetsitterData({ ...petsitterData, dateOfBirth: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Adresse mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Adresse mail"
                        name="mail"
                        value={petsitterData.mail}
                        onChange={(e) => setPetsitterData({ ...petsitterData, mail: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        value={petsitterData.password}
                        onChange={(e) => setPetsitterData({ ...petsitterData, password: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Numéro de téléphone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Numéro de téléphone"
                        name="phoneNumber"
                        value={petsitterData.phoneNumber}
                        onChange={(e) => setPetsitterData({ ...petsitterData, phoneNumber: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Sélectionner une image de profil</Form.Label>
                      <Form.Control type="file" className="mb-3" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Animaux possédés</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="animauxPossedes"
                        value={petsitterData.animauxPossedes}
                        onChange={(e) => setPetsitterData({ ...petsitterData, animauxPossedes: e.target.value })}
                      />
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
                    <p className="mt-3"> zone sélectionnée</p>
                  </div>
                </div>
              </div>
              <div className="commentaires-clients">
                <h2>Avis</h2>
                <div className="last-comments">
                  <div className="comment">
                    <div className="head-comment">
                      <div className="pseudo">
                        <Image src={icon_profil} alt={""} /> <span>Jeannine</span>
                      </div>
                      <div className="note">
                        <span>5</span>
                        <Image src={star} alt={""} />
                      </div>
                    </div>
                    <p className="text-comment">
                      Amélie est adorable, mon petit chien a passé un très bon WE chez elle. Câlins et ballades garantis,
                      je lui confierai de nouveau en toute confiance ! Merci
                    </p>
                  </div>
                  <div className="comment">
                    <div className="head-comment">
                      <div className="pseudo">
                        <Image src={icon_profil} alt={""} /> <span>Jeannine</span>
                      </div>
                      <div className="note">
                        <span>5</span>
                        <Image src={star} alt={""} />
                      </div>
                    </div>
                    <p className="text-comment">
                      Amélie est adorable, mon petit chien a passé un très bon WE chez elle. Câlins et ballades garantis,
                      je lui confierai de nouveau en toute confiance ! Merci
                    </p>
                  </div>
                  <div className="comment">
                    <div className="head-comment">
                      <div className="pseudo">
                        <Image src={icon_profil} alt={""} /> <span>Jeannine</span>
                      </div>
                      <div className="note">
                        <span>5</span>
                        <Image src={star} alt={""} />
                      </div>
                    </div>
                    <p className="text-comment">
                      Amélie est adorable, mon petit chien a passé un très bon WE chez elle. Câlins et ballades garantis,
                      je lui confierai de nouveau en toute confiance ! Merci
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="primary" className="btn-contact-petsitter">
              Contacter ce pets-sitter
            </Button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
