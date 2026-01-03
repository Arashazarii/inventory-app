const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2021-10-31T15:22:00.411Z",
  },
  {
    id: 2,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2021-11-31T15:22:00.411Z",
  },
  {
    id: 3,
    title: "Node.js",
    category: "bacl=kend",
    createdAt: "2021-12-31T15:22:00.411Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of application",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "backend of application",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

export default class Storage {
  // add new category
  // save category
  // get all categories

  static getAllCategories() {
    // products , category => localstorage =>
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    // sort => نزولی  ==> decsending
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }

  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    // edit => ...save
    // new => ...save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      //  new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }

  static getAllProducts(sort = "newest") {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    return savedProducts.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  }

  static saveProduct(productToSave) {
    const savedProducts = Storage.getAllProducts();

    const existedItem = savedProducts.find((p) => p.id === productToSave.id);

    if (existedItem) {
      existedItem.title = productToSave.title;
      existedItem.category = productToSave.category;
      existedItem.quantity = productToSave.quantity;
    } else {
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }

  static deleteProduct(id) {
    const savedProducts = Storage.getAllProducts();
    const filteredProducts = savedProducts.filter((p) => p.id !== parseInt(id));
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  }
}

// export default new Storage();
