const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const yup = require("yup");
const monk = require("monk");
const csp = require("helmet-csp");
const NewsAPI = require("newsapi");
require("dotenv").config();

const app = express();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const newsapi = new NewsAPI(NEWS_API_KEY);

const api = process.env.API;

app.enable("trust proxy");

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "unpkg.com",
        "cdn.jsdelivr.net",
        "fonts.googleapis.com",
        "use.fontawesome.com",
      ],
      scriptSrc: ["'self'", "'unsafe-eval'", "cdnjs.cloudflare.com"],
      fontSrc: [
        "'self'", // Default policy for specifiying valid sources for fonts loaded using "@font-face": allow all content coming from origin (without subdomains).
        "https://fonts.gstatic.com",
        "https://cdnjs.cloudflare.com",
      ],
      styleSrc: [
        "'self'", // Default policy for valid sources for stylesheets: allow all content coming from origin (without subdomains).
        "https://fonts.googleapis.com",
        "https://cdnjs.cloudflare.com",
      ],
    },
  })
);

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
// app.use(express.static('./public'));

app.get("/api/articles/all", async (req, res, next) => {
  const { sources, q, domains, from, to, language, page } = req.params;
  console.log(req.params)
  try {
    newsapi.v2
      .everything(req.params)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        next(err);
      });
  } catch (err) {
    next(err);
  }
});

app.get("/api/articles/top", async (req, res, next) => {
  const { sources, q, category, language, country } = req.params;
  try {
    newsapi.v2
      .topHeadlines(req.params)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        next(err);
      });
  } catch (err) {
    next(err);
  }
});

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else res.status(500);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running on port " + port);
});