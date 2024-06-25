## Project Overview

This project consists of a backend built with NestJS and a frontend built with Next.js (React). It is organized as a monorepo using Turborepo and uses PNPM as the package manager.

- Backend: NestJS
- Frontend: Next.js (React)
- Package Manager: PNPM
- Monorepo Tool: Turborepo

## Getting Started

# Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 18 or higher recommended)
- PNPM

Installation

- Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

Install the packages:

```bash
pnpm install
```

Running the Project
Running Both Backend and Frontend
To run both the backend and frontend together, simply run the following command in the root directory:

```bash
pnpm dev
```

The backend will be running at http://localhost:3000.
The GraphQL playground will be available at http://localhost:3000/graphql.
The frontend will be running at http://localhost:3005.
Running Each Individually
If you want to run each part individually, navigate to the respective directory and run the following commands:

Start the backend server:

```bash
cd apps/api
pnpm dev
```

The backend will be running at http://localhost:3000.

Start the frontend server:

```bash
cd apps/web
pnpm dev
```

The frontend will be running at http://localhost:3005.

Running a Single Part from the Root
You can also run a single part from the root directory using the --filter option:

Start only the backend:

```bash
pnpm dev --filter="api"
```

Start only the frontend:

```bash
pnpm dev --filter="web"
```

Directory Structure
The project has the following directory structure:

```lua
your-repo/
│
├── apps/
│ ├── api/
│ │ ├── src/
│ │ │ ├── modules/
│ │ │ ├── main.ts
│ │ │ └── ...
│ │ ├── test/
│ │ ├── nest-cli.json
│ │ ├── package.json
│ │ └── ...
│ │
│ ├── web/
│ │ ├── src/
│ │ │ ├── components/
│ │ │ ├── app/
│ │ │ └── ...
│ │ ├── public/
│ │ ├── next.config.mjs
│ │ ├── package.json
│ │ └── ...
│
├── .gitignore
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

Useful Commands
Install dependencies: pnpm install
Start both backend and frontend: pnpm dev
Start the backend only:

```
cd apps/api && pnpm dev or pnpm dev --filter="api"
```

Start the frontend only:

```
 cd apps/web && pnpm dev or pnpm dev --filter="web"
```
