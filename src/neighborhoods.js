import img1 from "./assets/img/house1.jpg";
import img2 from "./assets/img/house2.jpg";
import img3 from "./assets/img/house3.jpg";
import img4 from "./assets/img/house4.jpg";
import img5 from "./assets/img/house5.jpg";
import img6 from "./assets/img/house6.jpg";

const neighborhoods = [
    {
        name: "Beverly",
        city: "Chicago",
        state: "IL",
        agent: "John Doe",
        overview: "Beverly is famous for its architecture, extensive green spaces, and historic charm. This South Side neighborhood is also known for its Irish-style pubs along Western Avenue, as well as its unique shopping district that stretches down 103rd Street. Beverly offers an eclectic environment like a big city, yet provides a distinct small-town vibe. The neighborhood has a variety of homes with plenty of backyard space for outdoor recreation.",
        rating: "5.0",
        starts: 5,
        topListings: [
            {
                address: "4 Privet Drive",
                price: "$375,000",
                image: img1
            },
            {
                address: "1060 West Addison Street",
                price: "$290,000",
                image: img2
            },
            {
                address: "1323 Mockingbird Lane",
                price: "310,000",
                image: img3
            },
        ]
    },
    {
        name: "Oakland",
        city: "Chicago",
        state: "IL",
        agent: "Jane Doe",
        overview: "Bordering the coast of Lake Michigan, Oakland is a quiet neighborhood on Chicago's south side. With scenic views of the glittering lake and Chicago's towering skyline, this promising neighborhood is sure to continue growing in the coming years.",
        rating: "5.0",
        starts: 5,
        topListings: [
            {
                address: "221B Baker Street",
                price: "$375,000",
                image: img4
            },
            {
                address: "425 Grove Street",
                price: "$290,000",
                image: img5
            },
            {
                address: "124 Conch Street",
                price: "310,000",
                image: img6
            },
        ]
    },
];

export default neighborhoods;