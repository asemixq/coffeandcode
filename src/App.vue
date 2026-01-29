<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import MainPage from './views/MainPage.vue';



export default {
  data() {
    return {
      currentMenuId: 1,
      items: [
        {
          id: 2,
          label: 'События',
          icon: 'pi pi-calendar',
          link: '#events',
        },
        {
          id: 1,
          label: 'Филиалы',
          icon: 'pi pi-home',
          link: '#places'
        },
        {
          id: 3,
          label: 'Бонусы',
          icon: 'pi pi-address-book',
          link: '#bonuses'
        },
        {
          id: 4,
          label: 'Контакты',
          icon: 'pi pi-address-book',
          link: '#books'
        },
      ]
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName })
    },
  },
  components: {
    InputText,
    Button,
    MainPage,
  }
};
</script>

<template>
  <div class="flex flex-column h-screen w-full overflow-y-scroll main-bg-color">
    <div class="flex flex-row border-round-xl h-fit justify-content-between w-full">
      <div class="flex text-6xl px-4 py-2 font-medium text-gray-900 font-italic">Almanac</div>
      <div class="flex flex-row align-items-center">
        <a v-for="menu in items"
           :key="menu.id"
           class="h-fit mx-1 px-3 py-2 border-round-2xl bg-gray-900 cursor-pointer text-white no-underline text-xl"
           :href="menu.link">
          {{ menu.label }}
        </a>
        <button class="text-xl text-white cursor-pointer menu-text-color h-fit px-3 py-2 border-round-2xl
                       ml-7 mr-4 border-none"
                @click="this.navigateTo('menu')">
          Меню
        </button>
      </div>
    </div>

    <div class="w-full min-h-screen main-bg-color">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

* {
  font-family: 'Roboto', sans-serif;
}

.main-bg-color {
  background-color: #eee2dc;
}

.menu-text-color {
  background: #ac3b61;
}
</style>
