"use client";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import img_profil from "../../../public/Images/log.png";
import Layout from "../Components/Laoyout";
import React, { useEffect, useState } from "react";

interface Petsitter {
  id: number;
  firstName: string;
  city: string;
  description: string;
  rate: number;
  // Ajoutez d'autres propriétés si nécessaire
}

export default function ResultSearchPetsitter() {
  const [petsitters, setPetsitters] = useState<Petsitter[]>([]);

  useEffect(() => {
    // Fetch petsitters data from the API
    fetch("http://localhost:3001/petsitter")
      .then((response) => response.json())
      .then((data) => {
        // Get the search query from the URL
        const searchParams = new URLSearchParams(window.location.search);
        const searchQuery = searchParams.get("search") || ""; // If search is null, set it to an empty string

        // Filter the petsitters based on their first name
        const filteredPetsitters = data.filter((petsitter: Petsitter) =>
          petsitter.firstName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setPetsitters(filteredPetsitters);
      })
      .catch((error) => console.log("Error fetching petsitters data:", error));
  }, []);

  const handleProfileClick = (petsitterId: number) => {
    // Stocker l'ID du petsitter dans le localStorage
    localStorage.setItem("userId", petsitterId.toString());

    // Rediriger vers la page du profil du petsitter
    window.location.href = `/profil_petsitter?id=${petsitterId}`;

  };

  

  return (
    <Layout>
      <section className="result_search_petsitters">
        <Container>
          <div className="result">
            <h1>Profils des petsitters correspondant à votre recherche : </h1>
            <div className="grid_cards_petsitters">
              {petsitters.map((petsitter) => (
                <div key={petsitter.id} className="card">
                  <Image src={img_profil} alt={""} className="img-profil" />
                  <div className="text-card">
                    <div className="head-card">
                      <span className="name">{petsitter.firstName}</span>
                      <span className="city">{petsitter.city}</span>
                    </div>
                    <p className="presentation">
                      {petsitter.description}
                    </p>
                  </div>
                  <div className="link-profil">
                  <Button
                      variant="primary"
                      onClick={() => handleProfileClick(petsitter.id)}
                      className="btn-profil"
                    >
                      Profil
                    </Button>
                    <span>{petsitter.rate}€/H</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
