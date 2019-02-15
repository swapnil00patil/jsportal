import timelineMock from '../__mocks__/timeline'

export const isMock = false;

export const callAPI = (url, base_url = 'http://www.amock.io/api/swapnil00pa') => {
  if(isMock) {
    return timelineMock;
  } else {
    return fetch(base_url + url)
      .then(response => response.json()); 
  }
}  