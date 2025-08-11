import Fastify from "fastify";
import { knex } from "./database.js";
import { env } from "./env/index.js";

const app = Fastify();

app.get("/hello", async () => {
  const transaction = await knex("transactions")
    .select("*")
    .where("amount", 1000);

  return transaction;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
