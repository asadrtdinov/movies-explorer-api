module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
        ],
      },
    ],
  },
};
