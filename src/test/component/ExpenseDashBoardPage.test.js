import React from 'react';
import { shallow } from "enzyme";
import  ExpenseDashBoardPage  from '../../components/ExpenseDashBoardPage';

test('should expense dashboard work correctly',()=>{
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});