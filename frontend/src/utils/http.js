import timelineMock from '../__mocks__/timeline'

export const isMock = true;

export const callAPI = () => {
  if(isMock) {
    return timelineMock;
  } else {
    return fetch('https://newsapi.org/v1/articles')
      .then(response => response.json()); 
  }
}  