import { TestFactory } from "@dotcontract/modality";
import Key from "@dotcontract/utils/Key";

export default class IncludeSigTestFactory extends TestFactory {
  static name = "include_sig";

  getEvaluateForArgs(args) {
    const [multiaddress] = args;
    return async (context) => {
      const { content, meta } = context;
      if (!meta?.signatures) {
        return false;
      }
      const signature = meta.signatures[multiaddress];
      if (!signature) {
        return false;
      }

      const shared_key = Key.fromPublicMultiaddress(multiaddress);
      const result = await shared_key.verifySignatureForJson(
        signature,
        content
      );
      return result;
    };
  }

  getCorrelateForArgs(args) {
    return (other_tests) => {
      return [];
    };
  }
}
