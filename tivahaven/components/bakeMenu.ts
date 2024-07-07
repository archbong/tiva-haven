interface BakeMenu {
    id: number;
    title?: string;
    context?: string;
    image?: string;
    path?: string;
}


export const bakeMenu: BakeMenu[] = [
    {
        id: 1,
        title: "Buttery Croissants",
        context: " Flaky, golden-brown croissants made with the finest ingredients.",
        image: "/home/products/cake-five.jpeg"
    },
    {
        id: 2,
        title: "Delicate Macarons",
        context: "Vibrant, delicate macarons in a variety of flavors.",
        image: "/home/products/cake-two.jpeg"
    },
    {
        id: 3,
        title: "Decadent Cupcakes",
        context: "Moist, flavorful cupcakes with irresistible toppings.",
        image: "/home/products/chocolate-cake.jpeg"
    },
]


export const blogMenu: BakeMenu[] = [
    {
        id: 1,
        title: "Mastering the Art of Sourdough Bread",
        context: "Discover the secrets to creating the perfect sourdough loaf.",
        path: "#",
        image: "/home/products/cake-five.jpeg",
    },
    {
        id: 2,
        title: "The Science Behind Baking the Perfect Cake.",
        context: "Explore the key ingredients and techniques for baking moist,fluffy cakes.",
        path: "#",
        image: "/home/products/rice-three.jpeg"
    },
    {
        id: 3,
        title: "The Versatility of Baking with Seasonal Ingredients",
        context: "Learn how to incorporate fresh, seasonal produce into your baking.",
        path: "#",
        image: "/home/products/chocolate-cake.jpeg"
    },
]

export const gallery: BakeMenu[] = [
    {
        id: 1,
        image: "/home/products/buns-meat.jpeg",
        title: "buns-meat"
    },
    {
        id: 2,
        image: "/home/products/chin-chin.jpeg",
        title: "chin-chin"
    },
    {
        id: 3,
        image: "/home/products/rice-four.jpeg",
        title: "fried-rice"
    },
    {
        id: 4,
        image: "/home/products/rice-two.jpeg",
        title: "fried-rice"
    },
    // {
    //     id: 5,
    //     image: "/home/products/buns-meat.jpeg",
    //     title: "buns-meat"
    // }
]