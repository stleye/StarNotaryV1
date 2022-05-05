# StarNotaryV1

Steps to create this project

1 - truffle unbox webpack (It creates a lot of boilerplate code, set up directories, structures, etc)

2 - truffle develop (It starts a local Ethereum Network, check in what port is running and connect to it with Metamask, the chainId can be obtained running await web3.eth.getChainId();)


3 - we delete all the code that is not needed (ConvertLib.sol, MetaCoin.sol, metacoin.js, TestMetaCoin.sol)

4 - compile (in the console, inside truffle)

5 - test (in the console, inside truffle)
