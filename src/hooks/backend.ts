import { Actor } from "@dfinity/agent";
import { getAgent, getAuthClient } from "@/utils";
// @ts-ignore
import { idlFactory as AssetFactory } from "../dids/asset.did.js";
// @ts-ignore
import { idlFactory as ExtFactory } from "../dids/ext.did.js";
// @ts-ignore
import { idlFactory as GamesDeployerFactory } from "../dids/games_deployer.did.js";
// @ts-ignore
import { idlFactory as LedgerFactory } from "../dids/ledger.did.js";
// @ts-ignore
import { idlFactory as MintingDeployerFactory } from "../dids/minting_deployer.did.js";
// @ts-ignore
import { idlFactory as ManagementFactory } from "../dids/minting_deployer.did.js";

const games_canisterId = "6rvbl-uqaaa-aaaal-ab24a-cai";
const minting_canisterId = "na2jz-uqaaa-aaaal-qbtfq-cai";
const ledger_canisterId = "ryjl3-tyaaa-aaaaa-aaaba-cai";
const managenemt_canisterId = "aaaaa-aa";
const ext_canisterId = "4qmvs-qyaaa-aaaal-ab2rq-cai";

export const useGameClient = async () => {
  const authClient = await getAuthClient();
  const identity = authClient?.getIdentity();

  const agent = await getAgent(identity);

  return {
    actor: Actor.createActor(GamesDeployerFactory, {
      agent,
      canisterId: games_canisterId,
    }),
    methods: {
      get_all_games: "get_all_asset_canisters",
      get_user_games: "get_user_games",
      get_game: "get_game",
      get_game_cover: "get_game_cover",
      get_total_games: "get_total_games",
      get_users_total_games: "get_users_total_games",

      create_game: "create_game_canister",
      update_game_data: "update_game_data",
      update_game_cover: "update_game_cover",
    },
  };
};

export const useAssetClient = async (canister_id: string) => {
  const authClient = await getAuthClient();
  const identity = authClient?.getIdentity();

  const agent = await getAgent(identity);

  return {
    actor: Actor.createActor(AssetFactory, {
      agent,
      canisterId: canister_id,
    }),
    methods: {
      clear: "clear",
      commit_asset_upload: "commit_asset_upload",
      create_batch: "create_batch",
      create_chunk: "create_chunk",
    },
  };
};

export const useMintingDeployerClient = async () => {
  const authClient = await getAuthClient();
  const identity = authClient?.getIdentity();

  const agent = await getAgent(identity);

  return {
    actor: Actor.createActor(MintingDeployerFactory, {
      agent,
      canisterId: minting_canisterId,
    }),
    methods: {
      get_collections: "getCollections",
    },
  };
};

export const useLedgerClient = async () => {
  const authClient = await getAuthClient();
  const identity = authClient?.getIdentity();

  const agent = await getAgent(identity);

  return {
    actor: Actor.createActor(LedgerFactory, {
      agent,
      canisterId: ledger_canisterId,
    }),
    methods: {},
  };
};

export const useExtClient = async () => {
  const authClient = await getAuthClient();
  const identity = authClient?.getIdentity();

  const agent = await getAgent(identity);

  return {
    actor: Actor.createActor(ExtFactory, {
      agent,
      canisterId: ext_canisterId,
    }),
    methods: {},
  };
};

export const useManagementClient = async () => {
  const authClient = await getAuthClient();
  const identity = authClient?.getIdentity();

  const agent = await getAgent(identity);

  return {
    actor: Actor.createActor(ManagementFactory, {
      agent,
      canisterId: managenemt_canisterId,
    }),
    methods: {},
  };
};
