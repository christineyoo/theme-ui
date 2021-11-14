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