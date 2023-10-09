import express from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const server = express();
server.use((req,res,next) => {
    req.header('Access-Control-Allow-Origin','*');
    req.header('Access-Control-Allow-Headers','*');
})


server.use(cors());

const router = jsonServer.router('./data/db.json');
server.use('/api',router);
server.db = router.db;

const middlewares = jsonServer.defaults();
const rules = auth.rewriter({

})

server.use(rules);
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(8000);