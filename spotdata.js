const db = require('./models');


db.Spot.create({
    id: 1,
    title: "Lot11",
    address: "NW 1st St & Northwest 3rd Avenue, Miami, FL 33128",
    image: "https://lh5.googleusercontent.com/p/AF1QipMVB--Gi2Q9s9yO7LvDPsri8ZsjAJaVUcQrhjf5=w408-h306-k-no",
    besttime: "6 pm",
    description: "Pared-down urban skate park beneath the highway, offering ramps & picnic tables.",
})

db.Spot.create({
    id: 2,
    title: "TF305",
    address: "3580 NW 54th St #5211, Miami, FL 33142",
    image: "https://lh5.googleusercontent.com/p/AF1QipMdbcrSVl-hbjPvYJ7opjtQ-dtxh6Vh5cpHd2cK=w426-h240-k-no",
    besttime: "7:30 pm",
    description: "TF305.",
})

db.Spot.create({
    id: 3,
    title: "Skatepark",
    address: "3022140080010, Miami Beach, FL 33154",
    image: "https://lh5.googleusercontent.com/p/AF1QipOxjjY-RuHBNqKccLR7nBLM2MlMPYyKxidkjeVA=w408-h272-k-no",
    besttime: "5 pm",
    description: "Skateboard park.",
})

db.Spot.create({
    id: 4,
    title: "North Beach Public Skate Park",
    address: "200 82nd St, Miami Beach, FL 33141",
    image: "https://lh5.googleusercontent.com/p/AF1QipO7K-2yWkA9KLLWWHuja2TxaY76ZcM9kB1KVhpL=w521-h240-k-no",
    besttime: "11-3:30 pm",
    description: "Skateboard park.",
})

db.Spot.create({
    id: 5,
    title: "Kendall Indian Hammocks Skate Park",
    address: "11395 SW 79th St, Miami, FL 33173",
    image: "https://lh5.googleusercontent.com/p/AF1QipM7cwbBh8uutRwYXbTJEyUBh18NvEZ_zewPjpFo=w408-h306-k-no",
    besttime: "4-5:30 pm",
    description: "Skateboard park.",
})
