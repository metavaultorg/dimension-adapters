import { CHAIN } from "../../helpers/chains";
import { getUniV2LogAdapter } from "../../helpers/uniswap";
import { Adapter } from "../../adapters/types";

const adapter: Adapter = {
  version: 2,
  adapter: {
    [CHAIN.AVAX]: {
      fetch: getUniV2LogAdapter({
        factory: "0x858e3312ed3a876947ea49d572a7c42de08af7ee",
        fees: 0.001,
      }),
      start: 1717632000,
    },
    [CHAIN.BASE]: {
      fetch: getUniV2LogAdapter({
        factory: "0x858e3312ed3a876947ea49d572a7c42de08af7ee",
        fees: 0.0025,
      }),
      start: 1725408000,
    },
  },
};

export default adapter;
