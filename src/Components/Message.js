import React from 'react'

const Message = props => (
    <section className="message">
        <h4 className="message_headline">
            {props.title}
        </h4>
        <p className="message_body">
            {props.message}
        </p>
        <a href={props.url} className="message_url">
            {props.link}
        </a>
    </section>
)

export default Message