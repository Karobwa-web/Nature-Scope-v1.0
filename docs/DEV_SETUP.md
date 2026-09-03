# Nature Scope - Local Development Setup Guide

This guide details how to set up, run, and test the Nature Scope application on your local machine.

## Prerequisites

- **Node.js**: v18.x or v20.x LTS
- **npm**: v9.x or higher (or pnpm / yarn)
- **PostgreSQL**: v14 or v15 (or Docker)
- **Docker & Docker Compose** (Optional, recommended for quick environment spin-up)

---

## Option 1: Quickstart with Docker Compose

1. Clone the repository:
   ```bash
   git clone https://github.com/Karobwa-web/Nature-Scope-v1.0.git
   cd Nature-Scope-v1.0
   ```

2. Start the database and services:
   ```bash
   docker compose up -d
   ```

3. Access the services:
   - **Frontend**: `http://localhost:5173`
   - **Backend API**: `http://localhost:5000/api`
   - **API Health Check**: `http://localhost:5000/api/health`

---

## Option 2: Manual Local Setup

### 1. Database Setup

1. Ensure PostgreSQL is running locally on port `5432`.
2. Create the database:
   ```sql
   CREATE DATABASE naturescope;
   ```
3. Run migrations and seeds:
   ```bash
   psql -U postgres -d naturescope -f database/migrations/001_initial_schema.sql
   psql -U postgres -d naturescope -f database/seeds/001_initial_seed.sql
   ```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Copy the sample environment file:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend in development mode:
   ```bash
   npm run dev
   ```
   The backend API will run at `http://localhost:5000`.

### 3. Frontend Setup

1. In a separate terminal, navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Copy the sample environment file:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The web application will open at `http://localhost:5173`.

---

## Running Tests

- **Backend tests**:
  ```bash
  cd backend && npm test
  ```
- **Linting**:
  ```bash
  cd backend && npm run lint
  cd frontend && npm run lint
  ```
