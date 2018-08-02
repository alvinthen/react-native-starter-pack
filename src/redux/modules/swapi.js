// @flow
export const fetchPeople = () => fetch('https://swapi.co/api/people/')
  .then(res => res.json());

export default fetchPeople;
