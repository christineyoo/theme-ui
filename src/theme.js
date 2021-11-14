const darkGray = '#282c34';
const darkBlue = '#01408e';
const lightBlue = '#8fceff';

const theme = {
    /* 
    You can configure it to save in local storage or OS settings.
    For local storage, it does it automatically. (See inspect => Application > Local storage)
    For OS setting, include this config code and `npm install react-responsive --save`
    */
    // config: {
    //     useLocalStorage: false
    // },
    initialColorModeName: 'light',
    colors: {
        text: 'black',
        inverseText: 'white',
        background: 'white',
        primary: darkBlue,
        secondary: 'red',
        modes: {
            dark: {
                text: 'white',
                inverseText: 'black',
                background: darkGray,
                primary: lightBlue
            }
        },
        button: {
            padding: 3
        }
    }
}

export default theme