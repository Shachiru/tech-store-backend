# 🛒 Tech Store Backend

A modern Express.js backend application built with TypeScript for a tech store e-commerce platform.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📖 Overview

The Tech Store Backend is a RESTful API service designed to power a modern tech store application. Built with Express.js and TypeScript, it provides a robust foundation for handling product management, user authentication, order processing, and more.

## ✨ Features

- 🚀 **Modern TypeScript**: Fully typed codebase for better development experience
- ⚡ **Express.js**: Fast and minimalist web framework
- 🔧 **Hot Reload**: Development server with nodemon for instant code changes
- 📦 **Modular Architecture**: Clean separation of concerns
- 🛡️ **Type Safety**: Comprehensive TypeScript configuration
- 🌍 **Environment Configuration**: Dotenv for environment variable management

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Language**: TypeScript 5.8.3
- **Development**: Nodemon, ts-node
- **Environment**: dotenv

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Shachiru/tech-store-backend.git
cd tech-store-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

### 4. Run the Application

#### Development Mode (with hot reload)
```bash
npm run dev
```

#### Production Build
```bash
npm run build
npm run serve
```

### 5. Verify Installation

Open your browser and navigate to:
```
http://localhost:3000
```

You should see: "Hello World shachiru!"

## 📁 Project Structure

```
tech-store-backend/
├── src/                    # Source code
│   ├── app.ts             # Express app configuration
│   └── index.ts           # Application entry point
├── dist/                  # Compiled JavaScript (generated)
├── node_modules/          # Dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run serve` | Run production build |

## 🌐 API Endpoints

### Base URL
```
http://localhost:3000
```

### Products API
- `GET /api/products/all` - Get all products
- `POST /api/products/save` - Create a new product
- `GET /api/products/:id` - Get a specific product by ID
- `PUT /api/products/update/:id` - Update a product
- `DELETE /api/products/delete/:id` - Delete a product

### Contact API
- `GET /api/contact/all` - Get all contacts
- `POST /api/contact/save` - Create a new contact
- `GET /api/contact/:id` - Get a specific contact by ID
- `PUT /api/contact/update/:id` - Update a contact
- `DELETE /api/contact/delete/:id` - Delete a contact

## 🏗️ Architecture

The project follows a clean architecture pattern with:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic layer
- **Models**: Data structure definitions
- **Routes**: API endpoint definitions
- **Database**: In-memory data storage (for development)

## 🔧 Development

The application uses TypeScript with Express.js and includes:
- CORS configuration for frontend integration
- Modular route handling
- Type-safe data models
- Error handling middleware
- Development hot reload

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For any questions or suggestions, please feel free to reach out!
