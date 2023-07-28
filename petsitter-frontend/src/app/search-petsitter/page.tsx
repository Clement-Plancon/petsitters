"use client";
import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import Stepper from "awesome-react-stepper";
import Image from "next/image";
import cat from "../../../public/Icon/chat.png";
import dog from "../../../public/Icon/chien.png";
import rongeur from "../../../public/Icon/les-rats.png";
import fish from "../../../public/Icon/poisson.png";
import furet from "../../../public/Icon/furet.png";
import poule from "../../../public/Icon/poulet.png";
import snake from "../../../public/Icon/serpent.png";
import horse from "../../../public/Icon/cheval.png";
import bird from "../../../public/Icon/oiseau.png";
import pets from "../../../public/Icon/icon_pets.png";
import msg from "../../../public/Images/msg.png";
import icon_famille from "../../../public/Icon/rester-a-la-maison (1).png";
import icon_promenade from "../../../public/Icon/empreinte-de-patte1.png";
import icon_domicile from "../../../public/Icon/adresse-du-domicile.png";
import icon_visites from "../../../public/Icon/gamelle-pour-chien.png";

export default function SearchPetsitter() {
  return (
    <Layout>
      <section className="search-petsitter">
        <Container>
          <Stepper
            strokeColor="#17253975"
            fillStroke="#172539"
            activeColor="#172539"
            activeProgressBorder="2px solid #17253975"
            submitBtn={<button className="stepperBtn">Valider</button>}
            continueBtn={<button className="stepperBtn">Suivant</button>}
            backBtn={<button className="stepperBtn">Précédant</button>}
            // onSubmit={""}
          >
            <div className="stepperSubDiv">
              <div className="row">
                <h1>Quel animal possédez-vous ? </h1>
                <div className="content-row">
                  <Image src={dog} alt={""} className="icon-card" />
                  <span>Chiens</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={cat} alt={""} className="icon-card" />
                  <span>Chats</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={rongeur} alt={""} className="icon-card" />
                  <span>Rongeurs</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={fish} alt={""} className="icon-card" />
                  <span>Poissons</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={furet} alt={""} className="icon-card" />
                  <span>Furets</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={poule} alt={""} className="icon-card" />
                  <span>Animaux de la fermes</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={snake} alt={""} className="icon-card" />
                  <span>Reptiles</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={horse} alt={""} className="icon-card" />
                  <span>Chevaux</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={bird} alt={""} className="icon-card" />
                  <span>Oiseaux</span>
                  <Form.Select aria-label="Sélectionnez le nombre d'animaux que vous avez">
                    <option>Aucun</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="stepperSubDiv">
              <div className="cards-besoin">
                <h1>De quoi avez-vous besoin pour votre animal ?</h1>
                <div className="cards">
                  <Form className="card">
                    <Image src={icon_famille} alt={""} className="icon-card" />
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
                    <Image src={icon_domicile} alt={""} className="icon-card" />
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={"default"}
                      label={"A votre domicile"}
                    />
                  </Form>
                  <Form className="card">
                    <Image src={icon_visites} alt={""} className="icon-card" />
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
              <div className="date_pickers">
                <h1>Quand avez-vous besoin d’un Petsitter ?</h1>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Date de début</Form.Label>
                    <Form.Control type="date" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Date de fin</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="stepperSubDiv">
              <div className="contact">
                <h1>Comment les petsitters peuvent-ils vous joindre ?</h1>
                <div className="card-contact">
                  <div className="content-card">
                    <Image src={pets} alt={""} />
                    <div className="email">
                      <Image src={msg} alt={""} />
                      <Form className="input-email">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Entrez votre email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                          />
                        </Form.Group>
                      </Form>
                      <Button variant="primary" href="" className="btn-submit">
                        Afficher les petssiters !
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Stepper>
        </Container>
      </section>
    </Layout>
  );
}
