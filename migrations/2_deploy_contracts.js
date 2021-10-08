const OasisToken = artifacts.require("OasisToken");

module.exports = function(deployer) {
  deployer.deploy(OasisToken);
};
