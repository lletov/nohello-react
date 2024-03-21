import React, { useContext } from 'react'
import { Message } from './Message'
import { Loader } from './Loader'
import { Error } from './Error'
import { FutureMessage } from './FutureMessage'
import { LoaderContext, MessageContext } from './Context.js'

export const Response = ({handleGenerate}) => {
    const stat = useContext(LoaderContext)
    const mess = useContext(MessageContext)
    switch (stat) {
        case 0:
            return (
                <FutureMessage/>
            )
            break;
        case 1:
            return (
                <Loader/>
            )
            break;
        case 2:
            return (
                <Message 
                    messageValue={mess} 
                    handleGenerate={handleGenerate}
                />
            )
            break;
        case 3:
            return (
                <Error/>
            )
            break;
        default:
            break;
    }
}
