import { EventEmitter } from "./EventEmitter.js";

const emitter = new EventEmitter();

// Подписка на событие
const logData = (data) => console.log(data);
emitter.on('data', logData);

// Испускание события
emitter.emit('data', { message: 'Test' });

// Удаление подписки
emitter.off('data', logData);

emitter.emit('data', { message: 'Test after off' });
