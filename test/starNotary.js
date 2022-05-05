const StarNotary = artifacts.require('StarNotary.sol')
    
contract("StarNotary", accounts => {
    it("has correct name", async () => {
        const instance = await StarNotary.deployed();
        const starName = await instance.starName.call();
        assert.equal(starName, 'No name yet');
    });

    it("can be claimed", async () => {
        const instance = await StarNotary.deployed();
        const owner = accounts[0];
        await instance.claimStar({from: owner}); //the from is a special object that can be passed as a last parameter to any function
        assert.equal(await instance.starOwner.call(), owner);
    });

    it("can change star name", async () => {
        const instance = await StarNotary.deployed();
        await instance.changeName("Sun");
        assert.equal(await instance.starName.call(), "Sun");
    });

});