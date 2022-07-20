import dayjs from "dayjs";
import pino from "pino";

const logger = pino({
  base: {
    pid: false,
  },
  timestamp: () => `, "time": "${dayjs().format()}"`,
});

export default logger;
