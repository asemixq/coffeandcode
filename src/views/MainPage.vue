<script>
import {Dialog} from "primevue";

export default {
  data() {
    return {
      currentIndex: 0,
      showDialog: false,
      formData: {
        lastname: '',
        firstname: '',
        phone: '',
        birthdate: '',
        email: ''
      },
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
          name: "Kinki",
          address: "Москва, ул. Осенняя, 11",
          times: ['Пн-Пт: 08:00 - 00:00', 'Сб-Вс: 09:00 - 23:00'],
          phone: "+7 (499) 495 44 01",
          img: "https://i.pinimg.com/1200x/82/f9/a7/82f9a77731896c20bf1ee47212d509d3.jpg "
        },
        {
          name: "Almanac",
          address: "Москва, Лесная, д. 9",
          times: ['Пн-Пт: 12:00 - 01:00', 'Сб-Вс: 12:00 - 00:00'],
          phone: "+7 (499) 495 44 93",
          img: "https://gastro-norma.ru/upload/iblock/917/c3nlrpu5k7x16gypj1vs7dxacvz8lhgn.webp"
        },
        {
          name: "Метрополис",
          address: "Москва, Ленинградское шоссе, д. 16А, стр. 4",
          times: ['Пн-Вс: 09:00 - 23:00'],
          phone: "+7 (499) 495 15 72",
          img: "https://gastro-norma.ru/upload/iblock/917/c3nlrpu5k7x16gypj1vs7dxacvz8lhgn.webp"
        }
      ]
    };
  },

  components: {
    Dialog
  },

  computed: {
    currentLocation() {
      return this.locations[this.currentIndex];
    },
    isFormValid() {
      return (
          this.formData.lastname.length >= 2 &&
          this.formData.firstname.length >= 2 &&
          this.formData.phone.length >= 10 &&
          this.formData.birthdate &&
          this.formData.email.includes('@')
      );
    }
  },

  methods: {
    closeDialog() {
      this.showDialog = false;
      this.formData = {
        lastname: '',
        firstname: '',
        phone: '',
        birthdate: '',
        email: ''
      }
    },
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
    },
    handleSubmit() {
      if (this.isFormValid) {
        this.showDialog = true;
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

    <div id="places" class="text-7xl font-medium text-gray-900 text-center">
      Наши филиалы
    </div>

    <div id="locations" class="text-3xl md:text-4xl text-gray-900 pt-4 text-center">
      <span class="label_text_color font-semibold">Больше филиалов — больше возможностей!</span><br>
      Мы позаботились о том, чтобы качественный кофе и уютная атмосфера<br>
      были доступны вам в любой части города. В каждом филиале —<br>
      одинаково высокий уровень обслуживания и неизменно вкусные напитки!
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

    <div id="bonuses" class="text-8xl font-medium text-gray-900 text-center">
      Бонусная программа
    </div>

    <div class="mx-6">
      <div id="bonus" class="flex justify-content-between flex-row text-xl md:text-2xl border-round-3xl text-gray-900 p-4">
        <div>
          <span class="label_text_color text-2xl md:text-3x font-semibold">Ваша любовь к кофе окупается!</span><br>
          Присоединяйтесь к нашей бонусной программе и получайте<br>
          скидки, специальные предложения и подарки за каждую покупку.<br>
          Чем чаще вы к нам — тем больше бонусов накапливаете!<br>
          <span class="font-semibold">Отсканируйте qr-code или зарегистрируйтесь по кнопке ниже.</span>
        </div>

        <div class="w-12rem h-12rem flex align-items-center bg-transparent justify-content-center">
          <img src="../images/c0ff1bb7b16e9820650c4f326ee87710.png" alt="QR-код бонусной программы"
               class="w-full h-full border-round-2xl">
        </div>
      </div>
    </div>

    <div class="flex w-full px-7 pb-4 gap-4">

      <div class="flex flex-column md:flex-column justify-content-between gap-4 w-full">
        <div class="flex flex-row p-4 gap-3 w-full border-2 card-bg-color border-round-2xl">
          <div class="flex-shrink-0 h-full align-items-center">
            <div class="flex text-6xl label_text_color bg-primary-100 border-circle w-5rem h-5rem align-items-center justify-content-center">
              1
            </div>
          </div>
          <div class="flex flex-column gap-2">
            <p class="text-gray-900 text-2xl font-bold mb-2">Зарегистрируйтесь</p>
            <p class="text-gray-900 text-xl">
              ✔️ Сканируйте QR-код для мгновенной регистрации.<br>
              ✔️ На номер телефона мы пришлем SMS с деталями.<br>
              <br>
              Либо воспользуйтесь классическим способом:<br>
              Заполните контактную форму, и мы отправим вам подробное приглашение и условия программы на электронную почту.<br>
              Ожидайте письмо в течение нескольких минут!
            </p>
          </div>
        </div>

        <div class="flex flex-row p-4 gap-3 w-full border-2 card-bg-color border-round-2xl">
          <div class="flex-shrink-0">
            <div class="flex text-6xl label_text_color bg-primary-100 border-circle w-5rem h-5rem align-items-center justify-content-center">
              2
            </div>
          </div>
          <div class="flex flex-column gap-2">
            <p class="text-gray-900 text-2xl font-bold mb-2">Копите баллы</p>
            <p class="text-gray-900 text-xl">
              За каждый совершенный заказ вы гарантированно получаете бонусные баллы. ✨<br>
              Они моментально и автоматически зачисляются на ваш персональный счет в программе лояльности,<br>
              где накапливаются и никогда не сгорают.
            </p>
          </div>
        </div>

        <div class="flex flex-row p-4 gap-3 w-full border-2 card-bg-color border-round-2xl">
          <div class="flex-shrink-0">
            <div class="flex text-6xl label_text_color bg-primary-100 border-circle w-5rem h-5rem align-items-center justify-content-center">
              3
            </div>
          </div>
          <div class="flex flex-column gap-2">
            <p class="text-gray-900 text-2xl font-bold mb-2">Получайте выгоду</p>
            <p class="text-gray-900 text-xl">
              Ваши баллы открывают доступ к целому каталогу наград. Вы можете:<br>
              <br>
              🔹Получить бесплатный напиток из нашего меню.<br>
              🔹Использовать баллы для скидки на следующий заказ.<br>
              🔹Получить доступ к специальным предложениям, созданным специально для наших постоянных гостей.<br>
            </p>
          </div>
        </div>
      </div>

      <form
          id="contact-form"
          class="flex gap-4 flex-column text-2xl text-gray-900 border-3 border-round-3xl border-white p-4 w-6"
          @submit.prevent="handleSubmit"
      >
        <div class="flex flex-column text-3xl text-center w-full">
          <p class="text-4xl label_text_color">Регистрация</p>
          <p>в программе лояльности</p>
        </div>

        <div class="flex flex-column gap-2">
          <label for="lastname">Ваша фамилия</label>
          <input
              type="text"
              id="lastname"
              name="lastname"
              v-model="formData.lastname"
              placeholder="Введите фамилию"
              required
              minlength="2"
              class="card-bg-color text-xl border-none p-2 border-round-xl text-gray-900"
          >
        </div>

        <div class="flex flex-column gap-2">
          <label for="firstname">Ваше имя</label>
          <input
              type="text"
              id="firstname"
              name="firstname"
              v-model="formData.firstname"
              placeholder="Введите имя"
              required
              minlength="2"
              class="card-bg-color text-xl border-none p-2 border-round-xl text-gray-900"
          >
        </div>

        <div class="flex flex-column gap-2">
          <label for="phone">Номер телефона</label>
          <input
              type="tel"
              id="phone"
              name="phone"
              v-model="formData.phone"
              placeholder="+7 (999) 123-45-67"
              required
              pattern="[\+\-\d\s\(\)]{10,}"
              class="card-bg-color text-xl border-none p-2 border-round-xl text-gray-900"
          >
        </div>

        <div class="flex flex-column gap-2">
          <label for="birthdate">Дата рождения</label>
          <input
              type="date"
              id="birthdate"
              name="birthdate"
              v-model="formData.birthdate"
              required
              max="2024-12-31"
              class="card-bg-color text-xl border-none p-2 border-round-xl text-gray-900"
          >
        </div>

        <div class="flex flex-column gap-2">
          <label for="email">Электронная почта</label>
          <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              placeholder="example@mail.ru"
              required
              class="card-bg-color text-xl border-none p-2 border-round-xl text-gray-900"
          >
        </div>

        <div class="flex w-full justify-content-center h-full align-items-center">
          <button type="submit"
                  class="text-2xl px-6 py-2 border-none border-round-2xl btn-bg-color cursor-pointer h-fit"
                  :disabled="!isFormValid">
            Присоединиться
          </button>
        </div>
      </form>

      <!--Диалоговое окно с уведомлением о регистрации-->
      <Dialog :visible="showDialog" :closable="false" :showHeader="false"
              class="flex align-items-center p-4 bg-white text-gray-900 text-2xl p-0 gap-2">
        <div>
          <b>Поздравляю!</b><br>
          Вы зарегистрировались в нашей бонусной программе!<br>
        </div>

        <div class="flex w-full pt-4 justify-content-center align-items-">
          <button type="submit"
                  class="text-2xl px-6 py-2 border-none border-round-2xl btn-bg-color cursor-pointer h-fit"
                  @click="closeDialog">
            Спасибо
          </button>
        </div>

      </Dialog>
    </div>

    <div id="books" class="flex flex-row gap-2 p-8 justify-content-between footer-bg-color">
      <div class="flex flex-column gap-2">
        <p class="text-6xl font-italic">Almanac</p>
        <p class="text-xl font-light cursor-pointer">almanac@yandex.ru</p>
        <p class="text-xl font-light cursor-pointer">+7 (963) 990 02 22</p>
      </div>

      <div class="flex flex-column gap-2">
        <p class="text-3xl">Меню</p>
        <p class="text-xl font-light cursor-pointer">Сотрудничество</p>
        <p class="text-xl font-light cursor-pointer">Открыть кофейню</p>
        <p class="text-xl font-light cursor-pointer">Работа</p>
        <p class="text-xl font-light cursor-pointer">Адреса</p>

      </div>

      <div class="flex flex-column gap-2">
        <p class="text-3xl">Следи за нами</p>

        <div class="flex flex-row gap-3 mt-2">
          <a href="https://t.me/1" target="_blank"
             class="inline-flex align-items-center justify-content-center w-3rem h-3rem border-circle bg-transparent
                    no-underline cursor-pointer">
            <i class="pi pi-telegram text-2xl text-white"></i>
          </a>

          <a href="https://vk.com/1" target="_blank"
             class="inline-flex align-items-center justify-content-center w-3rem h-3rem border-circle bg-transparent
                    no-underline cursor-pointer">
            <i class="pi pi-whatsapp text-2xl text-white"></i>
          </a>

          <a href="https://instagram.com/1" target="_blank"
             class="inline-flex align-items-center justify-content-center w-3rem h-3rem border-circle bg-transparent
             no-underline cursor-pointer">
            <i class="pi pi-instagram text-2xl text-white"></i>
          </a>
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

.slogan-bg {
  background-image:
      url("https://i0.wp.com/static.tildacdn.com/tild3438-3232-4336-b134-623865393938/photo.png?ssl=1");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>