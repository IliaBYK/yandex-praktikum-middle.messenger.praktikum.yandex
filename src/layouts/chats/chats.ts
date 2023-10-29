import { HelperOptions } from 'handlebars';

export default function chats(this: object, { fn }: HelperOptions): string {
    // language=hbs
    return `
    <div class="chats">
      <aside class="chats__sidebar">
        <div class="chats__sidebar-header">
          <a class="chats__profile button">Профиль
            <svg class="chats__svg" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M1 9L5 5L1 1" stroke="#999999"/>
            </svg>
          </a>
          <div class="chats__search-container">
            <input placeholder="Поиск" class="chats__search"/>
          </div>
        </div>
        <ul class="chats__cards">
          ${fn(this)}
        </ul>

      </aside>
      <main class="chats__message-area">
         <header class="chats__header">
          <a class="chats__img-link" href="../../pages/profileEdit/profileEdit.html">
            <img class="chats__img chats__img_place_header button" src="../../images/avatar.png"/>
          </a>
          <h2 class="chats__name">Вадим</h2>
          <button class="chats__menu button"></button>
        </header>

        <div class="chats__main">
          <time class="chats__date">19 июня</time>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
          <p class="chats__message chats__message_companion">
            Привет! Смотри, тут всплыл интересный кусок лунной 
            космической истории — НАСА в какой-то момент попросила 
            Хассельблад адаптировать модель SWC для полетов на Луну. 
            Сейчас мы все знаем что астронавты летали с 
            моделью 500 EL — и к слову говоря, все тушки этих камер 
            все еще находятся на поверхности Луны, так как астронавты 
            с собой забрали только кассеты с пленкой. 
            Хассельблад в итоге адаптировал SWC для космоса, 
            но что-то пошло не так и на ракету они так никогда и 
            не попали. Всего их было произведено 25 штук, одну из 
            них недавно продали на аукционе за 45000 евро.
            <time class="chats__time chats__time_place_message">12:00</time>
          </p>
          <p class="chats__message chats__message_user">Круто!<time class="chats__time chats__time_place_message">12:00</time></p>
        </div>

        <footer class="chats__footer">
          <button class="chats__attach-btn button"></button>
          <input class="chats__input" placeholder="Сообщение"/>
          <button class="chats__send-btn button"></button>
        </footer>
      </main>
    </div>
  `
}