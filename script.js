var STAKINGCONTRACT_ADDRESS = "0x5cD1C00a88822182733E3ac335863fcC9A1c0705";
var STAKINGCONTRACT_ABI = [{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "CLAIMEDREWARD", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "round", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }], "name": "PAYOUT", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakingFee", "type": "uint256" }], "name": "STAKED", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "unstakingFee", "type": "uint256" }], "name": "UNSTAKED", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "ADDFUNDS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "CLAIMREWARD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "STAKE", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "XFI", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "WITHDRAW", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }], "name": "getPendingReward", "outputs": [{ "internalType": "uint256", "name": "_pendingReward", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "payouts", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "round", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDividends", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "yourXFIBalance", "outputs": [{ "internalType": "uint256", "name": "XFIBalance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }], "name": "yourStakedXFI", "outputs": [{ "internalType": "uint256", "name": "stakedXFI", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
var XFICONTRACT_ADDRESS = "0x5BEfBB272290dD5b8521D4a938f6c4757742c430";
var XFICONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

var accounts, STAKINGCONTRACT, XFICONTRACT, allowances = 0,
    XFIBalance = 0;

async function metamaskIntegration() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {} else {
        alert("The File APIs are not fully supported in this browser.");
    }

    //Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            //Request account access
            //if needed
            metaMask = false;
            ethereum.enable().then(metaMask = true);
        } catch (error) {
            metaMask = false;
            alert('Connect to metamask');
            //User denied account access...
        }
    }
    //Legacy dapp browsers...
    else if (window.web3) {
        metaMask = true;
        window.web3 = new Web3(web3.currentProvider);
    }
    //Non - dapp browsers...
    else {
        metaMask = false;
        alert('You should connected MetaMask first');
    }

    if (metaMask) {
        $('#account').removeClass('d-none');
    } else {

    }

    window.ethereum.on('accountsChanged', function(_accounts) {
        // Time to reload your interface with accounts[0]!
        // window.location.reload(true);
    });

    await web3.eth.getAccounts(function(error, result) {
        if (!error) {
            accounts = result;
        } else
            console.error(error);
    });
}

async function contractInitialization(contractAddress, contractABI) {
    return (await new web3.eth.Contract(contractABI, contractAddress));
}

function convert(n) {
    var sign = +n < 0 ? "-" : "",
        toStr = n.toString();
    if (!/e/i.test(toStr)) {
        return n;
    }
    var [lead, decimal, pow] = n.toString()
        .replace(/^-/, "")
        .replace(/^([0-9]+)(e.*)/, "$1.$2")
        .split(/e|\./);
    return +pow < 0 ?
        sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal :
        sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
}

function claimReward() {
    STAKINGCONTRACT.methods.CLAIMREWARD().send({
        from: accounts[0],
        gasLimit: 300000,
        gasPrice: 21000000000 //21 gwei
    }).on('transactionHash', function(hash) {
        $('#successModal').modal('show');
        setTimeout(function() {
            $('#successModal').modal('hide');
        }, 2000);
    }).on('confirmation', function(confirmationNumber, receipt) {

    });
}

async function getNetwork() {
    var net = await web3.eth.net.getNetworkType();
    if (net != "main") {
        $('#metamaskAddress').html('Switch to Main');
    } else {
        $('#metamaskAddress').html(accounts[0].substring(0, 6) + '...' + accounts[0].substring(36, 42));
    }
}

$(function() {

    // STACK INPUT
    $('#stack-value').keyup(function(event) {
        $('#stake-message').css({ 'display': 'none' });
        $('#stakeTransactionLink').css({ 'display': 'none' });

        var value = $(this).val();
        value = (convert(value * 10 ** 18)).toString();

        console.log(value);

        if (value > allowances) {
            $('#approval-section').removeClass('d-none');
            $('#btnStake').attr('disabled', '');
        } else {
            $('#approval-section').addClass('d-none');
            if ($(this).val() > 0) {
                $('#btnStake').removeAttr('disabled');
            } else {
                $('#btnStake').attr('disabled', '');
            }
        }
    });

    // APPROVE BTN

    $('#approveBtn').click(function(event) {

        XFICONTRACT.methods.approve(STAKINGCONTRACT_ADDRESS, XFIBalance).send({
            from: accounts[0],
            gasLimit: 50000,
            gasPrice: 21000000000 //21 gwei
        }).on('transactionHash', function(hash) {
            $('#approveBtn').attr('disabled', '');
            $('#approveBtn').find('.before-click').addClass('d-none');
            $('#approveBtn').find('.after-click').removeClass('d-none');

        }).on('confirmation', function(confirmationNumber, receipt) {
            $('#approveBtn').removeAttr('disabled');
            $('#approveBtn').find('.after-click').addClass('d-none');
            $('#approveBtn').find('.before-click').removeClass('d-none');
            $('#successModal').modal('show');

            setTimeout(function() {
                $('#successModal').modal('hide');
                $('#btnStake').removeAttr('disabled');
                $('#approval-section').addClass('d-none');
            }, 2000);
        });

    });

    // STACK BTN
    $('#btnStake').click(function(event) {
        event.preventDefault();
        $('#btnStake').attr('disabled', '');
        $('#btnStake').find('.before-click').addClass('d-none');
        $('#btnStake').find('.after-click').removeClass('d-none');

        var value = $('#stack-value').val();

        value = (convert(value * 10 ** 18)).toString();

        STAKINGCONTRACT.methods.STAKE(value).send({
            from: accounts[0],
            gasLimit: 300000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {

            $('#btnStake').removeAttr('disabled');
            $('#btnStake').find('.after-click').addClass('d-none');
            $('#btnStake').find('.before-click').removeClass('d-none');

            $('#stake-message').css({ 'display': 'block' });
            $('#stakeTransactionLink').css({ 'display': 'block' }); // show stake transaction link
            $('#stakeTransactionLink').attr("href", 'https://etherscan.io/tx/' + hash); // update transaction link

        }).on('confirmation', function(confirmationNumber, receipt) {

        });
    });


    // FUNDS INPUT
    $('#funds-value').keyup(function(event) {

        $('#funds-message').css({ 'display': 'none' });
        $('#transactionLink').css({ 'display': 'none' });

        var value = $(this).val();
        value = (convert(value * 10 ** 18)).toString();

        console.log(value);

        if (value > allowances) {

            $('#approval-section').removeClass('d-none');
            $('#btnFunds').attr('disabled', '');
        } else {
            $('#approval-section').addClass('d-none');
            if ($(this).val() > 0) {
                $('#btnFunds').removeAttr('disabled');
            } else {
                $('#btnFunds').attr('disabled', '');
            }
        }
    });

    // ADD FUNDS BTN
    $('#btnFunds').click(function(event) {
        event.preventDefault();
        $('#btnFunds').attr('disabled', '');
        $('#btnFunds').find('.before-click').addClass('d-none');
        $('#btnFunds').find('.after-click').removeClass('d-none');

        var value = $('#funds-value').val();

        value = (convert(value * 10 ** 18)).toString();

        STAKINGCONTRACT.methods.ADDFUNDS(value).send({
            from: accounts[0],
            gasLimit: 300000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {

            $('#btnFunds').removeAttr('disabled');
            $('#btnFunds').find('.after-click').addClass('d-none');
            $('#btnFunds').find('.before-click').removeClass('d-none');

            $('#funds-message').css({ 'display': 'block' });
            $('#transactionLink').css({ 'display': 'block' }); // show funds transaction link
            $('#transactionLink').attr("href", 'https://etherscan.io/tx/' + hash); // update transaction link

        }).on('confirmation', function(confirmationNumber, receipt) {

        });
    });

    // WITHDRAW

    $('#withdrawValue').keyup(function() {
        $('#funds-message').css({ 'display': 'none' });
        $('#withdrawTransactionLink').css({ 'display': 'none' });

        if ($(this).val() > 0) {
            $('#btnWithdraw').removeAttr('disabled');
        } else {
            $('#btnWithdraw').attr('disabled', '');
        }
    });

    $('#btnWithdraw').click(function(event) {
        event.preventDefault();

        $('#btnWithdraw').attr('disabled', '');
        $('#btnWithdraw').find('.before-click').addClass('d-none');
        $('#btnWithdraw').find('.after-click').removeClass('d-none');

        var value = $('#withdrawValue').val();
        value = (convert(value * 10 ** 18)).toString();
        STAKINGCONTRACT.methods.WITHDRAW(value).send({
            from: accounts[0],
            gasLimit: 300000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {

            $('#btnWithdraw').removeAttr('disabled');
            $('#btnWithdraw').find('.after-click').addClass('d-none');
            $('#btnWithdraw').find('.before-click').removeClass('d-none');

            $('#withdraw-message').css({ 'display': 'block' });
            $('#withdrawTransactionLink').css({ 'display': 'block' }); // show withdraw transaction link
            $('#withdrawTransactionLink').attr("href", 'https://etherscan.io/tx/' + hash); // update transaction link

        }).on('confirmation', function(confirmationNumber, receipt) {});
    });



    metamaskIntegration().then(x => {

        getNetwork();

        contractInitialization(STAKINGCONTRACT_ADDRESS, STAKINGCONTRACT_ABI).then(C => {
            STAKINGCONTRACT = C;
            STAKINGCONTRACT.methods.getPendingReward(accounts[0]).call().then(reward => $('#pendingReward').html((reward / 10 ** (18)).toFixed(4)));

            contractInitialization(XFICONTRACT_ADDRESS, XFICONTRACT_ABI).then(C => {
                XFICONTRACT = C;

                XFICONTRACT.methods.balanceOf(accounts[0]).call().then(balance => {
                    $('#XFIBalance').html((balance / 10 ** (18)).toFixed(4));
                    XFIBalance = balance;
                });

                STAKINGCONTRACT.methods.yourStakedXFI(accounts[0]).call().then(stakes => {
                    $('#yourStakes').html((stakes / 10 ** (18)).toFixed(4));

                    STAKINGCONTRACT.methods.totalStakes().call().then(ts => {
                        $('#totalStakes').html((ts / 10 ** (18)).toFixed(2)); // TOTAL STAKED
                        var stakingPercentage = (stakes / ts * 100).toFixed(6);
                        console.log(stakingPercentage);
                        if (ts == 0)
                            stakingPercentage = (0).toFixed(6);
                        $('#yourStakePercent').html(stakingPercentage);

                        //XFICONTRACT.methods.totalSupply().call().then(tsupp => {
                        var tsupp = 18000 * 10 ** (18);
                        var percentage = (ts / tsupp * 100).toFixed(6);
                        if (percentage == NaN)
                            percentage = 0;
                        $('#circulatingSupply').html(percentage);
                        //});

                        XFICONTRACT.methods.allowance(accounts[0], STAKINGCONTRACT_ADDRESS).call().then(_allowances => allowances = parseInt(_allowances));
                    });

                });

            });
        });

    });
});