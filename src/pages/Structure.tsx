import React from 'react'
import StructureCard from '../components/StructureCard'

const Structure: React.FC = () => {
	const advantages = [
		'Гибкость и адаптивность: кросс-функциональные команды под конкретные задачи',
		'Эффективное использование ресурсов: специалисты участвуют в нескольких проектах',
		'Высокая скорость разработки: параллельная работа над разными компонентами',
		'Обмен знаниями: специалисты из разных отделов повышают качество продукта',
	]

	const disadvantages = [
		'Двойное подчинение: задачи от Product Manager и Technical Director',
		'Сложность управления: требует высокой координации между менеджерами',
		'Риск конфликтов: возможны конфликты за ресурсы и приоритеты',
	]

	const companyInfo = [
		{
			title: 'Основная продукция',
			items: ['Learn+ - SaaS в сфере EdTech', 'Техническая поддержка', 'Консультации по внедрению', 'Кастомные учебные модули'],
		},
		{
			title: 'Потребители',
			items: ['B2B: корпоративные университеты, HR и L&D отделы', 'B2B2C: учебные центры и частные преподаватели'],
		},
		{
			title: 'Конкурентные преимущества',
			items: ['Современный интуитивный интерфейс', 'Мощная аналитика и отчетность', 'Упор на геймификацию', 'Гибкая система тарификации'],
		},
	]

	return (
		<div className="page structure">
			<section className="page-header">
				<div className="container">
					<h1>Isummer</h1>
					<p>Современная IT-компания с матричной структурой для максимальной эффективности</p>
				</div>
			</section>

			<section className="structure-content">
				<div className="container">
					<div className="structure-intro">
						<h2>Матричная организационная структура</h2>
						<p>
                            Мы выбрали матричную структуру как оптимальный баланс между функциональной
                            специализацией и гибкостью проектного управления для динамичного IT-продукта.
						</p>
					</div>

					<div className="structure-comparison">
						<div className="comparison-column">
							<StructureCard
								title="Преимущества"
								items={advantages}
								type="advantage"
							/>
						</div>
						<div className="comparison-column">
							<StructureCard
								title="Вызовы"
								items={disadvantages}
								type="disadvantage"
							/>
						</div>
					</div>

					<div className="company-info">
						<h2>Общая характеристика предприятия</h2>
						<div className="info-grid">
							{companyInfo.map((info, index) => (
								<div key={index} className="info-card">
									<h3>{info.title}</h3>
									<ul>
										{info.items.map((item, itemIndex) => (
											<li key={itemIndex}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<section className="marketing-section">
						<div className="container">
							<h2>Маркетинговая стратегия</h2>
							<div className="marketing-grid">
								<div className="marketing-item">
									<h4>Контент-маркетинг</h4>
									<p>Вебинары, статьи и кейсы о трендах в корпоративном обучении</p>
								</div>
								<div className="marketing-item">
									<h4>Digital-маркетинг</h4>
									<p>Таргетированная реклама в LinkedIn для HR-директоров и руководителей обучения</p>
								</div>
								<div className="marketing-item">
									<h4>Прямые продажи</h4>
									<p>Участие в профильных выставках по HR и корпоративному обучению</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
	)
}

export default Structure