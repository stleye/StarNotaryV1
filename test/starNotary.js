const StarNotary = artifacts.require('StarNotary.sol')
    
contract("StarNotary", accounts => {
    it("has correct name", async () => {
        const instance = await StarNotary.deployed();
        const starName = await instance.starName.call();
        assert.equal(starName, 'No name yet');
    });
});