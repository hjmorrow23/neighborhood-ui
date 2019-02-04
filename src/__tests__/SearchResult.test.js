import React, { Component } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchResult from "../components/SearchResult";
import toJSON from 'enzyme-to-json';
import neighborhoods from '../neighborhoods';

configure({ adapter: new Adapter() });

const neighborhood = neighborhoods[0];

describe('<Dashboard />', () => {
    it('renders', () => {
        mount(
            <SearchResult neighborhood={neighborhood}/>
        );
    });

    it('matches the snapshot', () => {
        const wrapper = mount(
            <SearchResult neighborhood={neighborhood}/>
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('updates via props', () => {
        const wrapper = mount(
            <SearchResult neighborhood={neighborhood} count={50} />
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
        wrapper.setProps({ count: 10 });
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
});
