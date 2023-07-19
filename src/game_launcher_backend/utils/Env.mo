import A "mo:base/AssocList";
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Cycles "mo:base/ExperimentalCycles";
import Char "mo:base/Char";
import Error "mo:base/Error";
import Float "mo:base/Float";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Map "mo:base/HashMap";
import Int "mo:base/Int";
import Int16 "mo:base/Int16";
import Int8 "mo:base/Int8";
import Iter "mo:base/Iter";
import L "mo:base/List";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";
import Option "mo:base/Option";
import Prelude "mo:base/Prelude";
import Prim "mo:prim";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Trie "mo:base/Trie";
import Trie2D "mo:base/Trie";

module {
    public let Ledger = "ryjl3-tyaaa-aaaaa-aaaba-cai"; //ICP Ledger canister_id
    public let IC_Management = "aaaaa-aa"; //IC Management canister_id
    public let ICRC1_Ledger = "mxzaz-hqaaa-aaaar-qaada-cai"; //ckBTC as ICRC-1 Token

    public let WorldbHub = "j362g-ziaaa-aaaap-abf6a-cai"; 
    public let admins = [
        "26otq-bnbgp-bfbhy-i7ypc-czyxx-3rlax-yrrny-issrb-kwepg-vqtcs-pae",//JACK
        "2ot7t-idkzt-murdg-in2md-bmj2w-urej7-ft6wa-i4bd3-zglmv-pf42b-zqe",
    ]; //add admin principal for access control over DB

    public let paymenthub_canister_id = "5hr3g-hqaaa-aaaap-abbxa-cai"; //!avoid changing this!
    public let stakinghub_canister_id = "jozll-yaaaa-aaaap-abf5q-cai"; //!avoid changing this!
    public let StakingHubAdmin = "";

    public let NftDeployerCanisterId = "j474s-uqaaa-aaaap-abf6q-cai";
    public let NftDeployerCanisterIdStaging = "fbkar-zaaaa-aaaal-qbzca-cai";
};
