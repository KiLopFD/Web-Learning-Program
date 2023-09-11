
export const ExerciseConst = [
    {
        name: "Python",
        description: "",
        urlRoute:"python-problem-free"
    }
]


export const FETCH_API = {
    submit_code: '/submit-code/',
    exercise: '/exercise/',

}


export const ThemeCode = ['Active4D', 'All Hallows Eve', 'Amy', 'Birds of Paradise', 'Blackboard', 'Brilliance Black', 'Brilliance Dull', 'Chrome DevTools', 'Clouds Midnight', 'Clouds', 'Cobalt', 'Cobalt2', 'Dawn', 'Dominion Day', 'Dracula', 'Dreamweaver', 'Eiffel', 'Espresso Libre', 'GitHub Dark', 'GitHub Light', 'GitHub', 'IDLE', 'idleFingers', 'iPlastic', 'Katzenmilch', 'krTheme', 'Kuroir Theme', 'LAZY', 'MagicWB (Amiga)', 'Merbivore Soft', 'Merbivore', 'monoindustrial', 'Monokai Bright', 'Monokai', 'Night Owl', 'Nord', 'Oceanic Next', 'Pastels on Dark', 'Slush and Poppies', 'Solarized-dark', 'Solarized-light', 'SpaceCadet', 'Sunburst', 'Textmate (Mac Classic)', 'themelist', 'Tomorrow-Night-Blue', 'Tomorrow-Night-Bright', 'Tomorrow-Night-Eighties', 'Tomorrow-Night', 'Tomorrow', 'Twilight', 'Upstream Sunburst', 'Vibrant Ink', 'Xcode_default', 'Zenburnesque']


const urlLessons = {
    rootUrl: "/lessons/",
    cpp: {
        rootUrl: "cpp/"
        
    }
}


export const urlAPI = {
    exercise: (category, search = 'list-topic', param = '') => search !== 'detail' ? `?category=${category}&search=${search}&param=${param}`: `detail?category=${category}&search=${search}&param=${param}`
}