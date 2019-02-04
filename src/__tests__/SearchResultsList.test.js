import React, { Component } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchResultsList from "../components/SearchResultsList";
import toJSON from 'enzyme-to-json';
import neighborhoods from '../neighborhoods';

configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
    it('renders', () => {
        mount(
            <SearchResultsList neighborhoods={neighborhoods}/>
        );
    });

    it('matches the snapshot', () => {
        const wrapper = mount(
            <SearchResultsList neighborhoods={neighborhoods}/>
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('updates via props', () => {
        const wrapper = mount(
            <SearchResultsList neighborhoods={neighborhoods} count={50} />
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
        wrapper.setProps({ count: 10 });
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
});
