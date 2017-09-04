import {
  DASHBOARD_ACTIVE_COIN_CHANGE,
  DASHBOARD_ACTIVE_COIN_BALANCE,
  DASHBOARD_ACTIVE_COIN_SEND_FORM,
  DASHBOARD_ACTIVE_COIN_RECEIVE_FORM,
  DASHBOARD_ACTIVE_COIN_RESET_FORMS,
  DASHBOARD_ACTIVE_SECTION,
  DASHBOARD_ACTIVE_TXINFO_MODAL,
  ACTIVE_COIN_GET_ADDRESSES,
  DASHBOARD_ACTIVE_COIN_NATIVE_BALANCE,
  DASHBOARD_ACTIVE_COIN_NATIVE_TXHISTORY,
  DASHBOARD_ACTIVE_COIN_NATIVE_OPIDS,
  DASHBOARD_ACTIVE_COIN_SENDTO,
  DASHBOARD_ACTIVE_COIN_GET_CACHE,
  DASHBOARD_ACTIVE_COIN_MAIN_BASILISK_ADDR,
  DASHBOARD_ACTIVE_ADDRESS,
  SYNCING_FULL_MODE,
  SYNCING_NATIVE_MODE,
  DASHBOARD_UPDATE,
} from '../actions/storeType';

// TODO: refactor current coin props copy on change

export function ActiveCoin(state = {
  coins: {},
  coin: null,
  mode: null,
  send: false,
  receive: false,
  balance: 0,
  activeSection: 'default',
  showTransactionInfo: false,
  showTransactionInfoTxIndex: null,
  txhistory: [],
  opids: null,
  lastSendToResponse: null,
  cache: null,
  mainBasiliskAddress: null,
  activeAddress: null,
  progress: null,
}, action) {
  switch (action.type) {
    case DASHBOARD_ACTIVE_COIN_CHANGE:
      if (state.coins[action.coin]) {
        const _coinData = state.coins[action.coin];
        const _coinDataToStore = {
          addresses: state.addresses,
          coin: state.coin,
          mode: state.mode,
          balance: state.balance,
          txhistory: state.txhistory,
          send: state.send,
          receive: state.receive,
          showTransactionInfo: state.showTransactionInfo,
          showTransactionInfoTxIndex: state.showTransactionInfoTxIndex,
          activeSection: state.activeSection,
          lastSendToResponse: state.lastSendToResponse,
          mainBasiliskAddress: state.mainBasiliskAddress,
          opids: state.opids,
          activeBasiliskAddress: state.activeBasiliskAddress,
          progress: state.progress,
        };
        let _coins = state.coins;
        _coins[state.coin] = _coinDataToStore;

        return {
          ...state,
          coins: _coins,
          addresses: _coinData.addresses,
          coin: _coinData.coin,
          mode: _coinData.mode,
          balance: _coinData.balance,
          txhistory: _coinData.txhistory,
          send: _coinData.send,
          receive: _coinData.receive,
          showTransactionInfo: _coinData.showTransactionInfo,
          showTransactionInfoTxIndex: _coinData.showTransactionInfoTxIndex,
          activeSection: _coinData.activeSection,
          lastSendToResponse: _coinData.lastSendToResponse,
          mainBasiliskAddress: _coinData.mainBasiliskAddress,
          opids: _coinData.opids,
          activeBasiliskAddress: _coinData.activeBasiliskAddress,
          progress: _coinData.progress,
        };
      } else {
        if (state.coin) {
          const _coinData = {
            addresses: state.addresses,
            coin: state.coin,
            mode: state.mode,
            balance: state.balance,
            txhistory: state.txhistory,
            send: state.send,
            receive: state.receive,
            showTransactionInfo: state.showTransactionInfo,
            showTransactionInfoTxIndex: state.showTransactionInfoTxIndex,
            activeSection: state.activeSection,
            lastSendToResponse: state.lastSendToResponse,
            mainBasiliskAddress: state.mainBasiliskAddress,
            opids: state.opids,
            activeBasiliskAddress: state.activeBasiliskAddress,
            progress: state.progress,
          };
          let _coins = state.coins;
          _coins[state.coin] = _coinData;

          return {
            ...state,
            coins: _coins,
            coin: action.coin,
            mode: action.mode,
            balance: 0,
            txhistory: 'loading',
            send: false,
            receive: false,
            showTransactionInfo: false,
            showTransactionInfoTxIndex: null,
            activeSection: 'default',
            progress: null,
          };
        } else {
          return {
            ...state,
            coin: action.coin,
            mode: action.mode,
            balance: 0,
            txhistory: 'loading',
            send: false,
            receive: false,
            showTransactionInfo: false,
            showTransactionInfoTxIndex: null,
            activeSection: 'default',
            progress: null,
          };
        }
      }
    case DASHBOARD_ACTIVE_COIN_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    case DASHBOARD_ACTIVE_COIN_SEND_FORM:
      return {
        ...state,
        send: action.send,
        receive: false,
      };
    case DASHBOARD_ACTIVE_COIN_RECEIVE_FORM:
      return {
        ...state,
        send: false,
        receive: action.receive,
      };
    case DASHBOARD_ACTIVE_COIN_RESET_FORMS:
      return {
        ...state,
        send: false,
        receive: false,
      };
    case ACTIVE_COIN_GET_ADDRESSES:
      return {
        ...state,
        addresses: action.addresses,
      };
    case DASHBOARD_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.section,
      };
    case DASHBOARD_ACTIVE_TXINFO_MODAL:
      return {
        ...state,
        showTransactionInfo: action.showTransactionInfo,
        showTransactionInfoTxIndex: action.showTransactionInfoTxIndex,
      };
    case DASHBOARD_ACTIVE_COIN_NATIVE_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    case DASHBOARD_ACTIVE_COIN_NATIVE_TXHISTORY:
      return {
        ...state,
        txhistory: action.txhistory,
      };
    case DASHBOARD_ACTIVE_COIN_NATIVE_OPIDS:
      return {
        ...state,
        opids: action.opids,
      };
    case DASHBOARD_ACTIVE_COIN_SENDTO:
      return {
        ...state,
        lastSendToResponse: action.lastSendToResponse,
      };
    case DASHBOARD_ACTIVE_COIN_GET_CACHE:
      return {
        ...state,
        cache: action.cache,
      };
    case DASHBOARD_ACTIVE_COIN_MAIN_BASILISK_ADDR:
      return {
        ...state,
        mainBasiliskAddress: action.address,
      };
    case DASHBOARD_ACTIVE_ADDRESS:
      return {
        ...state,
        activeAddress: action.address,
      };
    case SYNCING_FULL_MODE:
      return {
        ...state,
        progress: action.progress,
      };
    case SYNCING_NATIVE_MODE:
      return {
        ...state,
        progress: action.progress,
      };
    case DASHBOARD_UPDATE:
      return {
        ...state,
        progress: action.progress,
        opids: action.opids,
        txhistory: action.txhistory,
        balance: action.balance,
        addresses: action.addresses,
      };
    default:
      return state;
  }
}

export default ActiveCoin;
