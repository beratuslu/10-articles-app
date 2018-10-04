/* global describe, it, browser, beforeEach */

const expect = require('chai').expect;

describe('App', () => {
  const todoText = 'Get better at testing';

  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('10 Articles App');
  });
  it('Should show spinner while articles loading', () => {
    const actual = browser.elements('.testli').value.length;
    console.log('actual: ', actual);
    expect(actual).to.equal(10);
  });
  it('Should load first 10 articles', () => {
    const actual = browser.elements('.testli').value.length;
    console.log('actual: ', actual);
    expect(actual).to.equal(10);
  });
});
