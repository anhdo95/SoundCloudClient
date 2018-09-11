import Stream from './presenter';
import { shallow } from 'enzyme';

describe('Stream', () => {
	const props = {
		tracks: [{ origin: { title: 'x' } }, { origin: { title: 'y' } }]
	};

	it('shows to elements', () => {
		const element = shallow(<Stream {...props} />);

		expect(element.find('.track')).to.have.length(2);
	});
})
