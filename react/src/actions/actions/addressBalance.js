import { ACTIVE_COIN_GET_ADDRESSES } from '../storeType';
import {
  triggerToaster,
  shepherdGroomPost,
  getPassthruAgent,
  iguanaHashHex
} from '../actionCreators';
import {
  logGuiHttp,
  guiLogState
} from './log';
import Config from '../../config';

function getKMDAddressesNativeState(json) {
  return {
    type: ACTIVE_COIN_GET_ADDRESSES,
    addresses: json,
  }
}

export function getKMDAddressesNative(coin, mode, currentAddress) {
  const type = [
    'public',
    'private'
  ];

  if (mode !== 'native') {
    type.pop();
  }

  return dispatch => {
    Promise.all(type.map((_type, index) => {
      return new Promise((resolve, reject) => {
        let payload;
        let ajaxFunctionInput = _type === 'public' ? 'getaddressesbyaccount' : 'z_listaddresses';
        let tmplistaddrHexInput = _type === 'public' ? '222200' : '';
        let passthruAgent = getPassthruAgent(coin);
        let tmpIguanaRPCAuth = `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`;

        if (passthruAgent === 'iguana') {
          payload = {
            'userpass': tmpIguanaRPCAuth,
            'agent': passthruAgent,
            'method': 'passthru',
            'asset': coin,
            'function': ajaxFunctionInput,
            'hex': tmplistaddrHexInput,
          };
        } else {
          payload = {
            'userpass': tmpIguanaRPCAuth,
            'agent': passthruAgent,
            'method': 'passthru',
            'function': ajaxFunctionInput,
            'hex': tmplistaddrHexInput,
          };
        }

        if (mode === 'full' ||
            mode === 'basilisk') {
          payload = {
            'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
            'coin': coin,
            'agent': 'bitcoinrpc',
            'method': 'getaddressesbyaccount',
            'account': '*',
          };
        }

        if (mode === 'basilisk') {
          const pubkey = JSON.parse(sessionStorage.getItem('IguanaActiveAccount')).pubkey;

          fetch(`http://127.0.0.1:${Config.agamaPort}/shepherd/cache?pubkey=${pubkey}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .catch(function(error) {
            console.log(error);
            dispatch(
              triggerToaster(
                'getKMDAddressesNative+addresslist+cache',
                'Error',
                'error'
              )
            );
          })
          .then(response => response.json())
          .then(function(json) {
            json = json.result.basilisk;

            if (json[coin].addresses) {
              resolve({ 'result': json[coin].addresses });
            }
          })
        } else {
          if (Config.cli.default &&
              mode === 'native') {
            payload = {
              mode: null,
              chain: coin,
              cmd: payload.function,
              params: [''],
            };
          }

          const _timestamp = Date.now();
          if (Config.debug) {
            dispatch(logGuiHttp({
              'timestamp': _timestamp,
              'function': 'getKMDAddressesNative',
              'type': 'post',
              'url': Config.cli.default ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${Config.iguanaCorePort}`,
              'payload': payload,
              'status': 'pending',
            }));
          }

          let _fetchConfig = {
            method: 'POST',
            body: JSON.stringify(payload),
          };

          if (Config.cli.default &&
              mode === 'native') {
            _fetchConfig = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 'payload': payload }),
            };
          }

          fetch(
            Config.cli.default && mode === 'native' ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${Config.iguanaCorePort}`,
            _fetchConfig
          )
          .catch(function(error) {
            console.log(error);
            if (Config.debug) {
              dispatch(logGuiHttp({
                'timestamp': _timestamp,
                'status': 'error',
                'response': error,
              }));
            }
            dispatch(
              triggerToaster(
                'getKMDAddressesNative',
                'Error',
                'error'
              )
            );
          })
          .then(response => response.json())
          .then(json => {
            if (Config.debug) {
              dispatch(logGuiHttp({
                'timestamp': _timestamp,
                'status': 'success',
                'response': json,
              }));
            }
            resolve(Config.cli.default && mode === 'native' ? json.result : json);
          })
        }
      });
    }))
    .then(result => {
      // TODO: split into 2 functions
      const passthruAgent = getPassthruAgent(coin);
      const tmpIguanaRPCAuth = `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`;
      let payload = {
        'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
        'agent': passthruAgent,
        'method': 'passthru',
        'function': 'listunspent',
        'hex': '',
      };

      if (passthruAgent === 'iguana') {
        payload.asset = coin;
      }

      if (mode === 'full') {
        payload = {
          'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
          'coin': coin,
          'method': 'listunspent',
          'params': [
            1,
            9999999,
          ],
        };
      }

      if (mode === 'basilisk') {
        payload = {
          'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
          'agent': 'dex',
          'method': 'listunspent',
          'address': currentAddress,
          'symbol': coin,
        };
      }

      function calcBalance(result, json, dispatch, mode) {
        if (mode === 'full' ||
            mode === 'basilisk') {
          result[0] = result[0].result;
        }

        if (mode !== 'basilisk' &&
            json &&
            json.length) {
          const allAddrArray = json.map(res => res.address).filter((x, i, a) => a.indexOf(x) == i);

          for (let a = 0; a < allAddrArray.length; a++) {
            const filteredArray = json.filter(res => res.address === allAddrArray[a]).map(res => res.amount);

            let isNewAddr = true;
            for (let x = 0; x < result.length && isNewAddr; x++) {
              for (let y = 0; y < result[x].length && isNewAddr; y++) {
                if (allAddrArray[a] === result[x][y]) {
                  isNewAddr = false;
                }
              }
            }

            if (isNewAddr &&
                (allAddrArray[a].substring(0, 2) === 'zc' ||
                allAddrArray[a].substring(0, 2) === 'zt')) {
              result[1][result[1].length] = allAddrArray[a];
            } else {
              result[0][result[0].length] = allAddrArray[a];
            }
          }
        }

        // remove addr duplicates
        if (result[0]) {
          result[0] = result[0].filter(function(elem, pos) {
            return result[0].indexOf(elem) === pos;
          });
        }
        if (result[1]) {
          result[1] = result[1].filter(function(elem, pos) {
            return result[1].indexOf(elem) === pos;
          });
        }

        let newAddressArray = [];
        for (let a = 0; a < result.length; a++) {
          newAddressArray[a] = [];

          if (result[a]) {
            for (let b = 0; b < result[a].length; b++) {
              let filteredArray;

              if (mode === 'basilisk') {
                filteredArray = json.map(res => res.amount);
              } else {
                filteredArray = json.filter(res => res.address === result[a][b]).map(res => res.amount);
              }

              let sum = 0;
              for (let i = 0; i < filteredArray.length; i++) {
                sum += filteredArray[i];
              }

              newAddressArray[a][b] = {
                address: result[a][b],
                amount: currentAddress === result[a][b] || mode === 'native' ? sum : 'N/A',
                type: a === 0 ? 'public': 'private',
              };
            }
          }
        }

        // get zaddr balance
        if (result[1] &&
            result[1].length) {
          Promise.all(result[1].map((_address, index) => {
            return new Promise((resolve, reject) => {
              const _timestamp = Date.now();
              let ajaxDataToHex = '["' + _address + '"]';

              iguanaHashHex(ajaxDataToHex, dispatch)
              .then((hashHexJson) => {
                if (getPassthruAgent(coin) === 'iguana') {
                  payload = {
                    'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
                    'agent': getPassthruAgent(coin),
                    'method': 'passthru',
                    'asset': coin,
                    'function': 'z_getbalance',
                    'hex': hashHexJson,
                  };
                } else {
                  payload = {
                    'userpass': `tmpIgRPCUser@${sessionStorage.getItem('IguanaRPCAuth')}`,
                    'agent': getPassthruAgent(coin),
                    'method': 'passthru',
                    'function': 'z_getbalance',
                    'hex': hashHexJson,
                  };
                }
                if (Config.debug) {
                  dispatch(logGuiHttp({
                    'timestamp': _timestamp,
                    'function': 'getKMDAddressesNative+ZBalance',
                    'type': 'post',
                    'url': Config.cli.default ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${Config.iguanaCorePort}`,
                    'payload': payload,
                    'status': 'pending',
                  }));
                }

                let _fetchConfig = {
                  method: 'POST',
                  body: JSON.stringify(payload),
                };

                if (Config.cli.default &&
                    mode === 'native') {
                  payload = {
                    mode: null,
                    chain: coin,
                    cmd: 'z_getbalance',
                    params: [
                      _address
                    ],
                  };

                  _fetchConfig = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'payload': payload }),
                  };
                }

                fetch(
                  Config.cli.default && mode === 'native' ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${Config.iguanaCorePort}`,
                  _fetchConfig
                )
                .catch(function(error) {
                  console.log(error);
                  if (Config.debug) {
                    dispatch(logGuiHttp({
                      'timestamp': _timestamp,
                      'status': 'error',
                      'response': error,
                    }));
                  }
                  dispatch(
                    triggerToaster(
                      'getKMDAddressesNative+ZBalance',
                      'Error',
                      'error'
                    )
                  );
                })
                .then(response => response.json())
                .then(function(json) {
                  if (json &&
                      json.error) {
                    resolve(0);
                    if (Config.debug) {
                      dispatch(logGuiHttp({
                        'timestamp': _timestamp,
                        'status': 'error',
                        'response': json,
                      }));
                    }
                    dispatch(
                      triggerToaster(
                        'getKMDAddressesNative+ZBalance',
                        'Error',
                        'error'
                      )
                    );
                  } else {
                    if (Config.cli.default &&
                        mode === 'native') {
                      json = json.result;
                    }
                    resolve(json);
                    newAddressArray[1][index] = {
                      address: _address,
                      amount: json,
                      type: 'private',
                    };
                    if (Config.debug) {
                      dispatch(logGuiHttp({
                        'timestamp': _timestamp,
                        'status': 'success',
                        'response': json,
                      }));
                    }
                  }
                });
              });
            });
          }))
          .then(zresult => {
            dispatch(getKMDAddressesNativeState({
              'public': newAddressArray[0],
              'private': newAddressArray[1]
            }));
          });
        } else {
          dispatch(getKMDAddressesNativeState({
            'public': newAddressArray[0],
            'private': newAddressArray[1]
          }));
        }
      }

      if (mode === 'basilisk') {
        const pubkey = JSON.parse(sessionStorage.getItem('IguanaActiveAccount')).pubkey;

        fetch(`http://127.0.0.1:${Config.agamaPort}/shepherd/cache?pubkey=${pubkey}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .catch(function(error) {
          console.log(error);
          dispatch(
            triggerToaster(
              'getKMDAddressesNative+addresslist+cache',
              'Error',
              'error'
            )
          );
        })
        .then(response => response.json())
        .then(function(json) {
          let updatedCache = Object.assign({}, json.result);
          json = json.result.basilisk;
          // if listunspent is not in cache file retrieve new copy
          // otherwise read from cache data
          if (json[coin][currentAddress].refresh) {
            calcBalance(result, json[coin][currentAddress].refresh.data, dispatch, mode);
          } else {
            const _timestamp = Date.now();
            if (Config.debug) {
              dispatch(logGuiHttp({
                'timestamp': _timestamp,
                'function': 'getKMDAddressesNative+Balance',
                'type': 'post',
                'url': `http://127.0.0.1:${(Config.useBasiliskInstance && mode === 'basilisk' ? Config.iguanaCorePort + 1 : Config.iguanaCorePort)}`,
                'payload': payload,
                'status': 'pending',
              }));
            }

            fetch(`http://127.0.0.1:${(Config.useBasiliskInstance && mode === 'basilisk' ? Config.iguanaCorePort + 1 : Config.iguanaCorePort)}`, {
              method: 'POST',
              body: JSON.stringify(payload),
            })
            .catch(function(error) {
              console.log(error);
              if (Config.debug) {
                dispatch(logGuiHttp({
                  'timestamp': _timestamp,
                  'status': 'error',
                  'response': error,
                }));
              }
              dispatch(
                triggerToaster(
                  'getKMDAddressesNative+Balance',
                  'Error',
                  'error'
                )
              );
            })
            .then(response => response.json())
            .then(function(json) {
              if (Config.debug) {
                dispatch(logGuiHttp({
                  'timestamp': _timestamp,
                  'status': 'success',
                  'response': json,
                }));
              }
              updatedCache.basilisk[coin][currentAddress].refresh = {
                'data': json,
                'status': 'done',
                'timestamp': Date.now(),
              };
              dispatch(shepherdGroomPost(pubkey, updatedCache));
              calcBalance(
                result,
                json,
                dispatch,
                mode
              );
            })
          }
        })
      } else {
        const _timestamp = Date.now();
        if (Config.debug) {
          dispatch(logGuiHttp({
            'timestamp': _timestamp,
            'function': 'getKMDAddressesNative+Balance',
            'type': 'post',
            'url': `http://127.0.0.1:${(Config.useBasiliskInstance && mode === 'basilisk' ? Config.iguanaCorePort + 1 : Config.iguanaCorePort)}`,
            'payload': payload,
            'status': 'pending',
          }));
        }

        let _fetchConfig = {
          method: 'POST',
          body: JSON.stringify(payload),
        };

        if (Config.cli.default &&
            mode === 'native') {
          payload = {
            mode: null,
            chain: coin,
            cmd: payload.function,
            params: payload.params,
          };

          _fetchConfig = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'payload': payload }),
          };
        }

        fetch(
          Config.cli.default && mode === 'native' ? `http://127.0.0.1:${Config.agamaPort}/shepherd/cli` : `http://127.0.0.1:${(Config.useBasiliskInstance && mode === 'basilisk' ? Config.iguanaCorePort + 1 : Config.iguanaCorePort)}`,
          _fetchConfig
        )
        .catch(function(error) {
          console.log(error);
          if (Config.debug) {
            dispatch(logGuiHttp({
              'timestamp': _timestamp,
              'status': 'error',
              'response': error,
            }));
          }
          dispatch(
            triggerToaster(
              'getKMDAddressesNative+Balance',
              'Error',
              'error'
            )
          );
        })
        .then(response => response.json())
        .then(function(json) {
          if (Config.cli.default &&
              mode === 'native') {
            json = json.result;
          }
          if (Config.debug) {
            dispatch(logGuiHttp({
              'timestamp': _timestamp,
              'status': 'success',
              'response': json,
            }));
          }
          calcBalance(
            result,
            json,
            dispatch,
            mode
          );
        })
      }
    })
  }
}