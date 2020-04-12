import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.js';

describe(`<Header/>`, () => {
  it(`it should render without problem`, () => {
    const header = renderer.create((<Header/>)).toJSON();
    expect(header).toMatchSnapshot();
  });
});
