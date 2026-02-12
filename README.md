# Notif Config API

RESTful API service for Configuration and Notification management.

Built using:
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Jest (Unit Testing)
- Swagger (OpenAPI Documentation)

---

## Features

### Configuration Service
- Create configuration
- Get all configurations
- Get configuration by ID
- Update configuration
- Delete configuration

### Notification Service
- Create notification (email/sms/push)
- Simulated sending process
- Status lifecycle (pending → sent/failed)
- Get notification by ID
- Delete notification

---

## Architecture

Layered architecture:

Route → Controller → Service → Repository → Database

Includes:
- Validation middleware (Joi)
- Global error handling
- Custom AppError class
- Multi-environment configuration
- Production-safe setup

---

## Environment Setup

Uses dotenv-flow for multi-environment support.

Available environments:

- development
- qa
- staging
- production

Run in development: npm run dev

Run in QA: npm run qa

Run in staging: npm run staging

Run in production: npm start

---

## Database

Uses PostgreSQL.

Ensure database is running before starting the API.

---

## API Documentation

Swagger available at: http://localhost:3000/api-docs

---

## Unit Testing

Run tests: npm test

All tests must pass before deployment.

---

## Postman Collection

A professional Postman collection is included for:

- Configuration lifecycle testing
- Notification lifecycle testing
- Automated ID variable injection

---

## Production Notes

- Database auto-sync only enabled in development.
- Stack traces hidden in production.
- Environment variables separated per environment.

---

## Author

Developed as part of API Service Configuration & Notification project.


# Notif Config API

RESTful API Service untuk manajemen Configuration dan Notification.

Dibangun menggunakan:
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Jest (Unit Testing)
- Swagger (OpenAPI Documentation)

---

## Deskripsi Proyek

API ini dikembangkan untuk menyediakan layanan:

1. Configuration Service  
2. Notification Service  

Menggunakan arsitektur berlapis (layered architecture) yang siap digunakan pada environment development, QA, staging, maupun production.

---

## Fitur Utama

### 1. Configuration Service
- Membuat configuration
- Melihat seluruh configuration
- Melihat configuration berdasarkan ID
- Mengupdate configuration
- Menghapus configuration

### 2. Notification Service
- Membuat notifikasi (email / sms / push)
- Simulasi proses pengiriman
- Lifecycle status: `pending → sent / failed`
- Melihat notifikasi berdasarkan ID
- Menghapus notifikasi

---

## Arsitektur

Menggunakan arsitektur berlapis:

Route → Controller → Service → Repository → Database

Dilengkapi dengan:

- Validation middleware (Joi)
- Global error handling
- Custom AppError class
- Multi-environment configuration
- Production-safe setup

---

## Struktur Folder

src
├── config
├── controllers
├── middlewares
├── models
├── repositories
├── routes
├── services
├── utils
├── app.js
└── server.js

---

## Konfigurasi Environment

Project ini menggunakan `dotenv-flow` untuk mendukung multi-environment.

Environment yang tersedia:

- development
- qa
- staging
- production

Menjalankan dalam mode development: npm run dev

Menjalankan dalam mode QA: npm run qa

Menjalankan dalam mode staging: npm run staging

Menjalankan dalam mode production: npm start

---

## Database

Menggunakan PostgreSQL.

Pastikan database sudah berjalan sebelum menjalankan aplikasi.

Pada mode development, database akan otomatis melakukan sync schema.

Pada mode production, tidak ada auto sync untuk menjaga keamanan dan stabilitas.

---

## Dokumentasi API

Swagger tersedia di:http://localhost:3000/api-docs

Swagger menyediakan dokumentasi endpoint lengkap beserta request dan response.

---

## Unit Testing

Project ini dilengkapi dengan automated testing menggunakan Jest dan Supertest.

Menjalankan unit test: npm test

Semua test harus dalam kondisi PASS sebelum deployment.

---

## Postman Collection

Disediakan Postman Collection profesional yang mencakup:

- Configuration lifecycle testing
- Notification lifecycle testing
- Automatic environment variable injection
- Automated response validation

Collection dapat digunakan untuk pengujian manual maupun demonstrasi teknis.

---

## Keamanan dan Production Setup

- Stack trace tidak ditampilkan pada mode production
- Environment variable dipisahkan berdasarkan level environment
- Database auto-sync hanya aktif pada mode development
- File `.env` tidak disertakan dalam repository

---

## Status Proyek

API ini telah memenuhi:

- RESTful API standard
- Version control dengan Git
- PostgreSQL integration
- Unit testing
- Postman documentation
- Swagger documentation
- Multi-environment readiness
- Production-safe configuration

---

## Pengembang

Dikembangkan sebagai bagian dari implementasi API Service Configuration & Notification.











