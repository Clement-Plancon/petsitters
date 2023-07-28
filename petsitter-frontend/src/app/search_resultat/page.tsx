"use client";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import img_profil from "../../../public/Images/CAP-698x700.jpg";
import Layout from "../Components/Laoyout";

export default function ResultSearchPetsitter() {
  return (
    <Layout>
      <section className="result_search_petsitters">
        <Container>
          <div className="result">
            <h1>Profils des petsitters correspondant à votre recherche : </h1>
            <div className="grid_cards_petsitters">
              <div className="card">
                <Image src={img_profil} alt={""} className="img-profil" />
                <div className="text-card">
                  <div className="head-card">
                    <span className="name">Amélie</span>
                    <span className="city">Paris</span>
                  </div>
                  <p className="presentation">
                    Bonjour 😊
                    <br />
                    Âgée de 25 ans, j'ai une chatte aujourd'hui âgée de 13 ans,
                    à qui je dois donner des médicaments, ainsi qu'une lapine de
                    5 ans en semi-liberté. J'ai déjà effectué plusieurs gardes
                    de chats et de chiens,
                  </p>
                </div>
                <div className="link-profil">
                  <Button
                    variant="primary"
                    as="a"
                    href="/profil_user"
                    className="btn-profil"
                  >
                    Profil
                  </Button>

                  <span>15€/H</span>
                </div>
              </div>
              <div className="card">
                <Image src={img_profil} alt={""} className="img-profil" />
                <div className="text-card">
                  <div className="head-card">
                    <span className="name">Amélie</span>
                    <span className="city">Paris</span>
                  </div>
                  <p className="presentation">
                    Bonjour 😊
                    <br />
                    Âgée de 25 ans, j'ai une chatte aujourd'hui âgée de 13 ans,
                    à qui je dois donner des médicaments, ainsi qu'une lapine de
                    5 ans en semi-liberté. J'ai déjà effectué plusieurs gardes
                    de chats et de chiens,
                  </p>
                </div>
                <div className="link-profil">
                  <Button
                    variant="primary"
                    as="a"
                    href="/profil_user"
                    className="btn-profil"
                  >
                    Profil
                  </Button>

                  <span>15€/H</span>
                </div>
              </div>
              <div className="card">
                <Image src={img_profil} alt={""} className="img-profil" />
                <div className="text-card">
                  <div className="head-card">
                    <span className="name">Amélie</span>
                    <span className="city">Paris</span>
                  </div>
                  <p className="presentation">
                    Bonjour 😊
                    <br />
                    Âgée de 25 ans, j'ai une chatte aujourd'hui âgée de 13 ans,
                    à qui je dois donner des médicaments, ainsi qu'une lapine de
                    5 ans en semi-liberté. J'ai déjà effectué plusieurs gardes
                    de chats et de chiens,
                  </p>
                </div>
                <div className="link-profil">
                  <Button
                    variant="primary"
                    as="a"
                    href="/profil_user"
                    className="btn-profil"
                  >
                    Profil
                  </Button>

                  <span>15€/H</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
