"use client";
import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
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
  const [animalData, setAnimalData] = useState({
    dogs: 0,
    cats: 0,
    rodents: 0,
    fish: 0,
    ferrets: 0,
    farmAnimals: 0,
    reptiles: 0,
    horses: 0,
    birds: 0,
  });

  const [needsData, setNeedsData] = useState({
    familyHome: false,
    walk: false,
    atHome: false,
    dailyVisit: false,
  });

  const [dateData, setDateData] = useState({
    startDate: "",
    endDate: "",
  });

  const [contactData, setContactData] = useState({
    email: "",
  });

  const handleSubmit = () => {
    // Create an object with all the form data
    const formData = {
      animalData,
      needsData,
      dateData,
      contactData,
    };

    // Send the form data to the server using fetch
    fetch("http://localhost:3001/email/petsitter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // If the response is successful, parse the JSON data
        return response.json();
      })
      .then((data) => {
        // Handle the server response if needed
        console.log("Server Response:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error Sending Data:", error);
      });
  };

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
            onSubmit={handleSubmit}
          >
            <div className="stepperSubDiv">
              <div className="row">
                <h1>Quel animal possédez-vous ? </h1>
                <div className="content-row">
                  <Image src={dog} alt={""} className="icon-card" />
                  <span>Chiens</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de chiens que vous avez"
                    value={animalData.dogs}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        dogs: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={cat} alt={""} className="icon-card" />
                  <span>Chats</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de chats que vous avez"
                    value={animalData.cats}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        cats: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={rongeur} alt={""} className="icon-card" />
                  <span>Rongeurs</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de rongeurs que vous avez"
                    value={animalData.rodents}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        rodents: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={fish} alt={""} className="icon-card" />
                  <span>Poissons</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de poissons que vous avez"
                    value={animalData.fish}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        fish: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={furet} alt={""} className="icon-card" />
                  <span>Furets</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de furets que vous avez"
                    value={animalData.ferrets}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        ferrets: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={poule} alt={""} className="icon-card" />
                  <span>Animaux de la ferme</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre d'animaux de la ferme que vous avez"
                    value={animalData.farmAnimals}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        farmAnimals: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={snake} alt={""} className="icon-card" />
                  <span>Reptiles</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de reptiles que vous avez"
                    value={animalData.reptiles}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        reptiles: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={horse} alt={""} className="icon-card" />
                  <span>Chevaux</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre de chevaux que vous avez"
                    value={animalData.horses}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        horses: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Form.Select>
                </div>
                <div className="content-row">
                  <Image src={bird} alt={""} className="icon-card" />
                  <span>Oiseaux</span>
                  <Form.Select
                    aria-label="Sélectionnez le nombre d'oiseaux que vous avez"
                    value={animalData.birds}
                    onChange={(e) =>
                      setAnimalData({
                        ...animalData,
                        birds: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value={0}>Aucun</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
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
                    <Form.Check
                      type={"checkbox"}
                      id={"default"}
                      label={"Chez une famille d'accueil"}
                      checked={needsData.familyHome}
                      onChange={(e) =>
                        setNeedsData({
                          ...needsData,
                          familyHome: e.target.checked,
                        })
                      }
                    />
                  </Form>
                  <Form className="card">
                    <Image
                      src={icon_promenade}
                      alt={""}
                      className="icon-card"
                    />
                    <Form.Check
                      type={"checkbox"}
                      id={"default"}
                      label={"Promenades"}
                      checked={needsData.walk}
                      onChange={(e) =>
                        setNeedsData({
                          ...needsData,
                          walk: e.target.checked,
                        })
                      }
                    />
                  </Form>
                  <Form className="card">
                    <Image src={icon_domicile} alt={""} className="icon-card" />
                    <Form.Check
                      type={"checkbox"}
                      id={"default"}
                      label={"A votre domicile"}
                      checked={needsData.atHome}
                      onChange={(e) =>
                        setNeedsData({
                          ...needsData,
                          atHome: e.target.checked,
                        })
                      }
                    />
                  </Form>
                  <Form className="card">
                    <Image src={icon_visites} alt={""} className="icon-card" />
                    <Form.Check
                      type={"checkbox"}
                      id={"default"}
                      label={"Visites quotidienne"}
                      checked={needsData.dailyVisit}
                      onChange={(e) =>
                        setNeedsData({
                          ...needsData,
                          dailyVisit: e.target.checked,
                        })
                      }
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
                    <Form.Control
                      type="date"
                      placeholder="name@example.com"
                      value={dateData.startDate}
                      onChange={(e) =>
                        setDateData({ ...dateData, startDate: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Date de fin</Form.Label>
                    <Form.Control
                      type="date"
                      value={dateData.endDate}
                      onChange={(e) =>
                        setDateData({ ...dateData, endDate: e.target.value })
                      }
                    />
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
                            value={contactData.email}
                            onChange={(e) =>
                              setContactData({ ...contactData, email: e.target.value })
                            }
                          />
                        </Form.Group>
                      </Form>
                      <Button variant="primary" onClick={handleSubmit} className="btn-submit" href="/search_resultat">
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
