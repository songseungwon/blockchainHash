const crypto = require('crypto');

let blockchain = [];


const genesisBlock = {
    index: blockchain.length,
    timestamp: Date(),
    data: "1stblock",
    dataHash: crypto.createHash('sha256').update("firstblock").digest('hex'),
    previousHash: '',
    headerHash: crypto.createHash('sha256').update("firstblockheader").digest('hex')
}

let createBlock = function(data){
    let block = {
        index : blockchain.length,
        timestamp : Date(),
        data : data,
        dataHash : crypto.createHash('sha256').update(data).digest('hex'),
        previousHash : blockchain[blockchain.length-1].headerHash,
        headerHash : crypto.createHash('sha256').update(
            data + genesisBlock.previousHash).digest('hex')
    }
    blockchain.push(block);
}


blockchain.push(genesisBlock);

createBlock('2ndblock');
createBlock('3rdblock');
createBlock('4thblock');
createBlock('5thblock');

console.log(blockchain);