import { add, capitalize, formatNumber, Logger, type LogLevel } from './index.js';
import { config } from './config.js';

// Виклики базових функцій
console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

// Виклик formatNumber з дефолтною точністю з .env
console.log('format(ok):', formatNumber(123.456));

// Правильний Logger з типом з .env (пройшло валідацію zod)
const logger = new Logger(config.LOG_LEVEL as LogLevel);

logger.info('Application started');
logger.debug('Extra debug info');
