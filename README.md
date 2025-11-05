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
