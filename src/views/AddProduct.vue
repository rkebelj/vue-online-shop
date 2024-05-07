<template>
  <form @submit.prevent="addNewProduct" class="add-product-form">
    <label for="brand">Brand:</label>
    <input type="text" id="brand" v-model="newProduct.brand" required>

    <label for="rating">Rating:</label>
    <input type="number" id="rating" v-model.number="newProduct.rating" required>

    <label for="stock">Stock:</label>
    <input type="number" id="stock" v-model.number="newProduct.stock" required>

    <label for="discount">Discount:</label>
    <input type="number" id="discount" v-model.number="newProduct.discount" required>

    <label for="category">Category:</label>
    <input type="text" id="category" v-model="newProduct.category" required>

    <label for="title">Title:</label>
    <input type="text" id="title" v-model="newProduct.title" required>

    <label for="description">Description:</label>
    <textarea id="description" v-model="newProduct.description" required></textarea>

    <label for="price">Price:</label>
    <input type="number" id="price" v-model.number="newProduct.price" required>

    <button type="submit">Add Product</button>
  </form>

</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'AddProductView'
  })
</script>

<script setup>
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";
  import { ref } from "vue";

  const router = useRouter()

  const store = productsStore();
  const newProduct = ref({
    brand: "TE",
    rating: 0,
    stock: 0,
    discount: 0,
    category: "ET",
    title: "ET",
    description: "TE",
    price: 0,
  });
  const addNewProduct = () => {
    // Add the new product to the store
    
    store.addProduct(store.addProduct(newProduct.value))
    // store.getProducts();
    // Redirect to the products list or any other desired route
    router.push({ name: 'Catalog' });
  };
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}
.add-product-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }

  .add-product-form label {
    margin-bottom: 8px;
  }

  .add-product-form input,
  .add-product-form textarea {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .add-product-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .add-product-form button:hover {
    background-color: #0056b3;
  }

.item-details img {
  width: 20%;
}
</style>