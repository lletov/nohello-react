import React from 'react'
import { Message } from './Message'
import { Loader } from './Loader'
import { Error } from './Error'
import { FutureMessage } from './FutureMessage'

export const Response = ({loaderStatus, messageValue, err}) => {
    switch (loaderStatus) {
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
                <Message messageValue={messageValue} />
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
