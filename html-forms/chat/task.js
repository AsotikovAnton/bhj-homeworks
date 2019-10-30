const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const messageStr = document.querySelector(".chat-widget__input");

messages.innerHTML += `
  <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;

chat.addEventListener("click", function() {
    chat.classList.add("chat-widget_active");
});

messageStr.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
        messages.innerHTML += sendMessage();
        event.target.value = "";
        messages.innerHTML += sendMessageRobot();
    }
});

const messagesRobot = [
    "Здарова!",
    "Чё кого?",
    "Послушайте, че бы вы там не продавали, я не буду это покупать!",
    "Ну не знаю, мистер Уайт."
]

const sendMessage = function() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let textMessage = event.target.value;

    return `<div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${textMessage}</div>
            </div>`
}

const sendMessageRobot = function() {
    let hoursMessageRobot = new Date().getHours();
    let minutesMessageRobot = new Date().getMinutes();
    const random = Math.floor(Math.random() * messagesRobot.length);
    robotsTextMessage = messagesRobot[random];

    return `<div class="message">
                <div class="message__time">${hoursMessageRobot}:${minutesMessageRobot}</div>
                <div class="message__text">${robotsTextMessage}</div>
            </div>`
}