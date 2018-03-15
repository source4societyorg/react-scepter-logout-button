import React from 'react';
import { shallow } from 'enzyme';
import LogoutButton from '../src/index';
test('LogoutButton renders properly', () => {
  shallow(<LogoutButton />);
});
