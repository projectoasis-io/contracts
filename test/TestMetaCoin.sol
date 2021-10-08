pragma solidity >=0.4.25 <0.7.0;

import "../contracts/OasisToken.sol";
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Stakinga/MasterChef.sol";

contract TestMetaCoin {

  function testInitialBalanceUsingDeployedContract() public {
    OasisToken meta = OasisToken(DeployedAddresses.OasisToken());

    uint expected = 10000;

    Assert.equal(meta.balanceOf(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    OasisToken meta = new OasisToken();

    uint expected = 10000;

    Assert.equal(meta.balanceOf(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

}
