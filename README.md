# CST - Custom Dashboard

A modern full-stack monorepo built with Turborepo, featuring Next.js for the frontend and Express.js for the backend.

## Prerequisites

- Node.js (version >= 18)
- [pnpm] (version 9.0.0)

## Getting Started

1. Clone the repository:
git clone <repository-url>
cd cst

2. Install dependencies:
pnpm install

3. Set up environment variables:
   - Copy `.env.example` to `.env` in `apps/server` directories
   - Update the variables as needed

4. Start the project:
turbo dev

This will start:
- Frontend (Next.js): [http://localhost:3000]
- Backend (Express): [http://localhost:8000]

## Available Scripts

- `turbo dev` - Start all applications in development mode
- `turbo build` - Build all applications and packages
- `turbo lint` - Run ESLint across all projects
- `turbo format` - Format all files with Prettier
- `turbo check-types` - Run TypeScript type checking across all projects

### Backend-specific Commands

cd apps/server
pnpm db:generate  # Generate Drizzle migrations
pnpm db:migrate   # Run database migrations

## Tech Stack

### Frontend (apps/web)
- Next.js 15
- React 19
- TanStack Query
- Shadcn UI
- Tailwind CSS
- Zustand
- React Hook Form
- Zod

### Backend (apps/server)
- Express.js
- TypeScript
- Drizzle ORM
- PostgreSQL
- JWT Authentication
- Zod Validation

### Development Tools
- Turborepo
- TypeScript
- ESLint
- Prettier
- pnpm Workspaces

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run tests and checks:
   pnpm lint
   pnpm check-types
4. Commit your changes
5. Push to your branch
6. Create a Pull Request
