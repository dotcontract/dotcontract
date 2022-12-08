import Key from '@dotcontract/utils/Key';

export default async function signed_by(ctx, multiaddress) {
  const { method, content, meta } = ctx;
  if (!meta?.signatures) {
    return false;
  }

  const signature = meta.signatures[multiaddress];
  if (!signature) {
    return false;
  }

  const json = {
    method,
    content
  };
  const shared_key = Key.fromPublicMultiaddress(multiaddress);
  const result = await shared_key.verifySignatureForJson(signature, json);  
  return result;
}
