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