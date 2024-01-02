const serverless = require("serverless-http");
// const Strapi = require("@strapi/strapi/lib/index.js");
const strapi = require("@strapi/strapi/dist/index.js");

module.exports.hello = async (event, context) => {
  return {
    body: JSON.stringify({ message: "Hello from Serverless" }),
    headers: { "Content-Type": "application/json" },
  };
};

const startStrapi = async (strapi) => {
  try {
    if (!strapi.isLoaded) {
      await strapi.load();
    }
    await strapi.postListen();
    strapi.server.mount();
    return strapi;
  } catch (error) {
    return strapi.stopWithError(error);
  }
};

module.exports.strapiHandler = async (event, context) => {
  let workingDir = process.cwd();
  if (process.env.LAMBDA_TASK_ROOT && process.env.IS_OFFLINE !== "true") {
    workingDir = process.env.LAMBDA_TASK_ROOT;
  }
  console.log("global.strapi :", global);
  if (!global.strapi) {
    console.info("Cold starting Strapi");
    // Strapi({ dir: workingDir });
    strapi.default();

    // const strapi = new Strapi({ dir: workingDir });
    // strapi.config.middleware.settings.globalMiddlewares.forEach((middleware) => {
    //   strapi.app.use(middleware);
    // });
    // global.strapi = strapi;
  }
  if (!global.strapi.isLoaded) {
    await startStrapi(global.strapi);
  }
  const handler = serverless(global.strapi.server.app);
  return handler(event, context);
};
