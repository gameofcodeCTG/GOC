export const servicescategories = [
    {
        code:"SERVICE_VEHICULE"        
    },
    {
        code:"PRET_OUTILLAGE"
    },
    {
        code:"APPRENTISSAGE"
    }
];

export const services  = [
    {
        category:servicescategories[0],
        label:"Services véhiculés"
    },
    {
        category:servicescategories[1],
        label:"Prêts outillages"
    },
    {
        category:servicescategories[2],
        label:"Apprentissage"
    }
];

export const communes = [
    {
        COMMUNE_CODE: "1",
        COMMUNE_NOM: "Luxembourg"
    },
    {
        COMMUNE_CODE: "203",
        COMMUNE_NOM: "Dippach"
    }
];

export const quartiers = [
    {
        COMMUNE_CODE: "1",
        QUARTIER_NOM: "Bonnevoie"
    },
    {
        COMMUNE_CODE:"1",
        QUARTIER_NOM:"Cessange"
    }
];

export const messages = [
    {
        dateCreation:"2012-04-23T18:25:43.511Z",
        dateExpiration: "2012-04-23T18:25:43.511Z",
        auteur: "Pierre Laurent",
        titre:"Cherche co-voiturage pour Mondorf-les-Bains",
        contenu: "Bonjour, bla bla bla",
        commune:communes[0],
        quartier:quartiers[1],
        service_category:[0]
    },
    {
        dateCreation:"2012-04-23T18:25:43.511Z",
        dateExpiration: "2012-04-23T18:25:43.511Z",
        auteur: "Jack London",
        titre:"Besoin d'une echelle de 3 mètres",
        contenu: "Bonjour, bla bla bla ",
        commune:communes[0],
        quartier:quartiers[0],
        service_category:[1]
    },
    {
        dateCreation:"2012-04-23T18:25:43.511Z",
        dateExpiration: "2012-04-23T18:25:43.511Z",
        auteur: "Rosalita Peres",
        titre:"Cherche personnes pour pratiquer mon luxembourgeois",
        contenu: "Bonjour, bla bla bla bla",
        commune:communes[0],
        quartier:quartiers[0],
        service_category:[2]
    },
    {
        dateCreation:"2012-04-23T18:25:43.511Z",
        dateExpiration: "2012-04-23T18:25:43.511Z",
        auteur: "",
        titre:"Inconnu",
        contenu: "Inconnu",
        commune:communes[1],
        quartier:null,
        service_category:[0]
    }
];


