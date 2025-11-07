import { createContext, useContext, useState, useCallback } from 'react';

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success', // 'success' or 'error'
    message: '',
  });

  const onOpen = useCallback((type, message) => {
    setState({ isOpen: true, type, message });
  }, []);

  const onClose = useCallback(() => {
    setState({ isOpen: false, type: 'success', message: '' });
  }, []);

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen,
        onClose,
      }}
    >
      {children}
      {state.isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 'var(--spacing-unit)',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: state.type === 'success' ? 'hsl(140, 50%, 40%)' : 'hsl(0, 70%, 50%)', // Colores de éxito/error más suaves
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: 'var(--border-radius-soft)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 2000,
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
          }}
        >
          <p style={{margin:0}}>{state.message}</p>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
      )}
    </AlertContext.Provider>
  );
};

// **********************************************
// CAMBIO AQUI: Define el hook y luego expórtalo.
// **********************************************
const useAlertContext = () => useContext(AlertContext);
export { useAlertContext };