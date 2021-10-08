pragma solidity >=0.4.25 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Stakinga/MasterChef.sol";

contract TestMetaCoin {

  function testInitialBalanceUsingDeployedContract() public {
        MasterChefv2 meta = MasterChefv2(DeployedAddresses.MasterChefv2());

        meta.setDevAddress(msg.sender);
        Assert.equal(meta.devAddress(),msg.sender,"aaa");
   }

  function testInitialBalanceWithNewMetaCoin() public {
  }

}
