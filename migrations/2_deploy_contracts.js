const StarNotary = artifacts.require("StartNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
};
