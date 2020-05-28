exports.handler = function(event, context, callback) {

    const data = event.queryStringyfyParameters;

    callback(null, {
    statusCode: 200,
    body: "¡Hola, Mundo!"
    });
}