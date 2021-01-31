import renderer from 'react-test-renderer';
import GlobalStyle from '../service/theme/global';
import { lightTheme, darkTheme, moonTheme} from '../service/theme';

describe('GlobalStyle: ', () => {
  it('renders with a LIGHT theme', () => {
    renderer.create(<GlobalStyle theme={lightTheme} />);
    expect(document.head).toMatchSnapshot();
  });
  it('renders with a DARK theme', () => {
    renderer.create(<GlobalStyle theme={darkTheme} />);
    expect(document.head).toMatchSnapshot();
  });
  it('renders with a MOON theme', () => {
    renderer.create(<GlobalStyle theme={moonTheme} />);
    expect(document.head).toMatchSnapshot();
  });

})

// it('renders with a LIGHT theme', () => {
//   // const localStorageMock = {
//   //   getItem: jest.fn(),
//   //   setItem: jest.fn(),
//   //   clear: jest.fn()
//   // };
//   // global.localStorage = localStorageMock;

//   // global.localStorage = {
//   //   getItem: () => undefined,
//   // };

//   jest.spyOn(window.localStorage.__proto__, 'setItem');
//   expect(localStorage.store).toEqual('light');

// });

// // https://www.npmjs.com/package/jest-localstorage-mock
// it('should save to localStorage', () => {
//   const KEY = 'theme',
//         VALUE = 'light';
//   dispatch(action.update(KEY, VALUE));
//   expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
//   expect(localStorage.__STORE__[KEY]).toBe(VALUE);
//   expect(Object.keys(localStorage.__STORE__).length).toBe(1);
// });


// it('should have cleared the sessionStorage', () => {
//   dispatch(action.reset());
//   expect(sessionStorage.clear).toHaveBeenCalledTimes(1);
//   expect(sessionStorage.__STORE__).toEqual({}); // check store values
//   expect(sessionStorage.length).toBe(0); // or check length
// });