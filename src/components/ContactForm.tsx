import React, {useState} from 'react'

type FormData = {
	name: string,
	email: string,
	company: string,
	employees: string,
	message: string,
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		company: '',
		employees: '',
		message: '',
	})

	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {name, value} = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Форма отправлена:', formData)
		setIsSubmitted(true)
		setFormData({name: '', email: '', company: '', employees: '', message: ''})
		setTimeout(() => setIsSubmitted(false), 5000)
	}

	return (
		<div className="contact-form">
			<h3>Получите демо-доступ</h3>
			{isSubmitted && (
				<div className="success-message">
					Спасибо! Ваша заявка принята. Наш менеджер свяжется с вами для демонстрации платформы.
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="name"
						placeholder="Ваше имя"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						placeholder="Рабочий email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="company"
						placeholder="Название компании"
						value={formData.company}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<select
						name="employees"
						value={formData.employees}
						onChange={handleChange}
						required
					>
						<option value="">Количество сотрудников</option>
						<option value="1-50">1-50</option>
						<option value="51-200">51-200</option>
						<option value="201-1000">201-1000</option>
						<option value="1000+">1000+</option>
					</select>
				</div>
				<div className="form-group">
					<textarea
			  name="message"
			  placeholder="Ваши задачи в обучении сотрудников"
			  rows={4}
			  value={formData.message}
			  onChange={handleChange}
		  ></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Получить демо-доступ
				</button>
			</form>
		</div>
	)
}

export default ContactForm