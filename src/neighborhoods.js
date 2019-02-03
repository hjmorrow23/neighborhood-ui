const neighborhoods = {
    state: "Illinois",
    cities: [
        {
            name: "Chicago",
            neighborhoods: [
                {
                    name: "Beverly",
                    agent: "John Doe",
                    overview: "Beverly is famous for its architecture, extensive green spaces, and historic charm. This South Side neighborhood is also known for its Irish-style pubs along Western Avenue, as well as its unique shopping district that stretches down 103rd Street. Beverly offers an eclectic environment like a big city, yet provides a distinct small-town vibe. The neighborhood has a variety of homes with plenty of backyard space for outdoor recreation.",
                    rating: "5.0",
                    starts: 5,
                    topListings: [
                        {
                            address: "4 Privet Drive",
                            price: "$375,000",
                            image: ""
                        },
                        {
                            address: "1060 West Addison Street",
                            price: "$290,000",
                            image: ""
                        },
                        {
                            address: "1323 Mockingbird Lane",
                            price: "310,000",
                            image: ""
                        },
                    ]
                },
                {
                    name: "Oakland",
                    agent: "Jane Doe",
                    overview: "Bordering the coast of Lake Michigan, Oakland is a quiet neighborhood on Chicago's south side. With scenic views of the glittering lake and Chicago's towering skyline, this promising neighborhood is sure to continue growing in the coming years.",
                    rating: "5.0",
                    starts: 5,
                    topListings: [
                        {
                            address: "221B Baker Street",
                            price: "$375,000",
                            image: ""
                        },
                        {
                            address: "425 Grove Street",
                            price: "$290,000",
                            image: ""
                        },
                        {
                            address: "124 Conch Street",
                            price: "310,000",
                            image: ""
                        },
                    ]
                },

            ]
        }
    ]
};

export default neighborhoods;