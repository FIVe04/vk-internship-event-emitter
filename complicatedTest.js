import { EventEmitter } from "./EventEmitter.js";

const emitter = new EventEmitter();

const logData = (data) => console.log('[1 DATA] event received:', data);
const logData2 = (data) => console.log('[2 DATA] event received:', data);

const logError = (error) => console.error('[1 ERROR] event received:', error);

emitter.on('data', logData);
emitter.on('data', logData2);
emitter.on('error', logError);

// Испускание событий
emitter.emit('data', { message: 'Test 1' });  
emitter.emit('error', { message: 'Error 1' }); 


// Удаление одного обработчика
emitter.off('data', logData);

// Испускание события после удаления обработчика
emitter.emit('data', { message: 'Test 3'});  
emitter.emit('error', { message: 'Another error' }); 

// Удаление всех обработчиков для события 'error'
emitter.removeAllListeners('error');

// Испускание события 'error' после удаления всех обработчиков
emitter.emit('error', { message: 'This will not be received' });
