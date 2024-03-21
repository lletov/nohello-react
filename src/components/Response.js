import React, { useContext } from 'react'
import { Message } from './Message'
import { Loader } from './Loader'
import { Error } from './Error'
import { FutureMessage } from './FutureMessage'
import { LoaderContext, MessageContext } from './LoaderContext.js'

export const Response = ({err}) => {
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
                <Message messageValue={mess} />
            )
            break;
        case 2:
            return (
                <Error err={err} />
            )
            break;
        default:
            break;
    }
}
