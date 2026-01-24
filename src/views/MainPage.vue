<script>

export default {
  data() {
    return {
      currentIndex: 0,
      events: [
        {
          name: "Cходка милф",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          timestart: "14:00",
          timeend: "16:00",
          img: "https://i.pinimg.com/1200x/5c/a7/24/5ca724eba57508d56fb92a9dcf2bb485.jpg",
          description: "Мой отец довольно таки заядлый рыболов. Он частенько приносит домой очень крупных тунцов, сомов, щук и судаков.\n" +
              "\n" +
              "Но больше всего мне нравились тунцы, золотые гиганты."
        },
        {
          name: "Cходка милф",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          timestart: "14:00",
          timeend: "16:00",
          img: "https://i.pinimg.com/1200x/5c/a7/24/5ca724eba57508d56fb92a9dcf2bb485.jpg",
          description: "Мой отец довольно таки заядлый рыболов. Он частенько приносит домой очень крупных тунцов, сомов, щук и судаков.\n" +
              "\n" +
              "Но больше всего мне нравились тунцы, золотые гиганты."
        },
        {
          name: "Cходка милф",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          timestart: "14:00",
          timeend: "16:00",
          img: "https://i.pinimg.com/1200x/5c/a7/24/5ca724eba57508d56fb92a9dcf2bb485.jpg",
          description: "Мой отец довольно таки заядлый рыболов. Он частенько приносит домой очень крупных тунцов, сомов, щук и судаков.\n" +
              "\n" +
              "Но больше всего мне нравились тунцы, золотые гиганты."
        }
      ],
      locations:[
        {
          name: "Something",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          times: ['Пн-Пт: 08:00 - 23:00', 'Сб-Вс: 09:00 - 23:00'],
          phone: "+7(909) 487-78-86",
          img: "https://i.pinimg.com/1200x/82/f9/a7/82f9a77731896c20bf1ee47212d509d3.jpg"
        },
        {
          name: "Sometimes",
          address: "КБР, г.Нальчик, ул.Карашаева 198",
          times: ['Пн-Пт: 08:00 - 23:00', 'Сб-Вс: 09:00 - 23:00'],
          phone: "+7(909) 487-78-86",
          img: "https://gastro-norma.ru/upload/iblock/917/c3nlrpu5k7x16gypj1vs7dxacvz8lhgn.webp"
        }
      ]
    };
  },

  components: {

  },

  computed: {
    currentLocation() {
      return this.locations[this.currentIndex];
    }
  },

  methods: {
    nextLocation() {
      if (this.currentIndex < this.locations.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevLocation() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.locations.length - 1;
      }
    }
  },
};
</script>

<template>
  <div class="flex flex-column h-screen w-full gap-4">
    <div class="flex flex-column slogan-bg mx-4 min-h-screen align-items-center justify-content-center border-round-3xl">
      <label class="text-8xl">Coffee&Code</label>
      <label class="text-7xl text-center">Место, где кофе встречается с креативом</label>
    </div>

    <div id="events" class="text-3xl md:text-5xl font-semibold text-gray-900 py-4 text-center">
      <span class="label_text_color">Тематические дни</span> —
      чтобы каждый ваш визит был особенным.<br>
      Новые скидки, меню и настроение каждый день недели!
    </div>

    <div id="events" class="flex flex-row justify-content-around px-4 mx-4 gap-4 pb-4">
      <div v-for="ev in events" class="flex flex-column align-items-center p-4 gap-4 text-xl w-full text-gray-900">
        <img class="w-full border-round-3xl shadow-6"
             :src="ev.img"
             :alt="ev.name"/>

        <div class="flex flex-column p-4 gap-4 bg-white border-round-3xl card-bg-color">
          <p class="w-full text-center text-2xl font-semibold">
            {{ ev.name }}
          </p>
          <p class="w-full">
            {{ev.description}}
          </p>

          <p class="pi pi-map-marker text-lg w-full text-left">
            Место: {{ev.address}}
          </p>

          <p class="pi pi-clock text-lg w-full text-left">
            Время: {{ev.timestart}} - {{ev.timeend}}
          </p>
        </div>

      </div>
    </div>

    <div id="places" class="text-8xl font-medium text-gray-900 text-center">
      Наши филиалы
    </div>

    <div class="flex align-items-center justify-content-center border-round-3xl gap-2 p-4">
      <button class="pi pi-arrow-left text-7xl text-gray-900 border-none bg-transparent cursor-pointer ml-auto"
              @click="prevLocation"/>

      <div class="flex flex-row gap-4 text-xl text-gray-900 bg-transparent align-items-center
           justify-content-center m-4">
        <img class="flex-shrink-0 w-full md:w-6 h-25rem border-round-3xl shadow-6"
             :src="currentLocation.img"
             :alt="currentLocation.name"/>

        <div class="flex flex-column p-4 text-left card-bg-color border-round-3xl w-full md:w-6 h-25rem">
          <div class="flex text-4xl font-bold my-2">
            {{currentLocation.name}}
          </div>

          <div class="flex flex-column gap-2 h-full text-left justify-content-center">
            <div class="text-xl">
              <b>Адрес:</b><br>
              {{currentLocation.address}}
            </div>

            <div class="text-xl">
              <b>Телефон:</b><br>
              {{currentLocation.phone}}
            </div>

            <div class="text-xl">
              <p class="font-bold mb-2">Режим работы:</p>
              <p v-for="time in currentLocation.times" :key="time">{{time}}</p>
            </div>
          </div>

        </div>
      </div>

      <button class="pi pi-arrow-right text-7xl text-gray-900 border-none bg-transparent cursor-pointer mr-auto"
              @click="nextLocation"/>
    </div>

    <div id="locations" class="text-3xl md:text-4xl font-semibold text-gray-900 py-4 text-center">
      <span class="label_text_color">Больше филиалов — больше возможностей!</span><br>
      Мы позаботились о том, чтобы качественный кофе и уютная атмосфера<br>
      были доступны вам в любой части города. В каждом филиале —<br>
      одинаково высокий уровень обслуживания и неизменно вкусные напитки!
    </div>

    <div id="bonuses" class="text-8xl font-medium text-gray-900 text-center">
      Бонусная программа
    </div>

    <div class="flex flex-row justify-content-around px-4 gap-6">
      <div class="flex flex-row p-4 gap-2 w-full">
        <div class="flex text-8xl label_text_color">1</div>
        <div class="flex flex-column">
          <p class="text-gray-900 text-3xl">Копите баллы:</p>
          <p class="text-gray-900 text-xl">
            За каждый заказ
            вы получаете баллы, которые автоматически начисляются на ваш бонусный счет.
          </p>
        </div>
      </div>

      <div class="flex flex-row p-4 gap-2 w-full">
        <div class="flex text-8xl label_text_color">2</div>
        <div class="flex flex-column">
          <p class="text-gray-900 text-3xl">Копите баллы:</p>
          <p class="text-gray-900 text-xl">
            За каждый заказ
            вы получаете баллы, которые автоматически начисляются на ваш бонусный счет.
          </p>
        </div>
      </div>

      <div class="flex flex-row p-4 gap-2 w-full">
        <div class="flex text-8xl label_text_color">3</div>
        <div class="flex flex-column">
          <p class="text-gray-900 text-3xl">Копите баллы:</p>
          <p class="text-gray-900 text-xl">
            За каждый заказ
            вы получаете баллы, которые автоматически начисляются на ваш бонусный счет.
          </p>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-content-center pb-4">
      <button class="text-2xl px-6 py-2 border-none border-round-2xl bg-orange-600">Присоединиться</button>
    </div>

  </div>
</template>

<style scoped>
.card-bg-color {
  background-color: #ffffff !important;
}

.label_text_color {
  color: #ac3b61;
}

.slogan-bg {
  background-image:
      url("https://i0.wp.com/static.tildacdn.com/tild3438-3232-4336-b134-623865393938/photo.png?ssl=1");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>