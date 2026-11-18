import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const people = sqliteTable("people", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
});
