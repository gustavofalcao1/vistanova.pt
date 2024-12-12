'use client';

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

type Field = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
};

type ContactFormProps = {
  fields: Field[];
  className?: string;
  buttonText?: string;
};

export default function ContactForm({ fields, className = '', buttonText = 'Enviar' }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_nnrw43f',
        'template_7ifl7v9',
        {
          ...formData,
          to_name: 'Vista Nova',
          from_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
          phone: `Telefone: ${formData.phone}`
        },
        '52nLjYjuEpvc48ieH'
      );

      setStatus('success');
      setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  const renderField = (field: Field) => {
    const commonProps = {
      value: formData[field.name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [field.name]: e.target.value }),
      required: field.required,
      placeholder: field.placeholder,
      className: field.type === 'textarea' 
        ? 'w-full p-2 rounded text-gray-800'
        : 'w-full p-2 border rounded text-gray-800',
    };

    if (field.type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          rows={field.rows || 4}
        />
      );
    }

    return <input type={field.type} {...commonProps} />;
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 gap-4">
        {fields.map((field) => (
          <div key={field.name}>
            {renderField(field)}
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`mt-4 w-full py-2 rounded transition-colors ${
          status === 'sending'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-red-600 hover:bg-red-700'
        } text-white`}
      >
        {status === 'sending' ? 'Enviando...' : buttonText}
      </button>

      {status === 'success' && (
        <p className="mt-2 text-green-600 text-center">Mensagem enviada com sucesso!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-600 text-center">Erro ao enviar mensagem. Tente novamente.</p>
      )}
    </form>
  );
}
