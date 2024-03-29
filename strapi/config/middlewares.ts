export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: [
        "https://app.koios.world",
        "https://dev.koios.world",
        "https://content.koios.world",
        "https://aurora.quest",
        "https://www.aurora.quest",
        "https://www.aurora.quest/",
        "http://localhost:3000",
        "http://localhost:4200",
        "http://localhost:4201",
        "http://localhost:1337",
        "https://koios-world.vercel.app"
      ],
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
