import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: async (values) => {
      await submit('https://example.com/api/contact', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().optional(),
      comment: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .required('Required'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response, onOpen, formik]);

  return (
    <section
      id="contactme-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'calc(var(--spacing-unit) * 4) var(--spacing-unit)',
        backgroundColor: 'var(--color-secondary)', // Fondo secundario
        color: 'var(--color-text-dark)',
      }}
    >
      <h2 style={{
        fontSize: '2.8rem',
        marginBottom: 'calc(var(--spacing-unit) * 3)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'bold',
        color: 'var(--color-text-light)', // Título claro sobre fondo oscuro
      }}>Contact Me</h2>
      <div style={{ maxWidth: '700px', width: '100%', backgroundColor: 'var(--color-text-light)', borderRadius: 'var(--border-radius-soft)', padding: 'calc(var(--spacing-unit) * 2)', boxShadow: 'var(--box-shadow-light)' }}>
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
              Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              {...formik.getFieldProps('firstName')}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--border-radius-soft)',
                border: `1px solid ${formik.touched.firstName && formik.errors.firstName ? 'red' : 'var(--color-accent)'}`,
                backgroundColor: '#fff',
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-body)',
              }}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                {formik.errors.firstName}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              {...formik.getFieldProps('email')}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--border-radius-soft)',
                border: `1px solid ${formik.touched.email && formik.errors.email ? 'red' : 'var(--color-accent)'}`,
                backgroundColor: '#fff',
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-body)',
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="type" style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
              Type of enquiry
            </label>
            <select
              id="type"
              name="type"
              {...formik.getFieldProps('type')}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--border-radius-soft)',
                border: '1px solid var(--color-accent)',
                backgroundColor: '#fff',
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <option value="hireMe">Hire Me</option>
              <option value="openSource">Open Source</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="comment" style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
              Your message
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="5"
              {...formik.getFieldProps('comment')}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--border-radius-soft)',
                border: `1px solid ${formik.touched.comment && formik.errors.comment ? 'red' : 'var(--color-accent)'}`,
                backgroundColor: '#fff',
                color: 'var(--color-text-dark)',
                resize: 'vertical',
                fontFamily: 'var(--font-body)',
              }}
            ></textarea>
            {formik.touched.comment && formik.errors.comment ? (
              <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                {formik.errors.comment}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '1rem 1.75rem',
              backgroundColor: 'var(--color-primary)', // Botón con tu color principal
              color: 'var(--color-text-light)',
              border: 'none',
              borderRadius: 'var(--border-radius-soft)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              fontWeight: '700',
              fontFamily: 'var(--font-heading)',
              transition: 'background-color 0.2s',
              alignSelf: 'flex-start', // Alinear a la izquierda como en tu web
            }}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMeSection;