hexo.on("ready", () => {
  const { version } = require("../../package.json");
  hexo.log.info(`Anzhiyu主题版本:${version} | Powered By RhoPaper`);
});
