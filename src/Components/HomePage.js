import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HangmanBar from './HangmanBar';
import { useHistory } from  'react-router-dom';

const styles = {
    card: {
        position: 'absolute',
        display: 'flex',
        top: '40%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
      marginTop: '5px',
    },
    link: {
        textDecoration: 'none'
    }
};

function newGameClicked(history) {
    const { localStorage } = window;
    localStorage.removeItem('game-id');
    console.log('GAME ID', localStorage.getItem('game-id'));
    history.push('/game');
}

function HomePage() {
    const history = useHistory();
    return (
        <div>
        <HangmanBar />
        <Container style={styles.card}>
           <Link to="/game" style={styles.link}><Button style={styles.button} variant="contained" color="primary">Resume Current Game</Button></Link> 
           <Button style={styles.button} variant="contained" color="primary" onClick={()=> { newGameClicked(history)}}>Start New Game</Button>
           <Button style={styles.button} variant="contained" color="secondary">See dashboards</Button>
        </Container>
        </div>
    );
}

export default HomePage;
