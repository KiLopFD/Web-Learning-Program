import React, { memo } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm'
import './index.css'
import copy from 'copy-to-clipboard';
const MarkDown = ({ markdown }) => {
    const copyToClipboard = (text) => {
        console.log(text.split("\n").filter(item => item != "").join("\n"));

    }

    return (
        <>
            <ReactMarkdown
                className='relative'
                remarkPlugins={[remarkGfm]}
                children={markdown}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).split("\n").filter(item => item != "").join("\n")}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                                onClick={() => { copy(String(children).split("\n").filter(item => item != "").join("\n")) }}
                                className='copy-when-click relative'
                            />
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />

        </>
    )
}

export default memo(MarkDown)