// target :
// 1.create category
// 2.create product based on selected category
// 3.edit product
// 4.remove product
// 5.save products in local storage
// -> storage Class for handle pplication methods
// -> ProductView Class
// -> CategoryView Class
// -> Main and App Class

import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setApp();
  ProductView.setApp();
  console.log(CategoryView);
  console.log(ProductView);

  CategoryView.createCategoriesList();
  ProductView.createProductsList(ProductView.products);
});
