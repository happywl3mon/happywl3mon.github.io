class CountdownTimer {
    constructor(deadline) {
        this.deadline = new Date(deadline);
        this.updateTimer();
        this.start();
    }

    declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    }

    updateTimer() {
        const now = new Date();
        const diff = this.deadline - now;

        if (diff <= 0) {
            document.querySelector('timer').innerHTML = "С Новым годом!";
            return;
        }

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        document.getElementById('days-title').textContent = this.declensionNum(days, ['день', 'дня', 'дней']);
        document.getElementById('hours-title').textContent = this.declensionNum(hours, ['час', 'часа', 'часов']);
        document.getElementById('minutes-title').textContent = this.declensionNum(minutes, ['минута', 'минуты', 'минут']);
        document.getElementById('seconds-title').textContent = this.declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    start() {
        setInterval(() => this.updateTimer(), 1000); // Обновляем таймер каждую секунду
    }
}

const timer = new CountdownTimer('2026-01-01T00:00:00'); // Установите дату нового года