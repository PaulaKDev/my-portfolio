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
      type: 'Hire me',
      comment: '',
    },
    onSubmit: async (values) => {
      await submit('https://example.com/api/contact', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Obligatorio'),
      email: Yup.string().email('Invalid email address').required('Obligatorio'),
      type: Yup.string().optional(),
      comment: Yup.string()
        .min(25, 'Debe tener al menos 25 caracteres')
        .required('Obligatorio'),
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
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centra horizontalmente el div del formulario
        justifyContent: 'center',
        padding: 'calc(var(--spacing-unit) * 4) var(--spacing-unit)',
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-text-dark)',
      }}
    >
      <h2 style={{
        fontSize: '2.8rem',
        marginBottom: 'calc(var(--spacing-unit) * 3)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'bold',
        color: 'var(--color-text-light)',
        textAlign: 'center', // Centra el título "Contáctame"
      }}>Contáctame</h2>

      <div
        style={{
          maxWidth: '700px',
          width: '100%',
          backgroundColor: 'var(--color-text-light)',
          borderRadius: 'var(--border-radius-soft)',
          padding: 'calc(var(--spacing-unit) * 2)',
          boxShadow: 'var(--box-shadow-light)',
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%',
          }}
        >
          {/* NUEVO CONTENEDOR FLEX PARA NAME Y TYPE OF ENQUIRY */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between', // Empuja Name a la izquierda y Type a la derecha
              gap: '1.5rem', // Espacio entre los dos campos
              flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
            }}
          >
            {/* NAME - Alineado a la izquierda (width: 50%) */}
            <div style={{ flex: '1 1 48%', minWidth: '250px' }}> {/* Ajuste para responsividad */}
              <label
                htmlFor="Nombre"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '600',
                  textAlign: 'left', // Asegura la alineación de la etiqueta
                }}
              >
                Nombre
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                {...formik.getFieldProps('firstName')}
                style={{
                  width: '100%', // Ocupa el 100% de su contenedor (el div del 48%)
                  padding: '0.85rem',
                  borderRadius: 'var(--border-radius-soft)',
                  border: `1px solid ${
                    formik.touched.firstName && formik.errors.firstName
                      ? 'red'
                      : 'var(--color-accent)'
                  }`,
                  backgroundColor: '#fff',
                  color: 'var(--color-text-dark)',
                  fontFamily: 'var(--font-body)',
                  boxSizing: 'border-box', // Importante para que padding y border no excedan el 100%
                }}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem', textAlign: 'left' }}>
                  {formik.errors.firstName}
                </p>
              )}
            </div>

            {/* TYPE SELECT - Alineado a la derecha (width: 50%) */}
            <div style={{ flex: '1 1 48%', minWidth: '250px' }}> {/* Ajuste para responsividad */}
              <label
                htmlFor="type"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '600',
                  textAlign: 'left', // Asegura la alineación de la etiqueta
                }}
              >
                Tipo de solicitud
              </label>
              <select
                id="type"
                name="type"
                {...formik.getFieldProps('type')}
                style={{
                  width: '100%', // Ocupa el 100% de su contenedor (el div del 48%)
                  padding: '0.85rem',
                  borderRadius: 'var(--border-radius-soft)',
                  border: '1px solid var(--color-accent)',
                  backgroundColor: '#fff',
                  color: 'var(--color-text-dark)',
                  fontFamily: 'var(--font-body)',
                  minHeight: '3.2rem',
                  display: 'block',
                  boxSizing: 'border-box', // Importante para que padding y border no excedan el 100%
                }}
              >
                <option value="hireMe">Contrátame</option>
                <option value="openSource">Código abierto</option>
                <option value="other">Otros</option>
              </select>
            </div>
          </div>
          {/* FIN DEL CONTENEDOR FLEX COMBINADO */}

          {/* EMAIL - Mantenido solo en su línea */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                textAlign: 'left', // Asegura la alineación de la etiqueta
              }}
            >
              Dirección de Email
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
                border: `1px solid ${
                  formik.touched.email && formik.errors.email
                    ? 'red'
                    : 'var(--color-accent)'
                }`,
                backgroundColor: '#fff',
                color: 'var(--color-text-dark)',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box', // Importante
              }}
            />
            {formik.touched.email && formik.errors.email && (
              <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem', textAlign: 'left' }}>
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* MESSAGE - (se mantiene igual) */}
          <div>
            <label
              htmlFor="comment"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                textAlign: 'left', // Asegura la alineación de la etiqueta
              }}
            >
              Tu mensaje
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
                border: `1px solid ${
                  formik.touched.comment && formik.errors.comment
                    ? 'red'
                    : 'var(--color-accent)'
                }`,
                backgroundColor: '#fff',
                color: 'var(--color-text-dark)',
                resize: 'vertical',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box', // Importante
              }}
            ></textarea>
            {formik.touched.comment && formik.errors.comment && (
              <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem', textAlign: 'left' }}>
                {formik.errors.comment}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '1rem 1.75rem',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text-light)',
              border: 'none',
              borderRadius: 'var(--border-radius-soft)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              fontWeight: '700',
              fontFamily: 'var(--font-heading)',
              transition: 'background-color 0.2s',
              alignSelf: 'flex-start', // Alinea el botón a la izquierda
            }}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMeSection;