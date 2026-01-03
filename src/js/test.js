//! Storage exercise

// class Test {
//   static getAllProducts() {
//     return JSON.parse(localStorage.getItem("products")) || [];
//   }

//   static saveProduct(productToSave) {
//     const savedProducts = Test.getAllProducts();

//     const existedItem = savedProducts.find((p) => p.id === productToSave.id);

//     if (existedItem) {
//       existedItem.title = productToSave.title;
//       existedItem.category = productToSave.category;
//       existedItem.quantity = productToSave.quantity;
//     } else {
//       productToSave.id = new Date().getTime();
//       productToSave.createdAt = new Date().toISOString();
//       savedProducts.push(productToSave);
//     }
//     localStorage.setItem("products", JSON.stringify(savedProducts));
//   }
// }

// function saveProduct(productToSave) {
//   const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

//   const existedProduct = savedProducts.find((p) => p.id === productToSave.id);

//   if (existedProduct) {
//     existedProduct.title = productToSave.title;
//   } else {
//     savedProducts.push(productToSave);
//   }
//   localStorage.setItem("products", JSON.stringify(savedProducts));
// }

//! CategoryView exercise

// import Storage from "./Storage.js";

// const categoryTitle = document.querySelector("#category-title");
// const categoryDescription = document.querySelector("#category-description");
// const addNewCategoryBtn = document.querySelector("#add-new-category");

// class CategoryView {
//   constructor() {
//     addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
//     this.categories = [];
//   }

//   addNewCategory(e) {
//     e.preventDefault();
//     const title = categoryTitle.value;
//     const description = categoryDescription.value;
//     if (!title || !description) return;
//     Storage.saveCategory({ title, description });
//     this.categories = Storage.getAllCategories();
//     // update dom => select option
//     this.createCategoriesList();
//     categoryTitle.value = "";
//     categoryDescription.value = "";
//   }

//   setApp() {
//     this.categories = Storage.getAllCategories();
//   }

//   createCategoriesList() {
//     let result = ` <option class="bg-slate-500 text-slate-300" value="">
//         Select a category
//       </option>`;

//     this.categories.forEach((item) => {
//       {
//         result += `<option class="bg-slate-500 text-slate-300" value="${item.id}">
//         ${item.title}
//       </option>`;
//       }
//     });

//     document.querySelector("#product-category").innerHTML = result;
//   }
// }

// export default new CategoryView();

//!