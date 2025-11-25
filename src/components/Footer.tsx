import React from 'react'

const Footer: React.FC = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-content">
				<div className="footer-section">
					<h3>Isummer</h3>
					<p>Профессиональная платформа для создания интерактивных курсов и обучения</p>
				</div>
				<div className="footer-section">
					<h4>Контакты</h4>
					<p>Email: info@iwinter.cloud</p>
					<p>Телефон: +7 (495) 123-45-69</p>
				</div>
				<div className="footer-section">
					<h4>Адрес</h4>
					<p>г. Йошкар-Ола, ул. Эшкинина, д. 10</p>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2025 ООО "Айсаммер". Все права защищены.</p>
			</div>
		</div>
	</footer>
)

export default Footer