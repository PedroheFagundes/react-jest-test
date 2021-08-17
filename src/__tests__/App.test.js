import { shallow } from 'enzyme';
import App from '../App';
import PersonList from '../PersonList';


describe('App', () => {

  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  describe('Snapshot secutiry', () => {

    it('should match with Snapshot', () => {
      const render = shallow(<App />);
      expect(render).toMatchSnapshot();
    });

  });

  it('renders a person list', () => {
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it('has state', () => {
    const appState = appWrapper.state();
 
    expect(appState).not.toBeNull();
  });

  it('has a people property on state', () => {
    const appState = appWrapper.state();

    expect(appState.people).toBeDefined();
  });

  it('passes people property of state to personList as prop', () => {
    const personList = appWrapper.find(PersonList);
    
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });

  
});