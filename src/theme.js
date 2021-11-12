const theme = {
    config: { //see Application > Local storage
        useLocalStorage: false //if the user's preference is already stored in the OS
    }, //react-responsive package 
    initialColorModeName: 'light',
    colors: {
        text: 'black',
        inverseText: 'white',
        background: 'white',
        primary: '#01408e',
        modes: {
            dark: {
                text: 'white',
                inverseText: 'black',
                background: '#282c34',
                primary: '#8fceff'
            }
        }
    }
}

export default theme