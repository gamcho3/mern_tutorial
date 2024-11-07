// http서버와 클라이언트를 구축하기 위해 사용
const http = require("http");
const express = require("express");
const userSchema = require("./user");
const postSchema = require("./post");
// 서버 생성
// http
//   .createServer((req, res) => {
//     // 클라이언트로 부터 서버에 요청에 대한 정보
//     // console.log(req);
//     console.log(req.url);
//     //   res : 서버가 클라이언트에게 사용하는 객체
//     // console.log(res);
//     res.writeHead(200, { "Content-Type": "text/html" }); // 응답하는 콘텐츠가 어떤 종류인지 헤더에 작성
//     // res.write("<h1>Hello World!</h1>"); // 클라이언트에게 응답을 보냄

//     // 라우팅
//     // 클라이언트가 요청한 url에따라 다른 응답을 내보내기위한 것
//     if (req.url === "/") {
//       res.write("<h1>Hello World!</h1>");
//     } else if (req.url === "/users") {
//       res.write("<h1>Hello Users</h1>");
//     }

//     res.end(); // 응답 종료
//   })
//   .listen(3000); // 서버를 3000번 포트로 실행

// express프레임워크 생성
const app = express();
// 포트번호 설정
const port = 3000;

const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
// net뒤에 데이터베이스를 명시하지 않으면 test로 생성

const uri =
  "mongodb+srv://qkrdydwls3:rS4uCWkdVR6YoEpN@cluster0.ktvi2.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri);

// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // DB 연결
//     const database = client.db("test_DB");
//     // DB에 존재하는 컬렉션 가져오기
//     const users = database.collection("users");
//     // 쿼리 객체 생성
//     let query = { name: "dd" };
//     // 쿼리에 해당하는 문서 가져오기
//     const user = await users.findOne(query);
//     console.log(user);

//     const posts = database.collection("posts");
//     const post = await posts.find({ userId: user._id }).toArray();
//     console.log(post);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run();

app.get("/", async (req, res) => {
  const user = await userSchema.find({ name: "dd" });
  console.log(user);
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`서버 실행중..${port}`);
});
