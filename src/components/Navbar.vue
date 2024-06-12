<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-brand">Portfolio</div>
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse navbar-collapse', { 'is-open': isMenuOpen }]">
        <div class="navbar-nav ms-auto">
          <a class="nav-link" @click="changePage('mainsec')">Home</a>
          <a class="nav-link" @click="changePage('aboutsec')">About</a>
          <a class="nav-link" @click="changePage('contactsec')">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    changePage(page) {
      this.$emit('change-page', page);
      this.isMenuOpen = false; 
    }
  }
};
</script>


<style scoped>
.navbar {
  background-color: #f8f9fa; 
  color: #333;
  font-family: 'Josefin Sans', sans-serif;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-toggler {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
}

.navbar-toggler-icon {
  font-size: 1rem;
}

.collapse.navbar-collapse {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link {
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
}

@media (max-width: 768px) {
  .navbar-toggler {
    display: block;
  }

  .collapse.navbar-collapse {
    display: none;
    flex-direction: column;
    width: 30%;
    background-color: #f8f9fa; 
  }

  .collapse.navbar-collapse.is-open {
    display: flex;
  }

  .nav-link {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>
