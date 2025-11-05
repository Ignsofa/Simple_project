import { add, capitalize, formatNumber, Logger, type LogLevel } from './index.js';
import { config } from './config.js';

console.log('sum(2.0 ok):', add([2, 3, 4])); // новий виклик add з масивом
console.log('capitalize(typed):', capitalize('hello'));
console.log('format(ok):', formatNumber(123.456)); // precision береться з APP_PRECISION

// Logger
const logger = new Logger(config.LOG_LEVEL as LogLevel);
logger.info('Application started');
logger.debug('Extra debug info');
