import React from 'react'
import Figure from './Figure'

const serializers = {
	container: ({ children }) => <React.Fragment>{children}</React.Fragment>,
	types: {
		image: Figure,
	},
	marks: {
		link: ({ children, mark }) =>
			mark.blank ? (
				<a href={mark.href} target="_blank" rel="noreferrer">
					{children}
				</a>
			) : (
				<a href={mark.href}>
					{children}
				</a>
			),
	}
}

export default serializers
