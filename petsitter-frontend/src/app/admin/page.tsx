"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Layout from "../Components/Laoyout";
import jwtDecode from "jwt-decode";

export default function Admin() {
  // Type temporaire pour définir la structure des données des utilisateurs
  interface TempUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }

  // Type temporaire pour définir la structure des données des petsitters
  interface TempPetsitter {
    id: number;
    firstName: string;
    lastName: string;
    // Ajoutez d'autres propriétés spécifiques aux petsitters ici
  }

  // État pour stocker la liste des utilisateurs
  const [users, setUsers] = useState<TempUser[]>([]);

  // État pour stocker la liste des petsitters
  const [petsitters, setPetsitters] = useState<TempPetsitter[]>([]);
  const handleDeleteUser = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
  
      if (response.ok) {
        // Suppression réussie, mettez à jour la liste des utilisateurs
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } else {
        console.error('Erreur lors de la suppression de l\'utilisateur :', response);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la suppression de l\'utilisateur :', error);
    }
  };
  
  const handleDeletePetsitter = async (petsitterId: number) => {
    try {
      const response = await fetch(`http://localhost:3001/petsitter/${petsitterId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
  
      if (response.ok) {
        // Suppression réussie, mettez à jour la liste des petsitters
        setPetsitters((prevPetsitters) => prevPetsitters.filter((petsitter) => petsitter.id !== petsitterId));
      } else {
        console.error('Erreur lors de la suppression du petsitter :', response);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la suppression du petsitter :', error);
    }
  };
  // Fonction pour récupérer la liste des utilisateurs depuis l'API
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Erreur lors de la récupération des utilisateurs :", response);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
    }
  };

  // Fonction pour récupérer la liste des petsitters depuis l'API
  const fetchPetsitters = async () => {
    try {
      const response = await fetch("http://localhost:3001/petsitter", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPetsitters(data);
      } else {
        console.error("Erreur lors de la récupération des petsitters :", response);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des petsitters :", error);
    }
  };

  // Utiliser useEffect pour charger les utilisateurs et les petsitters lors du chargement initial de la page
  useEffect(() => {
    fetchUsers();
    fetchPetsitters();
  }, []);

  return (
    <Layout>
      <section className="admin-section">
        <Container>
          <div className="admin-content">
            <div className="admin-header">
              <h1>Admin Dashboard</h1>
              <Button variant="primary" onClick={() => {
                fetchUsers();
                fetchPetsitters();
              }}>
                Rafraîchir
              </Button>
            </div>
            <div className="admin-body">
              <div>
                <h2>Utilisateurs</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Prénom</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Téléphone</th>
                      <th>Actions</th> {/* Ajoutez cette colonne pour les boutons de suppression */}
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Supprimer</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div>
                <h2>Petsitters</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Prénom</th>
                      <th>Nom</th>
                      {/* Ajoutez d'autres en-têtes de colonnes pour les propriétés spécifiques aux petsitters */}
                      <th>Actions</th> {/* Ajoutez cette colonne pour les boutons de suppression */}
                    </tr>
                  </thead>
                  <tbody>
                    {petsitters.map((petsitter) => (
                      <tr key={petsitter.id}>
                        <td>{petsitter.id}</td>
                        <td>{petsitter.firstName}</td>
                        <td>{petsitter.lastName}</td>
                        {/* Affichez d'autres propriétés spécifiques aux petsitters ici */}
                        <td>
                          <Button variant="danger" onClick={() => handleDeletePetsitter(petsitter.id)}>Supprimer</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
