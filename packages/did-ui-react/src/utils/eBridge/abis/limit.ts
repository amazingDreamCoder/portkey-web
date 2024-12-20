export const LIMIT_ABI = [
  {
    inputs: [],
    name: 'BucketOverfilled',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'dailyLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DailyLimitExceeded',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'capacity',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'MaxCapacityExceeded',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minWaitInSeconds',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'available',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
    ],
    name: 'TokenRateLimitReached',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'targetChainId',
        type: 'string',
      },
    ],
    name: 'getCurrentReceiptTokenBucketState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'currentTokenAmount',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'lastUpdatedTime',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isEnabled',
            type: 'bool',
          },
          {
            internalType: 'uint128',
            name: 'tokenCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'rate',
            type: 'uint128',
          },
        ],
        internalType: 'struct RateLimiter.TokenBucket',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'fromChainId',
        type: 'string',
      },
    ],
    name: 'getCurrentSwapTokenBucketState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'currentTokenAmount',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'lastUpdatedTime',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'isEnabled',
            type: 'bool',
          },
          {
            internalType: 'uint128',
            name: 'tokenCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'rate',
            type: 'uint128',
          },
        ],
        internalType: 'struct RateLimiter.TokenBucket',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'targetChainId',
        type: 'string',
      },
    ],
    name: 'GetReceiptBucketMinWaitSeconds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'fromChainId',
        type: 'string',
      },
    ],
    name: 'GetSwapBucketMinWaitSeconds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'bucketId',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'isEnabled',
            type: 'bool',
          },
          {
            internalType: 'uint128',
            name: 'tokenCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'rate',
            type: 'uint128',
          },
        ],
        internalType: 'struct RateLimiter.TokenBucketConfig[]',
        name: 'configs',
        type: 'tuple[]',
      },
    ],
    name: 'SetTokenBucketConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridgeIn',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridgeOut',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'dailyLimitId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'consumeDailyLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'bucketId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'consumeTokenBucket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'targetChainId',
        type: 'string',
      },
    ],
    name: 'getReceiptDailyLimit',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'refreshTime',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'defaultTokenAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct DailyLimiter.DailyLimitTokenInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'swapId',
        type: 'bytes32',
      },
    ],
    name: 'getSwapDailyLimit',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'refreshTime',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'defaultTokenAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct DailyLimiter.DailyLimitTokenInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridgeIn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_bridgeOut',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_admin',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'dailyLimitId',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: 'refreshTime',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'defaultTokenAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct DailyLimiter.DailyLimitConfig[]',
        name: 'dailyLimitConfigs',
        type: 'tuple[]',
      },
    ],
    name: 'setDailyLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export default LIMIT_ABI;
