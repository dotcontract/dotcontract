import DebugLogger from "@dotcontract/utils/DebugLogger";

export const logger = new DebugLogger('cli')

export default function() {
  logger.log(...arguments);
};