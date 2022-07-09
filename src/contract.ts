import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, PairCreated } from "../generated/Contract/Contract"
import { Pair } from "../generated/schema"

export function handlePairCreated(event: PairCreated): void {
  const pair = new Pair(event.params.pair.toHex());
  pair.token0 = event.params.token0;
  pair.token1 = event.params.token1;
  pair.save();
}
