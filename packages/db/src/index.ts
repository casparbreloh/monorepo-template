import { type NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

export function createDb(): NodePgDatabase<typeof schema> {
  return drizzle(process.env.DATABASE_URL ?? "", { schema });
}

export const db: NodePgDatabase<typeof schema> = createDb();
