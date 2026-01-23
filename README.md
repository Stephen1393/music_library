# Music Library API

A backend API for managing a music library.  
Built with Node.js as a learning project with a focus on clean architecture, testing, and backend fundamentals.

## Tech Stack

- Node.js
- JavaScript (CommonJS)
- Git / GitHub
- ESLint & Prettier
- Testing: Mocha

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd music-library
npm install
```

## Running the App

- Uses the PORT environment variable if defined, otherwise defaults to port 4000

## Testing

Mocha
npm test will create a database, run tests and delete the database

## API Endpoints
POST /artists
status 201 CREATED

### database
The API uses **postgresSQL**
  
  ## set-up
  uses a `.env.` file in the project root:

-- env
PGDATABASE=artists_db
PGUSER=your_pg_user
PGPASSWORD=your_pg_password
PGHOST=localhost
PGPORT=5432 

A separate `.env.test` file is used when running tests.


## Request Flow (High-Level)

index.js - server listens on port 4000
app.js - receives incoming requests and routes them
routes/artist.js - where API routes live
controllers/artist.js - contains handler logic
tests - contain integration tests