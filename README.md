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

### Current Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check endpoint |

## 🏗️ Architecture

### App Configuration (`src/app.ts`)
- Express application setup
- Middleware configuration
- JSON parsing middleware
- Route definitions

### Entry Point (`src/index.ts`)
- Environment configuration loading
- Server startup
- Port configuration

## 🔧 Development

### Code Style
- TypeScript with strict type checking
- ES6+ features
- Modular imports/exports

### Development Workflow
1. Make changes to TypeScript files in `src/`
2. Nodemon automatically restarts the server
3. Test your changes at `http://localhost:3000`

### Building for Production
```bash
npm run build
```
This compiles TypeScript files to JavaScript in the `dist/` directory.

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |
| `NODE_ENV` | Environment mode | `development` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Shachiru**
- GitHub: [@Shachiru](https://github.com/Shachiru)

## 🚀 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Product management endpoints
- [ ] Order processing system
- [ ] Payment integration
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/Shachiru/tech-store-backend/issues) page
2. Create a new issue with detailed information
3. Reach out to the maintainer

---

⭐ **Star this repository if you find it helpful!**
