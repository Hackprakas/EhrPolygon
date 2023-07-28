const tsdk = require("@thirdweb-dev/sdk");

// If used on the BACKEND pass your 'secretKey'
const sdk = new tsdk.ThirdwebSDK("mumbai", {
  secretKey: "sPbI0KxwTm2_-OefX__lWd9-L0abWqk-95fMqqDGgo7Niwf_hMVy1x9VFzmVObxUuxUzyahqhgQPfwan3ESIcw",
});

async function main(){
    const contract = await sdk.getContract("0xBCFDA20fE34995a63187d8Fc2F385e62B7050F54");
    
    const data = await contract.call("addHospital", ["hello", "0xB30585f4c2b942c28CBDF42e387Ba6Cb9a6da446"]);

}

main();