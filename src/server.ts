import Fastify from "fastify";

const app = Fastify();

// GET, POST, PUT, PATH, DELETE
app.get("/hello", () => {
  return "Hello World";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
