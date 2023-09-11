import React, { memo, useEffect, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { useDispatch, useSelector } from 'react-redux'
import { setStoreCodeCurrent } from '../../services/redux/slices/vsCodeSlice'



const EditorVsCode = ({width = 'full', refRes }) => {
    const lang = useSelector((state) => state.vsCodeReducer.lang)
    const theme = useSelector((state) => state.vsCodeReducer.theme)


    // Dispatcher:
    const dispatch = useDispatch()
    //
    const [reloadTheme, setReloadTheme] = useState(theme)

    const handleChangeTheme = (monaco) => {
        import(`monaco-themes/themes/${theme}.json`).then((data) => {
            monaco.editor.defineTheme('vs', { ...data });
        })
    }
    useEffect(() => {
        if (theme !== reloadTheme)
            handleChangeTheme(reloadTheme)
    }, [theme])

    return (
        <>
            <Editor
                options={{
                    fontSize: 20,
                    cursorBlinking: 'expand',
                    wordWrap: 'on',
                    cursorWidth: 3,
                    cursorStyle: 'line',
                    quickSuggestions: true,
                }}
                className={`h-[30rem] w-[${width}]`}
                height=""
                language={lang}
                onChange={(val) => {
                    dispatch(setStoreCodeCurrent(val))
                }}
                theme='vs'
                beforeMount={(monaco) => {
                    setReloadTheme(monaco)
                    if (theme == reloadTheme) {
                        import(`monaco-themes/themes/Dracula.json`).then((data) => {
                            // console.log({ ...data });
                            monaco.editor.defineTheme('vs', { ...data });
                            // console.log(data)
                        })
                    }
                }}


            />
        </>
    )
}

export default memo(EditorVsCode)