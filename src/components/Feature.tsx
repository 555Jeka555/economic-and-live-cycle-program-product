import React from 'react'

type FeatureProps = {
	icon: string,
	title: string,
	description: string,
	detailed?: boolean,
}

const Feature: React.FC<FeatureProps> = ({icon, title, description, detailed = false}) => (
	<div className={`feature-card ${detailed ? 'detailed' : ''}`}>
		<div className="feature-icon">{icon}</div>
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
)

export default Feature