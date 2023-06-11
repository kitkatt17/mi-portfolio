import { useContext} from 'react';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { ThemeContext } from '../ThemeContext';
export const Resume = () => {
  const { theme } = useContext(ThemeContext);

  const segmentStyle = {
    maxHeight: '200px',
    overflow: 'hidden',
  };


  return (
    <>
      <Segment
        inverted={theme === 'dark' ? true : false}
        vertical
        textAlign='center'
        className='pt-5 pb-5 mt-5'
        id='resume'
        raised
        // tertiary
        style={segmentStyle}
      >
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            <Header icon color='grey'>
              <Icon name='pdf file outline' size='small' />
              Download the Resume
            </Header>
            <br />
            <a
              href='/Resume - Kate.docx'
              download
              rel='noopener noreferrer'
            >
              <Icon name='download' />
              Click Here
            </a>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};
