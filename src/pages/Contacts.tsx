import React from 'react'
import ContactForm from '../components/ContactForm'

const Contacts: React.FC = () => (
	<div className="page contacts">
		<section className="page-header">
			<div className="container">
				<h1>Свяжитесь с нами</h1>
				<p>Готовы показать как Learn+ решит ваши задачи в обучении персонала</p>
			</div>
		</section>

		<section className="contact-content">
			<div className="container">
				<div className="contact-grid">
					<div className="contact-info">
						<h3>Контактная информация</h3>
						<div className="contact-item">
							<strong>Компания:</strong>
							<p>ООО "Айсаммер"</p>
						</div>
						<div className="contact-item">
							<strong>Телефон:</strong>
							<p>+7 (495) 123-45-69</p>
						</div>
						<div className="contact-item">
							<strong>Email:</strong>
							<p>sales@learn-platform.ru</p>
						</div>
						<div className="contact-item">
							<strong>Техподдержка:</strong>
							<p>support@learn-platform.ru</p>
						</div>
						<div className="contact-item">
							<strong>Время работы:</strong>
							<p>Пн-Пт: 10:00-18:00</p>
						</div>
						<div className="contact-item">
							<strong>Для партнеров:</strong>
							<p>partners@learn-platform.ru</p>
						</div>
					</div>
					<div className="contact-form-wrapper">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default Contacts