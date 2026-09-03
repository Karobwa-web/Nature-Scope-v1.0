# Nature Scope Database

This directory contains PostgreSQL database migrations and seeds for the Nature Scope platform.

## Directory Structure

- `migrations/`: Sequential SQL migration files for defining and updating the database schema.
- `seeds/`: Seed SQL scripts with categories and reference data.

## Running Migrations Locally

With PostgreSQL installed and running:

```bash
# 1. Create database
psql -U postgres -c "CREATE DATABASE naturescope;"

# 2. Run initial schema
psql -U postgres -d naturescope -f migrations/001_initial_schema.sql

# 3. Apply seeds
psql -U postgres -d naturescope -f seeds/001_initial_seed.sql
```

When using Docker Compose:
The initialization scripts in `migrations/` are automatically mounted and executed on first container startup.
