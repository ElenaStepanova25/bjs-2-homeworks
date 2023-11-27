//Задача 1. Будильник-колыбельная
class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
    addClock(time, callback) {
        if (!time || !callback) {
           throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.some(item => item.time === time)) {
           console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({ callback, time, canCall: true })
    }
  
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
    }
  
    getCurrentFormattedTime() {
        const timeFirst = new Date();
        console.log(timeFirst);
        const hours = timeFirst.getHours().toString();
        const minutes = timeFirst.getMinutes().toString();
        let resultTime = timeFirst.toLocaleTimeString("ru-Ru", {
           hour: "2-digit",
           minute: "2-digit",
        });
        console.log(new Date());
        return resultTime;
    }
  
    start() {
        if (this.intervalId !== null) {
           return
        }
        this.intervalId = setInterval(
           () => {
              this.alarmCollection.forEach(
                 (alarm) => {
                    if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                       alarm.canCall = false;
                       alarm.callback();
                    }
                 }
              )
           } , 1000);
    }
  
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
  
    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true);
    }
  
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


