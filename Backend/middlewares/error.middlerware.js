
const ApiError = require('../utils/Apierror');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            status: err.stack,
            message: err.message,
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!',
        });
    }
};

module.exports = errorHandler;
