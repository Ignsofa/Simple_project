# Simple_project

Навчальна бібліотека на TypeScript для демонстрації базових утиліт і логера.

Мета проєкту — показати мінімальний, але якісний сетап npm-пакету з:

- Підтримкою ESM та CJS;
- Типами TypeScript (`.d.ts`) і експортами через `"exports"` у package.json;
- Використанням `.env` через `dotenv` та валідацією через `zod`;
- Прикладами простих функцій (`add`, `capitalize`, `formatNumber`) і класу `Logger`.

---

## Швидкий старт

1. Встановити залежності:

```bash
npm install
```

2. Запустити демо:

```bash
npm run demo
```
Демо викликає функції бібліотеки та показує результат у консоль.

3. Збірка пакету:

```bash
npm run build
```

Результат зберігається у dist/:

- CommonJS: dist/index.cjs

- ES Module: dist/index.mjs

- Типи: dist/index.d.ts

Додаткові скрипти

- Лінтинг: npm run lint / автофікс npm run lint:fix

- Форматування: npm run format:check / npm run format

- Type-check: npm run typecheck
   
## Використання

Імпорт
- ES Module:
```bash
import { add, capitalize, formatNumber, Logger, type LogLevel } from 'simple_project';
```
- CommonJS:
```bash
const { add, capitalize, formatNumber, Logger } = require('simple_project');
```

Функції
- add
```bash
const sum = add([2, 3, 4]); // 9
```

- capitalize
```bash
const title = capitalize('hello'); // "Hello"
```

- formatNumber
```bash
const a = formatNumber(123.456); // точність з APP_PRECISION
```

```bash
const b = formatNumber(123.456, { precision: 3 }); // "123.456"
```

- Logger
```bash
const logger = new Logger('info' as LogLevel);
```

```bash
logger.info('Application started'); // [INFO] Application started
```

```bash
logger.debug('Extra debug'); // Не виведеться для рівня "info"
```
    
## Конфігурація через .env

Файл .env у корені проекту:
```bash
APP_PRECISION=2
```

```bash
LOG_LEVEL=info
```

- APP_PRECISION — точність форматування чисел (0–10)

- LOG_LEVEL — рівень логування: silent | info | debug

Еволюція проєкту (Semantic Versioning)

- 0.1.0 — базові утиліти add, capitalize

- 0.2.0 — типізація замість any

- 0.3.0 — додано formatNumber і тип NumberFormatOptions

- 0.4.0 — generic-функція groupBy

- 0.5.0 — клас Logger, валідація .env

- 1.0.0 — стабілізація публічного API, заборона any, додано експорти

- 2.0.0 — breaking change: add тепер приймає масив number[]

Релізи та теги

- Репозиторій: https://github.com/Ignsofa/Simple_project

- Теги релізів: https://github.com/Ignsofa/Simple_project/tags

Ліцензія: MIT

Скріншоти:

### Task 1 (v0.0.0)

![Task 1.1](Task/1.1.jpg)

![Task 1.2](Task/1.2.jpg)

![Task 1.3](Task/1.3.jpg)

![Task 1.4](Task/1.4.jpg)

![Task 1.5](Task/1.5.jpg)

![Task 1.6](Task/1.6.jpg)

![Task 1.7](Task/1.7.jpg)

![Task 1.10](Task/1.10.jpg)

![Task 1.11](Task/1.11.jpg)

![Task 1.12](Task/1.12.jpg)

![Task 1.13](Task/1.13.jpg)

### Task 2 (v0.1.0)

![Task 2.1](Task/2.1.jpg)

![Task 2.2](Task/2.2.jpg)  

![Task 2.3](Task/2.3.jpg)

![Task 2.3.2](Task/2.3.2.jpg)

![Task 2.3.3](Task/2.3.3.jpg)

![Task 2.4](Task/2.4.jpg)

![Task 2.5](Task/2.5.jpg)

![Task 2.6](Task/2.6.jpg)

![Task 2.6.2](Task/2.6.2.jpg)

![Task 2.6.3](Task/2.6.3.jpg)

### Task 3 (v0.2.0)

![Task 3.1](Task/3.1.jpg)

![Task 3.2](Task/3.2.jpg)

![Task 3.3](Task/3.3.jpg)

![Task 3.4](Task/3.4.jpg)

![Task 3.5](Task/3.5.jpg)

![Task 3.6](Task/3.6.jpg)

![Task 3.6.2](Task/3.6.2.jpg)

### Task 4 (v0.3.0)

![Task 4.1](Task/4.1.jpg)

![Task 4.2](Task/4.2.jpg)

![Task 4.3](Task/4.3.jpg)

![Task 4.4](Task/4.4.jpg)

![Task 4.5](Task/4.5.jpg)

![Task 4.6](Task/4.6.jpg)

![Task 4.6.2](Task/4.6.2.jpg)

### Task 5 (v0.4.0)

![Task 5.1](Task/5.1.jpg)

![Task 5.2](Task/5.2.jpg)

![Task 5.3](Task/5.3.jpg)

![Task 5.4](Task/5.4.jpg)

![Task 5.5](Task/5.5.jpg)

![Task 5.6](Task/5.6.jpg)

![Task 5.6.2](Task/5.6.2.jpg)

### Task 6 (v0.5.0)

![Task 6.1](Task/6.1.jpg)

![Task 6.2](Task/6.2.jpg)

![Task 6.3](Task/6.3.jpg)

![Task 6.4](Task/6.4.jpg)

![Task 6.4.2](Task/6.4.2.jpg)

![Task 6.4.3](Task/6.4.3.jpg)

![Task 6.5](Task/6.5.jpg)

![Task 6.5.2](Task/6.5.2.jpg)

![Task 6.6](Task/6.6.jpg)

![Task 6.6.2](Task/6.6.2.jpg)

### Task 7 (v1.0.0)

![Task 7.2](Task/7.2.jpg)

![Task 7.3](Task/7.3.jpg)

![Task 7.4](Task/7.4.jpg)

![Task 7.5](Task/7.5.jpg)

![Task 7.5.2](Task/7.5.2.jpg)

![Task 7.5.3](Task/7.5.3.jpg)

![Task 7.6](Task/7.6.jpg)

![Task 7.6.2](Task/7.6.2.jpg)

### Task 8 (v2.0.0)

![Task 8.1](Task/8.1.jpg)  

![Task 8.2](Task/8.2.jpg)  

![Task 8.3](Task/8.3.jpg)  

![Task 8.4](Task/8.4.jpg)  

![Task 8.5](Task/8.5.jpg)  

![Task 8.5.2](Task/8.5.2.jpg)  

