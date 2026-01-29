<script>
export default {
  data() {
    return {
      activeCategory: 'все',
      products: [
        {
          id: 1,
          name: 'Латте "Осенний вечер"',
          description: 'Нежный латте с карамельным сиропом и пенкой из взбитых сливок, украшенный карамельным соусом',
          category: 'напиток',
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
  computed: {
    filteredProducts() {
      if (this.activeCategory === 'все') return this.products
      return this.products.filter(p => p.category === this.activeCategory)
    }
  }
}
</script>

<template>
<div class="flex flex-column h-screen w-full gap-4 align-items-center">
  <div class="flex flex-column w-9 gap-5">
    <div id="bonuses" class="text-7xl font-normal text-gray-900">
      Меню
    </div>
    <div class="flex w-full">
      <button class="border-none h-fit mx-1 px-3 py-2 border-round-2xl cursor-pointer text-white no-underline text-xl"
              @click="activeCategory = 'все'"
              :class="activeCategory === 'все'?'btn-bg-color':'bg-gray-900'">
        Все
      </button>
      <button class="border-none h-fit mx-1 px-3 py-2 border-round-2xl cursor-pointer text-white no-underline text-xl"
              @click="activeCategory = 'напиток'"
              :class="activeCategory === 'напиток'?'btn-bg-color':'bg-gray-900'">
        Напитки
      </button>
      <button class="border-none h-fit mx-1 px-3 py-2 border-round-2xl cursor-pointer text-white no-underline text-xl"
              @click="activeCategory = 'завтрак'"
              :class="activeCategory === 'завтрак'?'btn-bg-color':'bg-gray-900'">
        Завтраки
      </button>
      <button class="border-none h-fit mx-1 px-3 py-2 border-round-2xl cursor-pointer text-white no-underline text-xl"
              @click="activeCategory = 'десерт'"
              :class="activeCategory === 'десерт'?'btn-bg-color':'bg-gray-900'">
        Десерты
      </button>
    </div>

    <div class="flex flex-column w-full h-full gap-4 pb-4">
      <div v-for="product in filteredProducts"
           :key="product.id"
           class="flex w-full h-full gap-4 border-round-xl card-bg-color p-4">

        <div class="">
          <div class="w-15rem h-15rem border-round-lg overflow-hidden">
            <img :src="product.imageUrl"
                 :alt="product.name"
                 class="w-full h-full object-cover"/>
          </div>
        </div>


        <div class="flex-1 flex flex-column gap-3">
          <div class="flex justify-content-between align-items-start">
            <div>
              <h3 class="text-xl font-bold mb-1 text-gray-900">{{ product.name }}</h3>
              <span class="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                {{ product.category }}
              </span>
            </div>
            <div class="flex gap-2">
              <span v-if="product.isRecommended"
                    class="inline-block px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                Рекомендуем
              </span>
              <span v-if="product.isAvailable"
                    class="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                В наличии
              </span>
            </div>
          </div>

          <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>
          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-900">Состав:</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(ingredient, idx) in product.composition"
                    :key="idx"
                    class="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                {{ ingredient }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="text-base font-semibold mb-2 text-gray-900">Размеры и цены:</h4>
            <div class="flex flex-wrap gap-3">
              <div v-for="size in product.sizes"
                   :key="size.name"
                   class="border-1 border-gray-200 rounded-lg p-3 bg-white">
                <div class="font-medium text-gray-900">{{ size.name }}</div>
                <div class="text-sm text-gray-600 mb-1">
                  {{ size.volume || size.weight }}
                </div>
                <div class="text-lg font-bold text-blue-600">{{ size.price }} ₽</div>
              </div>
            </div>
          </div>

          <div class="flex gap-4 text-sm text-gray-600">
            <div class="flex align-items-center gap-1">
              <i class="pi pi-clock"></i>
              <span>Приготовление: {{ product.preparationTime }}</span>
            </div>
            <div v-if="product.allergens"
                 class="flex align-items-center gap-1">
              <i class="pi pi-exclamation-triangle"></i>
              <span>Аллергены: {{ product.allergens.join(', ') }}</span>
            </div>
          </div>
        </div>
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