import React, { Component } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopFind from "../components/TopFind";
import toJSON from 'enzyme-to-json';
import neighborhoods from '../neighborhoods';

configure({ adapter: new Adapter() });

const listing = neighborhoods[0];

describe('<Dashboard />', () => {
    it('renders', () => {
        mount(
            <TopFind listing={listing} />
        );
    });

    it('matches the snapshot', () => {
        const wrapper = mount(
            <TopFind listing={listing} />
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('updates via props', () => {
        const wrapper = mount(
            <TopFind listing={listing} count={50} />
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
        wrapper.setProps({ count: 10 });
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
});
