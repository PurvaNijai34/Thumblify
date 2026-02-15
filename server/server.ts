// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDb from './config/db.js';
// import session from 'express-session';
// import AuthRoutes from './routes/AuthRoutes.js';
// import ThumbnailRouter from './routes/ThumbnailRoutes.js';
// import UserRouter from './routes/UserRoutes.js';

// // ✅ FIX: close the declare module block
// declare module 'express-session' {
//   interface SessionData {
//     isLoggedIn: boolean;
//     userId: string;
//   }
// }

// await connectDb();

// const app = express();

// app.use(
//   cors({
//     origin: ['http://localhost:5173'],
//     credentials: true,
//   })
// );

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET as string,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false,
//       maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
//     },
//   })
// );

// app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.send('Server is Live!');
// });

// app.use('/api/thumbnail', ThumbnailRouter);

// app.use('/api/user', UserRouter);


// app.use('/api/auth', AuthRoutes);
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });







import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/db.js";
import session from "express-session";

import AuthRoutes from "./routes/AuthRoutes.js";
import ThumbnailRouter from "./routes/ThumbnailRoutes.js";
import UserRouter from "./routes/UserRoutes.js";

/* 🔧 SESSION TYPE FIX */
declare module "express-session" {
  interface SessionData {
    isLoggedIn?: boolean;
    userId?: string;
  }
}

await connectDb();

const app = express();

/* ✅ BODY PARSER FIRST */
app.use(express.json());

/* ✅ CORS (REQUIRED FOR COOKIES) */
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,               // 🔥 REQUIRED
  })
);

/* ✅ SESSION CONFIG (CRITICAL FIX) */
app.use(
  session({
    name: "connect.sid",
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,        // true only in HTTPS
      sameSite: "lax",      // 🔥 THIS FIXES BROWSER ISSUE
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

/* ✅ ROUTES */
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.use("/api/auth", AuthRoutes);
app.use("/api/thumbnail", ThumbnailRouter);
app.use("/api/user", UserRouter);

/* ✅ SERVER */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
