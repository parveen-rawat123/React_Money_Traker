import { createContext, useContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
    const [snackbar, setSnackbar] = useState({ message: '', error: '', open: false });

    const showSnackbar = ({ message = '', error = '' }) => {
        setSnackbar({ message, error, open: true });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbar.message ? "info" : "error"}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message || snackbar.error}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};
