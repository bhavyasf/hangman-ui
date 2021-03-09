import { AppBar, Toolbar } from '@material-ui/core';

const styles = {
    h1: {
        margin: 'auto',
    },
    p: {
        margin: 'auto',
    },
    toolbar: {
        flexDirection: 'column',
    }
};

function HangmanBar() {
    return (
        <AppBar position="static">
            <Toolbar style={styles.toolbar}>
                <h1 style={styles.h1}>H_A_N_G_M_A_N</h1>
                <p style={styles.p}>A place to guess some mysterious words!!</p>
            </Toolbar>
        </AppBar>
    );
}

export default HangmanBar;
