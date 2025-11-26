import React from 'react'
import {Link} from 'react-router-dom'
import Feature from '../components/Feature'

const Home: React.FC = () => {
	const previewFeatures = [
		{
			icon: '📊',
			title: 'Автоматизация обучения',
			description: 'Сократите издержки на очные тренинги и стандартизируйте процесс обучения',
		},
		{
			icon: '🎮',
			title: 'Геймификация',
			description: 'Повысьте вовлеченность сотрудников через систему рейтингов и достижений',
		},
		{
			icon: '🔍',
			title: 'Контроль знаний',
			description: 'Централизованный мониторинг прогресса и качества усвоения материала',
		},
	]

	return (
		<div className="page home">
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<h1>Learn+</h1>
						<p className="hero-subtitle">
							Корпоративная LMS-платформа для автоматизации обучения персонала.
							Снижаем издержки, повышаем эффективность и вовлеченность сотрудников.
						</p>
						<div className="hero-stats">
							<div className="stat">
								<strong>85%</strong>
								<span>вовлеченность</span>
							</div>
							<div className="stat">
								<strong>60%</strong>
								<span>экономия</span>
							</div>
							<div className="stat">
								<strong>24/7</strong>
								<span>доступность</span>
							</div>
						</div>
						<div className="hero-buttons">
							<Link to="/features" className="btn btn-primary">
								Узнать возможности
							</Link>
							<Link to="/contacts" className="btn btn-secondary">
								Бесплатный демо-доступ
							</Link>
						</div>
					</div>
					<div className="hero-media">
						<div className="platform-preview">
							<div className="preview-item">📚 База знаний</div>
							<div className="preview-item">🎯 Тестирование</div>
							<div className="preview-item">📈 Аналитика</div>
							<div className="preview-item">👥 Команды</div>
						</div>
					</div>
				</div>
				<img
					src="./images/background.png"
					alt="Learn+ платформа"
					className="hero-image"
				/>
			</section>

			<section className="target-audience">
				<div className="container">
					<h2>Для любого бизнеса</h2>
					<div className="audience-grid">
						<div className="audience-card">
							<h3>Малый бизнес</h3>
							<p>Быстрый старт обучения для команд до 50 человек</p>
						</div>
						<div className="audience-card">
							<h3>Средний бизнес</h3>
							<p>Масштабируемые решения для растущих компаний</p>
						</div>
						<div className="audience-card">
							<h3>Крупный бизнес</h3>
							<p>Корпоративные решения с кастомизацией</p>
						</div>
					</div>
				</div>
			</section>

			<section className="features-preview">
				<div className="container">
					<h2>Ключевые преимущества</h2>
					<div className="features-grid">
						{previewFeatures.map((feature, index) => (
							<Feature
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home