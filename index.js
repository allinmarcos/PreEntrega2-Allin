var remeras = [
  {
    name: "Charmander",
    price: 14.25,
    description: "lorem ipsum",
    imageUrl: "https://imagen.png/",
    category: "remera",
  },
  {
    name: "Pikachu",
    price: 14.25,
    description: "lorem ipsum",
    imageUrl: "https://imagen.png/",
    category: "remera",
  },
];

var musculosas = [
  {
    name: "Snorlax",
    price: 10.5,
    description: "lorem ipsum",
    imageUrl: "https://imagen.png/",
    category: "musculosa",
  },
  {
    name: "Nidoking",
    price: 20.75,
    description: "lorem ipsum",
    imageUrl: "https://imagen.png/",
    category: "musculosa",
  },
];

var mangaLargas = [
  {
    name: "Porygon",
    price: 17.3,
    description: "glitch error 010101",
    imageUrl: "https://imagen.png/",
    category: "manga larga",
  },
  {
    name: "Gengar",
    price: 99.9,
    description: "lorem ipsum",
    imageUrl: "https://imagen.png/",
    category: "manga larga",
  },
];

var products = remeras.concat(musculosas, mangaLargas)



console.log("Lista de todos los productos SIN FILTRAR");
console.log(products);

function getProducts() {
  let input = prompt(
    "\n Filtrar por name, description o category. \n Categorías: remera; musculosa; manga larga \n Name: Charmander, Pikachu, Snorlax, Nidoking, Porygon \n description: lorem ipsum"
  );
  let res = filterProducts(input);
  console.log("Busqueda de resultado para: ", input);
  console.log(res);
  return res;
}

function filterProducts(filter = "") {
  const filteredProducts = products.filter((product) => {
    const lowerCased = filter.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerCased) ||
      product.description.toLowerCase().includes(lowerCased) ||
      product.category.toLowerCase().includes(lowerCased)
    );
  });
  return filteredProducts;
}

getProducts();
