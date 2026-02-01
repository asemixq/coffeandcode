<script>
export default {
  data() {
    return {
      activeCategory: 'все',
      filters: [
        {
          name: "Классические напитки",
          link: "classic"
        },
        {
          name: "Авторские напитки",
          link: "authors"
        },
        {
          name: "Холодные напитки",
          link: "cold"
        },
        {
          name: "Чаи",
          link: "teas"
        },
        {
          name: "Лимонады",
          link: "lemonades"
        },
        {
          name: "Фреши",
          link: "freshes"
        },
        {
          name: "Еда",
          link: "eats"
        },
      ],
      products: [
        {
          id: 1,
          name: 'Латте "Осенний вечер"',
          description: 'Нежный латте с карамельным сиропом и пенкой из взбитых сливок, украшенный карамельным соусом',
          category: 'классика',
          imageUrl: 'https://i0.wp.com/www.m5zn.com/wp-content/uploads/2022/05/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%A8-%D9%81%D9%8A-%D8%AA%D9%8A%D9%85-%D9%87%D9%88%D8%B1%D8%AA%D9%86%D8%B2.webp?ssl=1',
          sizes: [
            { name: 'Маленький', volume: '250 мл', price: 280 },
            { name: 'Средний', volume: '350 мл', price: 320 },
            { name: 'Большой', volume: '450 мл', price: 370 }
          ],
          composition: [
            'Эспрессо 60 мл',
            'Молоко 3.2%',
            'Карамельный сироп Monin',
            'Сливки 33%',
            'Карамельный соус'
          ],
          isAvailable: true,
          isRecommended: true,
          preparationTime: '5-7 минут'
        },
        {
          id: 2,
          name: 'Матча латте',
          description: 'Традиционный японский чай матча, взбитый с молоком в нежный кремовый напиток',
          category: 'напиток',
          imageUrl: 'https://i0.wp.com/www.m5zn.com/wp-content/uploads/2022/05/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%A8-%D9%81%D9%8A-%D8%AA%D9%8A%D9%85-%D9%87%D9%88%D8%B1%D8%AA%D9%86%D8%B2.webp?ssl=1',
          sizes: [
            { name: 'Стандартный', volume: '300 мл', price: 350 },
            { name: 'Большой', volume: '400 мл', price: 420 }
          ],
          composition: [
            'Японский чай матча премиум класса',
            'Молоко 3.2% (можно заменить на растительное)',
            'Кленовый сироп (по желанию)'
          ],
          isAvailable: true,
          isRecommended: false,
          preparationTime: '4-6 минут'
        },
        {
          id: 3,
          name: 'Тирамису классический',
          description: 'Итальянский десерт из печенья савоярди, пропитанного эспрессо, с кремом маскарпоне',
          category: 'десерт',
          imageUrl: 'https://i0.wp.com/www.m5zn.com/wp-content/uploads/2022/05/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%A8-%D9%81%D9%8A-%D8%AA%D9%8A%D9%85-%D9%87%D9%88%D8%B1%D8%AA%D9%86%D8%B2.webp?ssl=1',
          sizes: [
            { name: 'Порция', weight: '150 г', price: 420 }
          ],
          composition: [
            'Сыр маскарпоне',
            'Печенье савоярди',
            'Свежесваренный эспрессо',
            'Куриные яйца категории С0',
            'Сахар тростниковый',
            'Какао-порошок'
          ],
          isAvailable: true,
          isRecommended: true,
          preparationTime: 'готов к подаче',
          allergens: ['глютен', 'молочные продукты', 'яйца']
        },
        {
          id: 4,
          name: 'Завтрак "Итальянское утро"',
          description: 'Сытный завтрак с круассаном, авокадо, яйцом пашот и свежими овощами',
          category: 'завтрак',
          imageUrl: 'https://i0.wp.com/www.m5zn.com/wp-content/uploads/2022/05/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%A8-%D9%81%D9%8A-%D8%AA%D9%8A%D9%85-%D9%87%D9%88%D8%B1%D8%AA%D9%86%D8%B2.webp?ssl=1',
          sizes: [
            { name: 'Стандартный', weight: '450 г', price: 590 }
          ],
          composition: [
            'Свежий круассан из слоеного теста',
            'Авокадо Хасс',
            'Яйцо пашот',
            'Помидоры черри',
            'Микс салатных листьев',
            'Сыр пармезан',
            'Соус песто',
            'Лимонный сок'
          ],
          isAvailable: true,
          isRecommended: true,
          preparationTime: '12-15 минут',
          allergens: ['глютен', 'молочные продукты', 'яйца']
        }
      ]
    }
  },
  methods: {
    scrollToSection(id, name) {
      this.activeCategory = name
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-column h-screen w-full gap-4 align-items-center">
    <div class="flex flex-column w-9 gap-5 h-full">
      <div id="bonuses" class="text-7xl font-normal text-gray-900">
        Меню
      </div>

      <div class="sticky top-0 z-5 bg-transparent py-3">
        <div class="flex w-full">
          <div v-for="filter in filters"
               class="border-none h-fit mx-1 px-3 py-2 border-round-2xl cursor-pointer text-white no-underline text-xl"
               @click="this.scrollToSection(filter.link, filter.name)"
               :class="activeCategory === `${filter.name}`?'btn-bg-color':'bg-gray-900'">
            {{ filter.name }}
          </div>
        </div>
      </div>

      <div class="flex-grow-1 overflow-y-auto" style="scrollbar-width: none; -ms-overflow-style: none;">
        <div v-for="filter in filters"
             :id="filter.link"
             class="text-8xl font-medium text-gray-900 text-center mb-6">
          {{ filter.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer-bg-color {
  background-color: #122343;
}
.card-bg-color {
  background-color: #ffffff !important;
}

.label_text_color {
  color: #ac3b61;
}

.btn-bg-color {
  background: #ac3b61;
}

</style>