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

    it("can change owner", async () => {
        const instance = await StarNotary.deployed();
        const firstOwner = accounts[0];
        const secondOwner = accounts[1];
        await instance.claimStar({from: firstOwner});
        assert.equal(await instance.starOwner.call(), firstOwner);
        await instance.claimStar({from: secondOwner});
        assert.equal(await instance.starOwner.call(), secondOwner);
    })

});