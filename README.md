# monorepo-template

TypeScript monorepo starter. pnpm workspaces + Nx, with a TanStack Start web app, a Hono/tRPC API, shared packages for auth/db/ui/trpc, and oxlint/oxfmt across the board. All versions pinned via the pnpm catalog.

## Layout

```
apps/
  api/              Hono + tRPC server
  web/              TanStack Start (SPA)
packages/
  auth/             Better Auth setup
  db/               Drizzle schema + Postgres client
  trpc/             shared tRPC routers and types
  ui/               shadcn + Tailwind v4 component kit
```

## Run

```sh
pnpm install
docker compose up -d                  # postgres
pnpm nx run-many -t dev               # api + web
```

## Tasks

| Command                            | Purpose                          |
|------------------------------------|----------------------------------|
| `pnpm nx run-many -t dev`          | dev servers for every project    |
| `pnpm nx run-many -t build`        | build everything (cached)        |
| `pnpm nx run-many -t lint`         | oxlint                           |
| `pnpm nx run-many -t typecheck`    | tsc / tsgolint                   |
