<script xmlns="http://www.w3.org/1999/html">
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  data() {
    return {
      events: [
        {
          name: "сходка милф",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          timestart: "14:00",
          timeend: "16:00",
          description: "Мой отец довольно таки заядлый рыболов. Он частенько приносит домой очень крупных тунцов, сомов, щук и судаков.\n" +
              "\n" +
              "Но больше всего мне нравились тунцы, золотые гиганты."
        },
        {
          name: "сходка милф",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          timestart: "14:00",
          timeend: "16:00",
          description: "Мой отец довольно таки заядлый рыболов. Он частенько приносит домой очень крупных тунцов, сомов, щук и судаков.\n" +
              "\n" +
              "Но больше всего мне нравились тунцы, золотые гиганты."
        },
        {
          name: "сходка милф",
          address: "КБР, г.Нальчик, ул.Шогенцукова 10",
          timestart: "14:00",
          timeend: "16:00",
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
  }
};
</script>

<template>
  <div class="flex flex-column h-screen w-full gap-4">
    <div class="flex flex-column slogan-bg mx-4 min-h-screen align-items-center justify-content-center border-round-3xl">
      <label class="text-8xl">Coffee&Code</label>
      <label class="text-7xl text-center">Место, где кофе встречается с креативом</label>
    </div>

    <div id="places" class="text-8xl font-medium text-gray-900 text-center">
      Наши филиалы
    </div>

    <div class="flex flex-row justify-content-around p-4 m-4 border-round-3xl gap-4 pb-4 bg-gray-900">
      <div v-for="l in locations" class="flex flex-column p-4 gap-2 text-xl w-full bg-white text-gray-900 border-round-3xl
           border-gray-900 align-items-center">
        <div class="flex w-fit text-3xl font-semibold my-3">
          {{l.name}}
        </div>
        <div class="flex flex-column align-items-center">
          <img class="w-8 border-round-3xl" :src="l.img" />
          <div class="flex w-full gap-2 p-2 w-fit flex-column">

            <div class="text-xl">
              <b>Адрес:</b> {{l.address}}
            </div>

            <div class="text-xl">
              <b>Телефон:</b> {{l.phone}}
            </div>

            <div class="text-xl">
              <p><b>Режим работы:</b></p>
              <p v-for="time in l.times">{{time}}</p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div id="events" class="text-8xl font-medium text-gray-900 text-center">
      События
    </div>

    <div class="flex flex-row justify-content-around px-4 gap-6 pb-4">
      <div v-for="ev in events" class="flex flex-column p-4 gap-2 text-xl w-full bg-gray-900 text-white border-round-3xl">
        <p class="w-full text-center text-2xl font-semibold pb-2 mb-2 border-bottom-2 border-white">
          {{ ev.name }}
        </p>
        <p class="w-full mb-2 pb-3 border-bottom-2 border-white">
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

    <div id="bonuses" class="text-8xl font-medium text-gray-900 text-center">
      Бонусная программа
    </div>

    <div class="flex flex-row justify-content-around px-4 gap-6">
      <div class="flex flex-row p-4 gap-2 text-xl w-full">
        <div class="flex text-8xl label_text_color">1</div>
        <div class="flex flex-column">
          <p class="text-gray-900 text-5xl">Копите баллы:</p>
          <p class="text-gray-900 text-3xl">
            За каждый заказ
            вы получаете баллы, которые автоматически начисляются на ваш бонусный счет.
          </p>
        </div>
      </div>

      <div class="flex flex-row p-4 gap-2 text-xl w-full">
        <div class="flex text-8xl label_text_color">2</div>
        <div class="flex flex-column">
          <p class="text-gray-900 text-5xl">Копите баллы:</p>
          <p class="text-gray-900 text-3xl">
            За каждый заказ
            вы получаете баллы, которые автоматически начисляются на ваш бонусный счет.
          </p>
        </div>
      </div>

      <div class="flex flex-row p-4 gap-2 text-xl w-full">
        <div class="flex text-8xl label_text_color">3</div>
        <div class="flex flex-column">
          <p class="text-gray-900 text-5xl">Копите баллы:</p>
          <p class="text-gray-900 text-3xl">
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
.my-font-color {
  color: #123c69;
}

.button_menu_bg {
  background-color: #ac3b61;
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