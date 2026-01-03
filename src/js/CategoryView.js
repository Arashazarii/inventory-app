// title, description => {} => saveCategory => ...
import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");
const toggleAddCategoryBtn = document.querySelector("#toggle-add-category");
const categoryWrapper = document.querySelector("#category-wrapper");
const cancelAddCategoryBtn = document.querySelector("#cancel-add-category");

class CategoryView {
  constructor() {
    addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    toggleAddCategoryBtn.addEventListener("click", (e) =>
      this.toggleAddCategory()
    );
    cancelAddCategoryBtn.addEventListener("click", (e) =>
      this.cancelAddCategory(e)
    );
    this.categories = [];
  }
  addNewCategory(e) {
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    if (!title || !description) return;
    Storage.saveCategory({ title, description });
    this.categories = Storage.getAllCategories();
    // update DOM : update select option in categories
    this.createCategoriesList();
    categoryTitle.value = "";
    categoryDescription.value = "";
    categoryWrapper.classList.add("hidden");
    toggleAddCategoryBtn.classList.remove("hidden");
  }

  setApp() {
    this.categories = Storage.getAllCategories();
  }

  createCategoriesList() {
    let result = `<option class="bg-slate-500 text-slate-300" value="">
                  Select a category
                </option>`;
    this.categories.forEach((element) => {
      result += `<option class="bg-slate-500 text-slate-300" value="${element.id}">
                  ${element.title}
                  </option>`;
    });

    const categoriDOM = document.querySelector("#product-category");
    categoriDOM.innerHTML = result;
  }

  toggleAddCategory(e) {
    categoryWrapper.classList.remove("hidden");
    toggleAddCategoryBtn.classList.add("hidden");
  }

  cancelAddCategory(e) {
    e.preventDefault();
    categoryWrapper.classList.add("hidden");
    toggleAddCategoryBtn.classList.remove("hidden");
  }
}

export default new CategoryView();

//‌ * Road
// CategoryView
// │
// ├── state
// │   └── this.categories
// │
// ├── constructor
// │   ├── event listener
// │   └── initialize state
// │
// ├── addNewCategory
// │   ├── read input
// │   ├── validate
// │   ├── send to Storage
// │   ├── get updated data
// │   └── update DOM
// │
// ├── setApp
// │   └── load data on start
// │
// └── createCategoriesList
//     └── render select options

// CategoryView
// │
// ├── constructor
// │   ├── گوش دادن به کلیک دکمه
// │   └── آماده‌سازی categories
// │
// ├── addNewCategory
// │   ├── گرفتن مقدار input ها
// │   ├── اعتبارسنجی
// │   ├── فرستادن دیتا به Storage
// │   ├── گرفتن دیتای جدید
// │   └── آپدیت DOM
// │
// ├── setApp
// │   └── گرفتن دیتای اولیه از Storage
// │
// └── createCategoriesList
//     └── ساخت option ها در select
