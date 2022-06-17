/* eslint-disable no-param-reassign */
export const getCreators = (nfts) => {
  const creators = nfts.reduce((prev, curr) => {
    (prev[curr.seller] = prev[curr.seller] || []).push(curr);

    return prev;
  }, {});

  return Object.entries(creators).map((creator) => {
    const seller = creator[0];
    const sum = creator[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

    return ({ seller, sum });
  });
};
