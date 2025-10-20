const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
 
server.use(middlewares);
server.use(jsonServer.bodyParser);
 
// Custom POST for /1
server.post("/1", (req, res) => {
  // Return the wrapped object
  res.json({
    data: [
      {
        text: "1",
        value: "ed@ed.com",
        value2: "val2"
      }
    ]
  });
});
 
// Mount default router for other routes
server.use(router);
 
server.listen(3000, () => {
  console.log("JSON Server running on port 3000");
});
