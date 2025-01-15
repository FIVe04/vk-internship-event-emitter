class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    // Подписка на событие
    on(eventName, listener) {
        if (typeof listener !== 'function') {
            throw new TypeError('Listener must be a function');
        }

        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        this.events.get(eventName).push(listener);
    }

    // Испускание события
    emit(eventName, ...args) {
        const listeners = this.events.get(eventName);
        if (!listeners || listeners.length === 0) {
            return;
        }

        listeners.forEach(listener => {
        try {
            listener(...args);
        } catch (error) {
            console.error(`Error in listener for event "${eventName}":`, error);
        }
        });
    }

    // Удаление конкретного обработчика для события
    off(eventName, listener) {
        const listeners = this.events.get(eventName);
        if (!listeners) return;

        // Находим индекс обработчика и удаляем его
        const index = listeners.indexOf(listener);
        if (index !== -1) {
            listeners.splice(index, 1);
        }
    }

    // Удаление всех обработчиков для события
    removeAllListeners(eventName) {
        if (this.events.has(eventName)) {
            this.events.delete(eventName);
        }
    }
}

module.exports = { EventEmitter };
  
  