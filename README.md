<div align="center">

# cdnJS

**Молниеносный, бесплатный и глобальный прокси-CDN для npm-пакетов на базе Cloudflare Workers**

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)
[![Status](https://img.shields.io/badge/Status-Operational-success?style=for-the-badge)](https://asnl.workers.dev)

</div>

---

## 🚀 О проекте

**cdnjs** — это легковесный серверлесс CDN, который автоматически проксирует и агрессивно кэширует файлы npm-пакетов через глобальную сеть Cloudflare. Никаких лишних затрат на трафик и сложных настроек — чистый JavaScript на Edge-функциях!

---

## 📌 Использование

Подключай любые файлы из npm-пакетов прямо в свои проекты по следующей ссылке:

```html
<script src="[https://cdnjs.asnl.workers.dev/npm/имя-пакета@версия/путь/к/файлу.js](https://cdnjs.asnl.workers.dev/npm/имя-пакета@версия/путь/к/файлу.js)"></script>

```

### 💡 Пример подключения:

```html
<script src="https://cdnjs.asnl.workers.dev/react"></script> <!-- react -->

```

---

## 🛠️ Технологии

* **Cloudflare Workers** — выполнение кода на краю сети (Edge) с нулевой задержкой.
* **Cache API** — мгновенная отдача статики из ближайшего к пользователю дата-центра.
* **jsDelivr API** — надежный бэкенд-источник пакетов.

---

## 📜 Лицензия

Распространяется по лицензией [ISC](https://www.google.com/search?q=License%20ISC).
