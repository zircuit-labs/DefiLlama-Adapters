const ADDRESSES = require("../helper/coreAssets.json");
const { sumTokensExport } = require("../helper/unwrapLPs");

const ZIRCUIT_STAKING_CONTRACT_ETHEREUM =
  "0xf047ab4c75cebf0eb9ed34ae2c186f3611aeafa6";
const ZIRCUIT_STAKING_CONTRACT_ZIRCUIT =
  "0x7d8311839eB44Dd5194abd2dd3998722455A24E0";

const TOKEN_CONTRACTS_ETHEREUM = [
  "0xa1290d69c65a6fe4df752f95823fae25cb99e5a7", // rsETH
  "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110", // ezETH
  "0x8c1BEd5b9a0928467c9B1341Da1D7BD5e10b6549", // lsETH
  ADDRESSES.ethereum.WETH, // ETH
  "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0", // rswETH
  "0x49446A0874197839D15395B908328a74ccc96Bc0", // mstETH
  "0xE46a5E19B19711332e33F33c2DB3eA143e86Bc10", // mwBETH
  "0x32bd822d615A3658A68b6fDD30c2fcb2C996D678", // mswETH
  ADDRESSES.ethereum.WSTETH, // wstETH
  "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee", // weETH
  "0xf951E335afb289353dc249e82926178EaC7DEd78", // swETH
  ADDRESSES.ethereum.USDe, // USDe
  ADDRESSES.ethereum.STONE, // cSTONE
  "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa", // mETH
  "0xD9A442856C234a39a81a089C06451EBAa4306a72", // pufETH
  "0x18f313Fc6Afc9b5FD6f0908c1b3D476E3feA1DD9", // egETH
  "0x5fD13359Ba15A84B76f7F87568309040176167cd", // amphrETH
  "0x7a4EffD87C2f3C55CA251080b1343b605f327E3a", // rstETH
  "0xBEEF69Ac7870777598A04B2bd4771c71212E6aBc", // steakLRT
  "0x84631c0d0081FDe56DeB72F6DE77abBbF6A9f93a", // Re7LRT
  "0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811", // pzETH
  "0xF469fBD2abcd6B9de8E169d128226C0Fc90a012e", // pumpBTC
  "0x917ceE801a67f933F2e6b33fC0cD1ED2d5909D88", // weETHs
  "0xC96dE26018A54D51c097160568752c4E3BD6C364", // FBTC
  "0x8236a87084f8b84306f72007f36f2618a5634494", // LBTC
  ADDRESSES.ethereum.FDUSD, // FDUSD
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC
  ADDRESSES.ethereum.USDC, // USDC
  ADDRESSES.ethereum.USDT, // USDT
];

const TOKEN_CONTRACTS_ZIRCUIT = [
  "0x4200000000000000000000000000000000000006", // wETH
  "0x91a0F6EBdCa0B4945FbF63ED4a95189d2b57163D", // mETH
  "0xD8b29106d4ceBad087C30B10c0E41BAa3A9ea703", // rswETH
  "0x850CDF416668210ED0c36bfFF5d21921C7adA3b8", // swETH
  "0xF469fBD2abcd6B9de8E169d128226C0Fc90a012e", // pumpBTC
  "0x9cb41CD74D01ae4b4f640EC40f7A60cA1bCF83E7", // pzETH
  "0x80137510979822322193FC997d400D5A6C747bf7", // STONE
  "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34", // USDe
  "0xF97c7A9bECe498FD6e31e344643589aACC96206A", // LsETH
  "0x4186BFC76E2E237523CBC30FD220FE055156b41F", // rsETH
  "0xf0e673Bc224A8Ca3ff67a61605814666b1234833", // wstETH
  "0x2416092f143378750bb29b79eD961ab195CcEea5", // ezETH
  "0x3535DF6e1d776631D0cBA53FE9efD34bCbDcEeD4", // weETH
  "0x4b03831043082E3e5191218ad5331E99AaaC4A81", // weETHs
  "0x5661cE45EE081CbE1f81BF23E46f4E01E11795D4", // FBTC
  "0x1C1Fb35334290b5ff1bF7B4c09130885b10Fc0f4", // mstETH
  "0x4bcc7c793534246BC18acD3737aA4897FF23B458", // egETH
  "0x9346A5043C590133FE900aec643D9622EDddBA57", // pufETH
  "0x7D5a79539d7B1c9aE5e54d18EEE188840f1Fe4CC", // amphrETH
  "0x19df5689Cfce64bC2A55F7220B0Cd522659955EF", // WBTC
  "0x7a7D161e387e80525678A3a5d8b91a2f6239175a", // mwBETH
  "0x6b6551B2D7cAA790F301197E4690836897A41900", // mswETH
  "0x8712796136Ac8e0EEeC123251ef93702f265aa80", // USDC
  "0x46dDa6a5a559d861c06EC9a95Fb395f5C3Db0742", // USDT
];

module.exports = {
  ethereum: {
    tvl: sumTokensExport({
      owner: ZIRCUIT_STAKING_CONTRACT_ETHEREUM,
      tokens: TOKEN_CONTRACTS_ETHEREUM,
    }),
  },
  zircuit: {
    tvl: sumTokensExport({
      owner: ZIRCUIT_STAKING_CONTRACT_ZIRCUIT,
      tokens: TOKEN_CONTRACTS_ZIRCUIT,
    }),
  },
};
