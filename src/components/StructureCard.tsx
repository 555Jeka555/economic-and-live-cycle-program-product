import React from 'react'

type StructureCardProps = {
    title: string,
    items: string[],
    type: 'advantage' | 'disadvantage',
}

const StructureCard: React.FC<StructureCardProps> = ({title, items, type}) => (
	<div className={`structure-card ${type}`}>
		<h3>{title}</h3>
		<ul>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</div>
)

export default StructureCard