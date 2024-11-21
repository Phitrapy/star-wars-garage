export interface StarshipDTO {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string; // Utilisation de string pour les grandes valeurs
    length: string;
    max_atmosphering_speed: string; // Peut contenir "n/a", donc string
    crew: string; // Format avec des virgules, donc string
    passengers: string;
    cargo_capacity: string; // Très grande valeur, mieux en string
    consumables: string; // Ex. : "3 years"
    hyperdrive_rating: string; // Ex. : "4.0", donc string pour compatibilité
    MGLT: string; // Ex. : "10", peut aussi être une chaîne
    starship_class: string;
    pilots: string[]; // Liste d'URLs
    films: string[]; // Liste d'URLs
    created: string; // ISO 8601 date
    edited: string; // ISO 8601 date
    url: string; // URL de la ressource
  }
  