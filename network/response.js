exports.success = function (req, res, message, status) {
    let statusCode = status || 500;
    let satusMessage = message || '';
    res.status(statusCode).send({
        error:false,
        status: status,
        body: satusMessage
    });
}

exports.error = function (req, res, message, status) {
    let statusCode = status || 500;
    let satusMessage = message || 'Internal server error';
    res.status(statusCode).send({
        error:true,
        status: status,
        body: satusMessage
    });
}