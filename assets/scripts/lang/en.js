const _lang = {
  'EN': {
    'INDEX': {
      'REFRESHING_BASILISK_NET': 'Refreshing Basilisk Network Connections',
      'SELECT_A_COIN': 'Select Coin to add to EasyDEX',
      'WALLETS': 'Wallets',
      'ACTIVATE_COIN': 'Activate Coin',
      'WELCOME_PLEASE_ADD': 'Welcome. Please add coin to start.',
      'SELECT_SEED_TYPE': 'Please select compatible wallet seed type',
      'SELECT': '-Select-',
      'FULL_MODE': 'Full mode',
      'FULL_MODE_DESC': 'Adding a coin in Full mode will download its complete blockchain to your local machine. ' +
      									'This is the most optimum mode for performance, but will require higher system requirements to have one or multiple coins running in Full mode on your local machine.',
      'BASILISK_MODE': 'Basilisk Mode',
      'BASILISK_MODE_DESC': 'In Basilisk Mode, a coin will not download its Full blockchain to the local machine. ' +
      											'This mode is best if you have less disk space on your machine, or your system has slower performance. ' +
      											'It will be fully functional, but a bit slower to perform as compared to Full mode.',
      'NATIVE_MODE': 'Native Mode',
      'NATIVE_MODE_DESC1': 'This mode is ONLY available for KOMODO Coin, PAX FIAT Chains, Assetchains, and Geckochains. ' +
      										 'This mode uses the',
      'NATIVE_MODE_DESC2': 'instead of the',
      'NATIVE_MODE_DESC3': 'to query blockchain data',
      'NATIVE_MODE_DESC4': 'is the so far mode which will allow you to do',
      'NATIVE_MODE_DESC5': 'Z Transactions',
      'NATIVE_MODE_DESC6': 'Private Transactions',
      'UNSUPPORTED_BROWSER': 'Uh Oh! Unsupported Web Browser :-(',
      'CLOSE': 'Close',
      'IE_UNSUPPORTED': 'The current version of EasyDEX-GUI doesn\'t support Internet Explorer',
      'PLEASE_USE': 'Please use either',
      'OR': 'or',
      'TO_USE': 'to use',
      'PLEASE_CLICK_ON': 'Please click on browser\'s logo to visit website for installation instructions',
      'WELCOME_LOGIN': 'Welcome. Please login',
      'WALLET_SEED': 'Wallet Seed',
      'SIGN_IN': 'Sign in',
      'CREATE_WALLET': 'Create new wallet',
      'LOGIN_ANOTHER_WALLET': 'Login to another wallet',
      'CONFIRM_SEED': 'Confirm Wallet Seed',
      'REGISTER': 'Register',
      'BACK_TO_LOGIN': 'Back to Login',
      'TOGGLE_NAV': 'Toggle navigation',
      'TOGGLE_SEARCH': 'Toggle Search',
      'TOGGLE_MENUBAR': 'Toggle menubar',
      'SETTINGS': 'Settings',
      'ABOUT_IGUANA': 'About Iguana',
      'LOGOUT': 'Logout',
      'DASHBOARD': 'Dashboard',
      'WALLET_SETTINGS': 'Wallet Settings',
      'KMD_WALLET': 'Komodo Wallet',
      'ZC_WALLET': 'Zcash Wallet',
      'ACTIVE_COINS': 'Active Coins',
      'TRANSACTIONS': 'Transactions',
      'SEND': 'Send',
      'RECEIVE': 'Receive',
      'BUNDLES': 'Bundles',
      'BALANCES': 'Balances',
      'BALANCE': 'Balance',
      'VALIDATED': 'Validated',
      'NO_WALLET_CAPS': 'NO WALLET SELECTED',
      'PLEASE_SELECT_A_WALLET': 'Please select a wallet from active coins list on left',
      'ADDRESS': 'Address',
      'MY': 'My',
      'COPY': 'copy',
      'ACTIVATING_WALLET_RT': 'Activating wallet once Real Time blocks starts syncing...',
      'IGUANA_FULL_MODE_SYNC_P1': 'An Iguana Full Mode coin synchronizes the blockchain using an entirely different format than traditional blockchain software. ' +
      														'Iguana\'s Full Mode uses Memory Mapped Files and stores data in bundles. ' +
      														'That\'s why you see four different colored synchronizing progress bars.',
      'IGUANA_FULL_MODE_SYNC_P2': 'Once all these progress bars reach 100%, the Real Time blocks start synchronizing. ' +
      														'Only after the Real Time sync mode activates will you be able to see current data in your wallet and make any transactions.',
      'IGUANA_FULL_MODE_SYNC_P3': 'Please wait for all other progress bars to disappear and the first blue bar turns to green.<br/>' +
                                  'That would mean the wallet is in Real Time Sync mode.',
      'FETCHING_COIN_DATA': 'Fetching coin data from network. Please wait...',
      'INTEREST_EARNED': 'Interest Earned',
      'TOTAL_BALANCE': 'Total Balance',
      'FETCHING_BASILISK_DATA': 'Fetching Basilisk Data...',
      'GET_BALANCE': 'Get Balance',
      'REFRESH': 'Refresh',
      'LIST_UNSPENT': 'List Unspent',
      'LIST_TRANSACTIONS': 'List Transactions',
      'BASILISK_ACTIONS': 'Basilisk Actions',
      'GET_NOTARY_NODES_LIST': 'Get Notary Nodes List',
      'REFRESH_BASILISK_CONNECTIONS': 'Refresh Basilisk Connections',
      'FETCH_WALLET_DATA': 'Fetch Wallet Data',
      'REFETCH_WALLET_DATA': 'Clear cache and fetch Wallet Data',
      'TRANSACTION_HISTORY': 'Transactions History',
      'DIRECTION': 'Direction',
      'CONFIRMATIONS': 'Confirmations',
      'AMOUNT': 'Amount',
      'TIME': 'Time',
      'DEST_ADDRESS': 'Dest. Address',
      'TX_DETAIL': 'Tx Detail',
      'FILL_SEND_FORM': 'Fill Send Form',
      'FILL_SEND_DETAILS': 'Fill sending transaction details',
      'CONFIRMING': 'Confirming',
      'CONFIRM_DETAILS': 'Confirm if detials are correct',
      'PROCESSING_TX': 'Processing Tx',
      'PROCESSING_DETAILS': 'Processing and showing details',
      'SEND_FROM': 'Send From',
      'SEND_TO': 'Send To',
      'FEE': 'Fee',
      'TOTAL': 'Total',
      'AMOUNT_SM': 'amount',
      'DONT_SEND': 'Don\'t Send Transaction. Just give me signed transaction bytes.',
      'TO': 'To:',
      'TX_FEE_REQ': 'Transaction Fee (Required by miners)',
      'FROM': 'From:',
      'CONFIRM': 'Confirm',
      'BACK': 'Back',
      'TRANSACTION_RESULT': 'Transaction Result',
      'KEY': 'Key',
      'VALUE': 'Value',
      'INFO': 'Info',
      'MAKE_ANOTHER_TX': 'Make Another Transaction',
      'RECEIVING_ADDRESS': 'Receiving Addresses',
      'TYPE': 'Type',
      'INTEREST': 'Interest',
      'OOPS_ERROR': 'Opps! Something is not right...',
      'OOPS_ERROR_DESC': 'Could not connect to external wallet. Reasons can be:<br/>' +
                         '- Your External Wallet/daemon isn\'t running<br/>' +
                         '- Your External Wallet/daemon is running, but iguana is not given command to connect to External Wallet/daemon<br/>' +
                         '- Your External Wallet/daemon is setup, but is not setup with config settings like<br/>',
      'ACTIVATING_CHAIN': 'Activating best chain',
      'KMD_STARTED': 'Komodo daemon has been started and is processing.<br/>' +
                     'Please wait while the best chain is being activated.',
      'CONNECTIONS': 'Connections',
      'TRANSPARENT_BALANCE': 'Transparent Balance',
      'Z_BALANCE': 'Private (Z) Balance',
      'INTEREST_EARNED': 'Interest Earned',
      'ZT_BALANCE': 'Total (Z+T) Balance',
      'GET_NEW_ADDRESS': 'Get New Address',
      'TRANSPARENT_ADDRESS': 'Transparent Address',
      'PRIVATE_Z_ADDRESS': 'Private (Z) Address',
      'OPERATIONS_STATUSES': 'Operations Statuses',
      'STATUS': 'Status',
      'RESULT': 'Result',
      'WALLET_INFO': 'Wallet Info',
      'WALLET_VERSION': 'Wallet Version',
      'UNCONFIRMED_BALANCE': 'Unconfirmed Balance',
      'IMMATURE_BALANCE': 'Immature Balance',
      'TOTAL_TX_COUNT': 'Total Transactions Count',
      'INFO': 'Info',
      'VERSION': 'Version',
      'PROTOCOL_VERSION': 'Protocol Version',
      'NOTARIZED': 'Notarized',
      'BLOCKS': 'Blocks',
      'DIFFICULTY': 'Difficulty',
      'PAY_TX_FEE': 'Pay Transaction Fee',
      'RELAY_FEE': 'Relay Fee',
      'ERRORS': 'Errors',
      'ADD_NODE': 'Add Node',
      'USE_THIS_SECTION': 'Use this section to check if the node IP you wish to add is allready active as peer of your coin:',
      'SELECT_COIN': '-Select Coin-',
      'CHECK_NODES': 'Check Nodes',
      'USE_THIS_SECTION_PEER': 'Use this section to add a peer IP to a selected coin:',
      'WALLET_BACKUP': 'Wallet Backup',
      'FIAT_CURRENCY': 'Fiat Currency',
      'EXPORT_KEYS': 'Export Keys',
      'ONLY_ACTIVE_WIF_KEYS': 'Only the active coin wallet wif keys will be shown here.<br/>' +
                              'If you don\'t see a wif key for the coin you are looking for please active it by adding it from EasyDEX Dashboard.<br/>' +
                              'You can use these wif keys to import to another coin wallets.',
      'PLEASE_KEEP_KEYS_SAFE': 'Please keep these keys extra safe and secure.',
      'PASSPHRASE': 'Passphrase',
      'GET_WIF_KEYS': 'Get Wif Keys',
      'IMPORT_KEYS': 'Import Keys',
      'IMPORT_KEYS_DESC_P1': 'This section allows you to import private key of all iguana supported coins, Assetchain, Geckochain, or PAXchain by the wallet.',
      'IMPORT_KEYS_DESC_P2': 'It is not mandatory to have that coin active in the wallet for which you are executing import private key process.',
      'IMPORT_KEYS_DESC_P3': 'You\'ll also notice the private key you imported for one coin or chain will also be showing a new address in all other coin wallets\' receiving address section. ' +
      											 'It is normal.',
      'INPUT_PRIV_KEY': 'Input Private Key',
      'IMPORT_PRIV_KEY': 'Import Private Key',
      'DEBUG_LOG': 'Debug Log',
      'DEBUG_LOG_DESC': 'This section allows you to read last N lines from debug log file.',
      'DEBUG_LOG_LINES': 'Input number of lines to read',
      'TARGET': 'Target',
      'LOAD_DEBUG_LOG': 'Load debug log',
      'REFRESH_FUNDS': 'Refresh Funds'
    },
    'JUMBLR': {
    	'NOTICE': 'EXPERIMENTAL TEST VERSION ONLY',
    	'DESCRIPTION': 'Jumblr feature is very experimental and for now, is Only enabled for testing and debugging.' +
    								 'Please use the current version of Jumblr only with small amounts if you are participating in testing this feature.',
    	'NEED_NATIVE': 'Need Native Mode Komodo',
    	'TO_USE_JUMBLR': 'To use Jumblr feature, you need to activate Komodo in Native Mode.',
    	'IF_YOU_ALREADY_RUNNING': 'If you are already running Komodo in either Basilisk Mode or Full Mode, close the wallet and restart again to start Komodo In Native Mode.',
    	'THIS_SCREEN_DOESNT_REFRESH': 'This screen does not auto refresh. ' +
    																'You will need to hit the Refresh button on the top right corner of the screen to get latest Jumblr data.'
    },
    'DASHBOARD': {
      'SELECT_ADDRESS': '- Select Address -',
      'SEND_TOADDR_REQ': 'To Address is required.',
      'SEND_FROMADDR_REQ': 'From Address is required.',
      'SEND_AMOUNT_REQ': 'Please enter amount to send.',
      'SEND_FEE_REQ': 'Make sure you have fee entered. Default value is',
      'SEND_TOTAL_REQ': 'Make sure you have both amount and fee entered to calculate final total.',
      'SEND_TX_PROGRESS': 'The transaction submitted is processing. Once processed the transaction details will be displayed here.',
      'UNKNOWN': 'Unknown',
      'IN': 'IN',
      'OUT': 'OUT',
      'MINED': 'Mined',
      'IMMATURE': 'Immature',
      'ZADDR_NOT_LISTED': 'Z Address not listed by wallet'
    },
    'TOASTR': {
      'WALLET_NOTIFICATION': 'Wallet Notification',
      'ACCOUNT_NOTIFICATION': 'Account Notification',
      'BASILISK_NOTIFICATION': 'Basilisk Notification',
      'COIN_NOTIFICATION': 'Coin Notification',
      'TX_NOTIFICATION': 'Transaction Notification',
      'SERVICE_NOTIFICATION': 'Service Notification',
      'LOGIN_NOTIFICATION': 'Login Notification',
      'SETTINGS_NOTIFICATION': 'Settings Notification',
      'RECADDR_UPDATED': 'Receiving Address list updated',
      'IGUANA_CONN_ERR': 'Unable to connect to Iguana',
      'FETCHING_DATA': 'Fetching Data. Please wait for a minute to complete this task.',
      'LESS_RESPONSES_REQ': 'Less than required responses. Please try again.',
      'SWITCHED_TO': 'switched to',
      'MODE': 'Mode',
      'TX_SENT': 'Transaction Sent',
      'TX_SEND_ERR': 'Unable to complete transaction',
      'LOOKS_LIKE': 'Looks like',
      'ALREADY_RUNNING': 'already running',
      'STARTED_IN': 'started in',
      'IGUANA_CONN_ERR_ALT': 'Unable to connect with iguana service. 127.0.0.1:7778',
      'IGUANA_ARE_YOU_SURE': 'Are you sure Iguana is running?',
      'SIGNED_TX_GENERATED': 'Signed transaction generated',
      'SENDING_TX': 'Sending Transaction to Network',
      'SIGNED_TX_SENT': 'Signed transaction sent successfully',
      'GETTING_TXID_INFO': 'Getting txid info for updating funds data',
      'REFRESHING_FUNDS': 'Refreshing Wallet Funds',
      'TX_FAILED': 'Sent Transaction failed. Please check send Transaction page for details.',
      'TX_SENT_ALT': 'Transaction sent successfully. Check send section for details.',
      'COIN_STARTED': 'coin started',
      'ADDR_ALREADY_REG': 'address already registered on network.',
      'REG': 'Registered',
      'REG_ADDR': 'address on network.',
      'REG_ADDR_FAILED': 'address Registeration failed. Please try again.',
      'INVALID_QUERY': 'Invalid query sent for',
      'TRY_AGAIN': 'Please try again.',
      'ADDR_ISNT_REG': 'Address isn\'t Registered on Network. Please Register',
      'INVALID_QUERY_ALT': 'Invalid query sent. Please try again.',
      'VALIDATION_SUCCESS': 'Validation Success on Network',
      'KMD_NATIVE_CON_ERROR': 'Connection Error. Is external wallet running?',
      'KMD_IGUANA_CON_ERROR': 'Connection Error. Is iguana connected to external wallet?',
      'LOGIN_SUCCESSFULL': 'Login Successfull',
      'NO_COIN_RUNNING': 'Seems like there\'s no coin running. Activating BTC.',
      'OPPS': 'Opps... Something went wrong!',
      'INVALID_PASSPHRASE': 'Invalid Passphrase. Make sure your passphrase is correct, or create new wallet.',
      'WALLET_CREATED_SUCCESFULLY': 'Wallet created successfully',
      'LOGOUT_SUCCESSFULL': 'Logout Successfull',
      'WALLET_LOCKED': 'Wallet Locked Successfully',
      'PRIV_KEY_IMPORTED': 'Private Key Imported Successfully!',
      'PRIV_KEY_NOT_IMPORTED': 'Private Key is not imported.',
      'NULL RETURN': 'null return from iguana_bitcoinRPC',
      'ADDED_TO': 'added to',
      'SUCCESSFULLY': 'Successfully'
    },
    'COIN_WALLETS': {
      'TX_FAILED': 'Transaction Failed',
      'TX_SUCCESS': 'Transaction Successful',
      'TX': 'Transaction'
    },
    'IAPI': {
      'PUBLIC_SM': 'public'
    },
    'KMD_NATIVE': {
      'SELECT_ADDRESS': 'Select Transparent or Private Address',
      'SELECT_ADDRESS_ALT': 'Select Transparent or Private KMD Address',
      'PRIVATE': 'private',
      'NEW_ADDR_GENERATED': 'New address generated successfully',
      'QUEUED': 'Queued',
      'PLEASE_REFRESH': 'Please press refresh button in a minute or so to see updated status',
      'EXECUTING': 'Executing',
      'FAILED': 'Failed',
      'SUCCESS': 'Success',
      'MESSAGE': 'Message',
      'EXECUTION_SECONDS': 'Execution Seconds'
    },
    'LOGIN': {
      'PWD_REQ': 'Password is required.',
      'WALLET_SEED_REQ': 'Wallet seed is required.',
      'SAVED_WALLET_SEED': 'Have you saved your wallet seed?',
      'SEED_MAKE_SURE_BACKUP': 'Make sure you have it backed up. Without this seed you won\'t be able to access your wallet in the future!',
      'YES_I_BACKUP': 'Yes, I have taken backup.',
      'WALLET_LOCKED_LOGIN': 'Wallet Locked. Please login.',
      'UNLOCK': 'Unlock',
      'SIGN_IN': 'Sign In',
      'WELCOME': 'Welcome'
    },
    'SIDEBAR': {
      'EDEX_MOTTO': 'Most Secure, Easy and Native Decentralised Exchange',
      'JUMBLR_MOTTO': 'Secure, Native and Decentralised Coin Anonymizer'
    },
    'SETTINGS': {
      'PASSPHRASE_REQ': 'Passphrase is required.'
    }
  }
};