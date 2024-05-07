import { defineStore } from 'pinia';

const apiUrl = "https://janshop.azurewebsites.net/api/v1/Product";

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    async getAllProducts() {
      console.log("GET")
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch products. Status: ' + response.status);
        }
        const json = await response.json();
        this.products = json
      } catch (error) {
      }
    },
    async getProduct(id) {
      try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product. Status: ' + response.status);
        }
        const json = await response.json();
        this.product = json;
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },

    addToCart(product) {
      this.cart.push(product);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id);
    },

    deleteProduct(id) {
      fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        // Update the list of products after deletion
        this.getAllProducts();
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
    },
    addProduct(newProductData) {
      try {
      console.log("POST")

        const response = fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProductData)
        });

        if (!response.ok) {
          throw new Error('Failed to add product. Status: ' + response.status);
        }

        // Update the list of products after addition
        this.getAllProducts();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
  }
});
