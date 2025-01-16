"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@next-auth";
exports.ids = ["vendor-chunks/@next-auth"];
exports.modules = {

/***/ "(rsc)/../../node_modules/@next-auth/prisma-adapter/dist/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@next-auth/prisma-adapter/dist/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PrismaAdapter = void 0;\n/**\n * ## Setup\n *\n * Add this adapter to your `pages/api/[...nextauth].js` next-auth configuration object:\n *\n * ```js title=\"pages/api/auth/[...nextauth].js\"\n * import NextAuth from \"next-auth\"\n * import GoogleProvider from \"next-auth/providers/google\"\n * import { PrismaAdapter } from \"@next-auth/prisma-adapter\"\n * import { PrismaClient } from \"@prisma/client\"\n *\n * const prisma = new PrismaClient()\n *\n * export default NextAuth({\n *   adapter: PrismaAdapter(prisma),\n *   providers: [\n *     GoogleProvider({\n *       clientId: process.env.GOOGLE_CLIENT_ID,\n *       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n *     }),\n *   ],\n * })\n * ```\n *\n * ### Create the Prisma schema from scratch\n *\n * You need to use at least Prisma 2.26.0. Create a schema file in `prisma/schema.prisma` similar to this one:\n *\n * > This schema is adapted for use in Prisma and based upon our main [schema](https://authjs.dev/reference/adapters#models)\n *\n * ```json title=\"schema.prisma\"\n * datasource db {\n *   provider = \"postgresql\"\n *   url      = env(\"DATABASE_URL\")\n *   shadowDatabaseUrl = env(\"SHADOW_DATABASE_URL\") // Only needed when using a cloud provider that doesn't support the creation of new databases, like Heroku. Learn more: https://pris.ly/d/migrate-shadow\n * }\n *\n * generator client {\n *   provider        = \"prisma-client-js\"\n *   previewFeatures = [\"referentialActions\"] // You won't need this in Prisma 3.X or higher.\n * }\n *\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String\n *   type               String\n *   provider           String\n *   providerAccountId  String\n *   refresh_token      String?  @db.Text\n *   access_token       String?  @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String?  @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique\n *   userId       String\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime?\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n * }\n * ```\n *\n * :::note\n * When using the MySQL connector for Prisma, the [Prisma `String` type](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string) gets mapped to `varchar(191)` which may not be long enough to store fields such as `id_token` in the `Account` model. This can be avoided by explicitly using the `Text` type with `@db.Text`.\n * :::\n *\n *\n * ### Create the Prisma schema with `prisma migrate`\n *\n * This will create an SQL migration file and execute it:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * Note that you will need to specify your database connection string in the environment variable `DATABASE_URL`. You can do this by setting it in a `.env` file at the root of your project.\n *\n * To learn more about [Prisma Migrate](https://www.prisma.io/migrate), check out the [Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate).\n *\n * ### Generating the Prisma Client\n *\n * Once you have saved your schema, use the Prisma CLI to generate the Prisma Client:\n *\n * ```\n * npx prisma generate\n * ```\n *\n * To configure your database to use the new schema (i.e. create tables and columns) use the `prisma migrate` command:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * ### MongoDB support\n *\n * Prisma supports MongoDB, and so does Auth.js. Following the instructions of the [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb) on the MongoDB connector, things you have to change are:\n *\n * 1. Make sure that the id fields are mapped correctly\n *\n * ```prisma\n * id  String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n * ```\n *\n * 2. The Native database type attribute to `@db.String` from `@db.Text` and userId to `@db.ObjectId`.\n *\n * ```prisma\n * user_id            String   @db.ObjectId\n * refresh_token      String?  @db.String\n * access_token       String?  @db.String\n * id_token           String?  @db.String\n * ```\n *\n * Everything else should be the same.\n *\n * ### Naming Conventions\n *\n * If mixed snake_case and camelCase column names is an issue for you and/or your underlying database system, we recommend using Prisma's `@map()`([see the documentation here](https://www.prisma.io/docs/concepts/components/prisma-schema/names-in-underlying-database)) feature to change the field names. This won't affect Auth.js, but will allow you to customize the column names to whichever naming convention you wish.\n *\n * For example, moving to `snake_case` and plural table names.\n *\n * ```json title=\"schema.prisma\"\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String  @map(\"user_id\")\n *   type               String\n *   provider           String\n *   providerAccountId  String  @map(\"provider_account_id\")\n *   refresh_token      String? @db.Text\n *   access_token       String? @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String? @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n *   @@map(\"accounts\")\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique @map(\"session_token\")\n *   userId       String   @map(\"user_id\")\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@map(\"sessions\")\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime? @map(\"email_verified\")\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n *\n *   @@map(\"users\")\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n *   @@map(\"verificationtokens\")\n * }\n * ```\n *\n **/\nfunction PrismaAdapter(p) {\n    return {\n        createUser: (data) => p.user.create({ data }),\n        getUser: (id) => p.user.findUnique({ where: { id } }),\n        getUserByEmail: (email) => p.user.findUnique({ where: { email } }),\n        async getUserByAccount(provider_providerAccountId) {\n            var _a;\n            const account = await p.account.findUnique({\n                where: { provider_providerAccountId },\n                select: { user: true },\n            });\n            return (_a = account === null || account === void 0 ? void 0 : account.user) !== null && _a !== void 0 ? _a : null;\n        },\n        updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),\n        deleteUser: (id) => p.user.delete({ where: { id } }),\n        linkAccount: (data) => p.account.create({ data }),\n        unlinkAccount: (provider_providerAccountId) => p.account.delete({\n            where: { provider_providerAccountId },\n        }),\n        async getSessionAndUser(sessionToken) {\n            const userAndSession = await p.session.findUnique({\n                where: { sessionToken },\n                include: { user: true },\n            });\n            if (!userAndSession)\n                return null;\n            const { user, ...session } = userAndSession;\n            return { user, session };\n        },\n        createSession: (data) => p.session.create({ data }),\n        updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),\n        deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),\n        async createVerificationToken(data) {\n            const verificationToken = await p.verificationToken.create({ data });\n            // @ts-expect-errors // MongoDB needs an ID, but we don't\n            if (verificationToken.id)\n                delete verificationToken.id;\n            return verificationToken;\n        },\n        async useVerificationToken(identifier_token) {\n            try {\n                const verificationToken = await p.verificationToken.delete({\n                    where: { identifier_token },\n                });\n                // @ts-expect-errors // MongoDB needs an ID, but we don't\n                if (verificationToken.id)\n                    delete verificationToken.id;\n                return verificationToken;\n            }\n            catch (error) {\n                // If token already used/deleted, just return null\n                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025\n                if (error.code === \"P2025\")\n                    return null;\n                throw error;\n            }\n        },\n    };\n}\nexports.PrismaAdapter = PrismaAdapter;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07QUFDcEQsNkNBQTZDLFNBQVMsTUFBTTtBQUM1RCx1REFBdUQsU0FBUyxTQUFTO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQsMEJBQTBCLFlBQVk7QUFDdEMsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULHVCQUF1QixhQUFhLHFCQUFxQixTQUFTLElBQUksUUFBUTtBQUM5RSw0Q0FBNEMsU0FBUyxNQUFNO0FBQzNELGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLDJCQUEyQixZQUFZO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QyxxQkFBcUI7QUFDckIsU0FBUztBQUNULG9EQUFvRCxNQUFNO0FBQzFELG9EQUFvRCxTQUFTLGlDQUFpQyxRQUFRO0FBQ3RHLDREQUE0RCxTQUFTLGdCQUFnQjtBQUNyRjtBQUNBLHlFQUF5RSxNQUFNO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0MsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyIvaG9tZS9rdW5hbC9jb2RlL25lc3QtbmV4dC1wcmlzbWEtbW9ub3JlcG8tc3RhcnRlci9ub2RlX21vZHVsZXMvQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlci9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QcmlzbWFBZGFwdGVyID0gdm9pZCAwO1xuLyoqXG4gKiAjIyBTZXR1cFxuICpcbiAqIEFkZCB0aGlzIGFkYXB0ZXIgdG8geW91ciBgcGFnZXMvYXBpL1suLi5uZXh0YXV0aF0uanNgIG5leHQtYXV0aCBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqXG4gKiBgYGBqcyB0aXRsZT1cInBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIlxuICogaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuICogaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG4gKiBpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuICogaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbiAqXG4gKiBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gKiAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICogICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gKiAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICogICAgIH0pLFxuICogICBdLFxuICogfSlcbiAqIGBgYFxuICpcbiAqICMjIyBDcmVhdGUgdGhlIFByaXNtYSBzY2hlbWEgZnJvbSBzY3JhdGNoXG4gKlxuICogWW91IG5lZWQgdG8gdXNlIGF0IGxlYXN0IFByaXNtYSAyLjI2LjAuIENyZWF0ZSBhIHNjaGVtYSBmaWxlIGluIGBwcmlzbWEvc2NoZW1hLnByaXNtYWAgc2ltaWxhciB0byB0aGlzIG9uZTpcbiAqXG4gKiA+IFRoaXMgc2NoZW1hIGlzIGFkYXB0ZWQgZm9yIHVzZSBpbiBQcmlzbWEgYW5kIGJhc2VkIHVwb24gb3VyIG1haW4gW3NjaGVtYV0oaHR0cHM6Ly9hdXRoanMuZGV2L3JlZmVyZW5jZS9hZGFwdGVycyNtb2RlbHMpXG4gKlxuICogYGBganNvbiB0aXRsZT1cInNjaGVtYS5wcmlzbWFcIlxuICogZGF0YXNvdXJjZSBkYiB7XG4gKiAgIHByb3ZpZGVyID0gXCJwb3N0Z3Jlc3FsXCJcbiAqICAgdXJsICAgICAgPSBlbnYoXCJEQVRBQkFTRV9VUkxcIilcbiAqICAgc2hhZG93RGF0YWJhc2VVcmwgPSBlbnYoXCJTSEFET1dfREFUQUJBU0VfVVJMXCIpIC8vIE9ubHkgbmVlZGVkIHdoZW4gdXNpbmcgYSBjbG91ZCBwcm92aWRlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCB0aGUgY3JlYXRpb24gb2YgbmV3IGRhdGFiYXNlcywgbGlrZSBIZXJva3UuIExlYXJuIG1vcmU6IGh0dHBzOi8vcHJpcy5seS9kL21pZ3JhdGUtc2hhZG93XG4gKiB9XG4gKlxuICogZ2VuZXJhdG9yIGNsaWVudCB7XG4gKiAgIHByb3ZpZGVyICAgICAgICA9IFwicHJpc21hLWNsaWVudC1qc1wiXG4gKiAgIHByZXZpZXdGZWF0dXJlcyA9IFtcInJlZmVyZW50aWFsQWN0aW9uc1wiXSAvLyBZb3Ugd29uJ3QgbmVlZCB0aGlzIGluIFByaXNtYSAzLlggb3IgaGlnaGVyLlxuICogfVxuICpcbiAqIG1vZGVsIEFjY291bnQge1xuICogICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICB1c2VySWQgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHR5cGUgICAgICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXIgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlckFjY291bnRJZCAgU3RyaW5nXG4gKiAgIHJlZnJlc2hfdG9rZW4gICAgICBTdHJpbmc/ICBAZGIuVGV4dFxuICogICBhY2Nlc3NfdG9rZW4gICAgICAgU3RyaW5nPyAgQGRiLlRleHRcbiAqICAgZXhwaXJlc19hdCAgICAgICAgIEludD9cbiAqICAgdG9rZW5fdHlwZSAgICAgICAgIFN0cmluZz9cbiAqICAgc2NvcGUgICAgICAgICAgICAgIFN0cmluZz9cbiAqICAgaWRfdG9rZW4gICAgICAgICAgIFN0cmluZz8gIEBkYi5UZXh0XG4gKiAgIHNlc3Npb25fc3RhdGUgICAgICBTdHJpbmc/XG4gKlxuICogICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICpcbiAqICAgQEB1bmlxdWUoW3Byb3ZpZGVyLCBwcm92aWRlckFjY291bnRJZF0pXG4gKiB9XG4gKlxuICogbW9kZWwgU2Vzc2lvbiB7XG4gKiAgIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBzZXNzaW9uVG9rZW4gU3RyaW5nICAgQHVuaXF1ZVxuICogICB1c2VySWQgICAgICAgU3RyaW5nXG4gKiAgIGV4cGlyZXMgICAgICBEYXRlVGltZVxuICogICB1c2VyICAgICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICogfVxuICpcbiAqIG1vZGVsIFVzZXIge1xuICogICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBuYW1lICAgICAgICAgIFN0cmluZz9cbiAqICAgZW1haWwgICAgICAgICBTdHJpbmc/ICAgQHVuaXF1ZVxuICogICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lP1xuICogICBpbWFnZSAgICAgICAgIFN0cmluZz9cbiAqICAgYWNjb3VudHMgICAgICBBY2NvdW50W11cbiAqICAgc2Vzc2lvbnMgICAgICBTZXNzaW9uW11cbiAqIH1cbiAqXG4gKiBtb2RlbCBWZXJpZmljYXRpb25Ub2tlbiB7XG4gKiAgIGlkZW50aWZpZXIgU3RyaW5nXG4gKiAgIHRva2VuICAgICAgU3RyaW5nICAgQHVuaXF1ZVxuICogICBleHBpcmVzICAgIERhdGVUaW1lXG4gKlxuICogICBAQHVuaXF1ZShbaWRlbnRpZmllciwgdG9rZW5dKVxuICogfVxuICogYGBgXG4gKlxuICogOjo6bm90ZVxuICogV2hlbiB1c2luZyB0aGUgTXlTUUwgY29ubmVjdG9yIGZvciBQcmlzbWEsIHRoZSBbUHJpc21hIGBTdHJpbmdgIHR5cGVdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL3JlZmVyZW5jZS9hcGktcmVmZXJlbmNlL3ByaXNtYS1zY2hlbWEtcmVmZXJlbmNlI3N0cmluZykgZ2V0cyBtYXBwZWQgdG8gYHZhcmNoYXIoMTkxKWAgd2hpY2ggbWF5IG5vdCBiZSBsb25nIGVub3VnaCB0byBzdG9yZSBmaWVsZHMgc3VjaCBhcyBgaWRfdG9rZW5gIGluIHRoZSBgQWNjb3VudGAgbW9kZWwuIFRoaXMgY2FuIGJlIGF2b2lkZWQgYnkgZXhwbGljaXRseSB1c2luZyB0aGUgYFRleHRgIHR5cGUgd2l0aCBgQGRiLlRleHRgLlxuICogOjo6XG4gKlxuICpcbiAqICMjIyBDcmVhdGUgdGhlIFByaXNtYSBzY2hlbWEgd2l0aCBgcHJpc21hIG1pZ3JhdGVgXG4gKlxuICogVGhpcyB3aWxsIGNyZWF0ZSBhbiBTUUwgbWlncmF0aW9uIGZpbGUgYW5kIGV4ZWN1dGUgaXQ6XG4gKlxuICogYGBgXG4gKiBucHggcHJpc21hIG1pZ3JhdGUgZGV2XG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgeW91IHdpbGwgbmVlZCB0byBzcGVjaWZ5IHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBzdHJpbmcgaW4gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBEQVRBQkFTRV9VUkxgLiBZb3UgY2FuIGRvIHRoaXMgYnkgc2V0dGluZyBpdCBpbiBhIGAuZW52YCBmaWxlIGF0IHRoZSByb290IG9mIHlvdXIgcHJvamVjdC5cbiAqXG4gKiBUbyBsZWFybiBtb3JlIGFib3V0IFtQcmlzbWEgTWlncmF0ZV0oaHR0cHM6Ly93d3cucHJpc21hLmlvL21pZ3JhdGUpLCBjaGVjayBvdXQgdGhlIFtNaWdyYXRlIGRvY3NdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2NvbXBvbmVudHMvcHJpc21hLW1pZ3JhdGUpLlxuICpcbiAqICMjIyBHZW5lcmF0aW5nIHRoZSBQcmlzbWEgQ2xpZW50XG4gKlxuICogT25jZSB5b3UgaGF2ZSBzYXZlZCB5b3VyIHNjaGVtYSwgdXNlIHRoZSBQcmlzbWEgQ0xJIHRvIGdlbmVyYXRlIHRoZSBQcmlzbWEgQ2xpZW50OlxuICpcbiAqIGBgYFxuICogbnB4IHByaXNtYSBnZW5lcmF0ZVxuICogYGBgXG4gKlxuICogVG8gY29uZmlndXJlIHlvdXIgZGF0YWJhc2UgdG8gdXNlIHRoZSBuZXcgc2NoZW1hIChpLmUuIGNyZWF0ZSB0YWJsZXMgYW5kIGNvbHVtbnMpIHVzZSB0aGUgYHByaXNtYSBtaWdyYXRlYCBjb21tYW5kOlxuICpcbiAqIGBgYFxuICogbnB4IHByaXNtYSBtaWdyYXRlIGRldlxuICogYGBgXG4gKlxuICogIyMjIE1vbmdvREIgc3VwcG9ydFxuICpcbiAqIFByaXNtYSBzdXBwb3J0cyBNb25nb0RCLCBhbmQgc28gZG9lcyBBdXRoLmpzLiBGb2xsb3dpbmcgdGhlIGluc3RydWN0aW9ucyBvZiB0aGUgW1ByaXNtYSBkb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9kYXRhYmFzZS1jb25uZWN0b3JzL21vbmdvZGIpIG9uIHRoZSBNb25nb0RCIGNvbm5lY3RvciwgdGhpbmdzIHlvdSBoYXZlIHRvIGNoYW5nZSBhcmU6XG4gKlxuICogMS4gTWFrZSBzdXJlIHRoYXQgdGhlIGlkIGZpZWxkcyBhcmUgbWFwcGVkIGNvcnJlY3RseVxuICpcbiAqIGBgYHByaXNtYVxuICogaWQgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcChcIl9pZFwiKSBAZGIuT2JqZWN0SWRcbiAqIGBgYFxuICpcbiAqIDIuIFRoZSBOYXRpdmUgZGF0YWJhc2UgdHlwZSBhdHRyaWJ1dGUgdG8gYEBkYi5TdHJpbmdgIGZyb20gYEBkYi5UZXh0YCBhbmQgdXNlcklkIHRvIGBAZGIuT2JqZWN0SWRgLlxuICpcbiAqIGBgYHByaXNtYVxuICogdXNlcl9pZCAgICAgICAgICAgIFN0cmluZyAgIEBkYi5PYmplY3RJZFxuICogcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gIEBkYi5TdHJpbmdcbiAqIGFjY2Vzc190b2tlbiAgICAgICBTdHJpbmc/ICBAZGIuU3RyaW5nXG4gKiBpZF90b2tlbiAgICAgICAgICAgU3RyaW5nPyAgQGRiLlN0cmluZ1xuICogYGBgXG4gKlxuICogRXZlcnl0aGluZyBlbHNlIHNob3VsZCBiZSB0aGUgc2FtZS5cbiAqXG4gKiAjIyMgTmFtaW5nIENvbnZlbnRpb25zXG4gKlxuICogSWYgbWl4ZWQgc25ha2VfY2FzZSBhbmQgY2FtZWxDYXNlIGNvbHVtbiBuYW1lcyBpcyBhbiBpc3N1ZSBmb3IgeW91IGFuZC9vciB5b3VyIHVuZGVybHlpbmcgZGF0YWJhc2Ugc3lzdGVtLCB3ZSByZWNvbW1lbmQgdXNpbmcgUHJpc21hJ3MgYEBtYXAoKWAoW3NlZSB0aGUgZG9jdW1lbnRhdGlvbiBoZXJlXShodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9jb25jZXB0cy9jb21wb25lbnRzL3ByaXNtYS1zY2hlbWEvbmFtZXMtaW4tdW5kZXJseWluZy1kYXRhYmFzZSkpIGZlYXR1cmUgdG8gY2hhbmdlIHRoZSBmaWVsZCBuYW1lcy4gVGhpcyB3b24ndCBhZmZlY3QgQXV0aC5qcywgYnV0IHdpbGwgYWxsb3cgeW91IHRvIGN1c3RvbWl6ZSB0aGUgY29sdW1uIG5hbWVzIHRvIHdoaWNoZXZlciBuYW1pbmcgY29udmVudGlvbiB5b3Ugd2lzaC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgbW92aW5nIHRvIGBzbmFrZV9jYXNlYCBhbmQgcGx1cmFsIHRhYmxlIG5hbWVzLlxuICpcbiAqIGBgYGpzb24gdGl0bGU9XCJzY2hlbWEucHJpc21hXCJcbiAqIG1vZGVsIEFjY291bnQge1xuICogICBpZCAgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICB1c2VySWQgICAgICAgICAgICAgU3RyaW5nICBAbWFwKFwidXNlcl9pZFwiKVxuICogICB0eXBlICAgICAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXJBY2NvdW50SWQgIFN0cmluZyAgQG1hcChcInByb3ZpZGVyX2FjY291bnRfaWRcIilcbiAqICAgcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gQGRiLlRleHRcbiAqICAgYWNjZXNzX3Rva2VuICAgICAgIFN0cmluZz8gQGRiLlRleHRcbiAqICAgZXhwaXJlc19hdCAgICAgICAgIEludD9cbiAqICAgdG9rZW5fdHlwZSAgICAgICAgIFN0cmluZz9cbiAqICAgc2NvcGUgICAgICAgICAgICAgIFN0cmluZz9cbiAqICAgaWRfdG9rZW4gICAgICAgICAgIFN0cmluZz8gQGRiLlRleHRcbiAqICAgc2Vzc2lvbl9zdGF0ZSAgICAgIFN0cmluZz9cbiAqXG4gKiAgIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKlxuICogICBAQHVuaXF1ZShbcHJvdmlkZXIsIHByb3ZpZGVyQWNjb3VudElkXSlcbiAqICAgQEBtYXAoXCJhY2NvdW50c1wiKVxuICogfVxuICpcbiAqIG1vZGVsIFNlc3Npb24ge1xuICogICBpZCAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgc2Vzc2lvblRva2VuIFN0cmluZyAgIEB1bmlxdWUgQG1hcChcInNlc3Npb25fdG9rZW5cIilcbiAqICAgdXNlcklkICAgICAgIFN0cmluZyAgIEBtYXAoXCJ1c2VyX2lkXCIpXG4gKiAgIGV4cGlyZXMgICAgICBEYXRlVGltZVxuICogICB1c2VyICAgICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICpcbiAqICAgQEBtYXAoXCJzZXNzaW9uc1wiKVxuICogfVxuICpcbiAqIG1vZGVsIFVzZXIge1xuICogICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBuYW1lICAgICAgICAgIFN0cmluZz9cbiAqICAgZW1haWwgICAgICAgICBTdHJpbmc/ICAgQHVuaXF1ZVxuICogICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPyBAbWFwKFwiZW1haWxfdmVyaWZpZWRcIilcbiAqICAgaW1hZ2UgICAgICAgICBTdHJpbmc/XG4gKiAgIGFjY291bnRzICAgICAgQWNjb3VudFtdXG4gKiAgIHNlc3Npb25zICAgICAgU2Vzc2lvbltdXG4gKlxuICogICBAQG1hcChcInVzZXJzXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgVmVyaWZpY2F0aW9uVG9rZW4ge1xuICogICBpZGVudGlmaWVyIFN0cmluZ1xuICogICB0b2tlbiAgICAgIFN0cmluZyAgIEB1bmlxdWVcbiAqICAgZXhwaXJlcyAgICBEYXRlVGltZVxuICpcbiAqICAgQEB1bmlxdWUoW2lkZW50aWZpZXIsIHRva2VuXSlcbiAqICAgQEBtYXAoXCJ2ZXJpZmljYXRpb250b2tlbnNcIilcbiAqIH1cbiAqIGBgYFxuICpcbiAqKi9cbmZ1bmN0aW9uIFByaXNtYUFkYXB0ZXIocCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVVzZXI6IChkYXRhKSA9PiBwLnVzZXIuY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgZ2V0VXNlcjogKGlkKSA9PiBwLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSksXG4gICAgICAgIGdldFVzZXJCeUVtYWlsOiAoZW1haWwpID0+IHAudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KSxcbiAgICAgICAgYXN5bmMgZ2V0VXNlckJ5QWNjb3VudChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHAuYWNjb3VudC5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyB1c2VyOiB0cnVlIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoX2EgPSBhY2NvdW50ID09PSBudWxsIHx8IGFjY291bnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjY291bnQudXNlcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVXNlcjogKHsgaWQsIC4uLmRhdGEgfSkgPT4gcC51c2VyLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSksXG4gICAgICAgIGRlbGV0ZVVzZXI6IChpZCkgPT4gcC51c2VyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSksXG4gICAgICAgIGxpbmtBY2NvdW50OiAoZGF0YSkgPT4gcC5hY2NvdW50LmNyZWF0ZSh7IGRhdGEgfSksXG4gICAgICAgIHVubGlua0FjY291bnQ6IChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkgPT4gcC5hY2NvdW50LmRlbGV0ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYXN5bmMgZ2V0U2Vzc2lvbkFuZFVzZXIoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyQW5kU2Vzc2lvbiA9IGF3YWl0IHAuc2Vzc2lvbi5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzZXNzaW9uVG9rZW4gfSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyQW5kU2Vzc2lvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlciwgLi4uc2Vzc2lvbiB9ID0gdXNlckFuZFNlc3Npb247XG4gICAgICAgICAgICByZXR1cm4geyB1c2VyLCBzZXNzaW9uIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNlc3Npb246IChkYXRhKSA9PiBwLnNlc3Npb24uY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgdXBkYXRlU2Vzc2lvbjogKGRhdGEpID0+IHAuc2Vzc2lvbi51cGRhdGUoeyB3aGVyZTogeyBzZXNzaW9uVG9rZW46IGRhdGEuc2Vzc2lvblRva2VuIH0sIGRhdGEgfSksXG4gICAgICAgIGRlbGV0ZVNlc3Npb246IChzZXNzaW9uVG9rZW4pID0+IHAuc2Vzc2lvbi5kZWxldGUoeyB3aGVyZTogeyBzZXNzaW9uVG9rZW4gfSB9KSxcbiAgICAgICAgYXN5bmMgY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4oZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCBwLnZlcmlmaWNhdGlvblRva2VuLmNyZWF0ZSh7IGRhdGEgfSk7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9ycyAvLyBNb25nb0RCIG5lZWRzIGFuIElELCBidXQgd2UgZG9uJ3RcbiAgICAgICAgICAgIGlmICh2ZXJpZmljYXRpb25Ub2tlbi5pZClcbiAgICAgICAgICAgICAgICBkZWxldGUgdmVyaWZpY2F0aW9uVG9rZW4uaWQ7XG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVzZVZlcmlmaWNhdGlvblRva2VuKGlkZW50aWZpZXJfdG9rZW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCBwLnZlcmlmaWNhdGlvblRva2VuLmRlbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkZW50aWZpZXJfdG9rZW4gfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9ycyAvLyBNb25nb0RCIG5lZWRzIGFuIElELCBidXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICBpZiAodmVyaWZpY2F0aW9uVG9rZW4uaWQpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2ZXJpZmljYXRpb25Ub2tlbi5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0b2tlbiBhbHJlYWR5IHVzZWQvZGVsZXRlZCwganVzdCByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL3JlZmVyZW5jZS9hcGktcmVmZXJlbmNlL2Vycm9yLXJlZmVyZW5jZSNwMjAyNVxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBcIlAyMDI1XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLlByaXNtYUFkYXB0ZXIgPSBQcmlzbWFBZGFwdGVyO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/@next-auth/prisma-adapter/dist/index.js\n");

/***/ })

};
;