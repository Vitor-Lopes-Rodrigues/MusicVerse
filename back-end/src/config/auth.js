const jsonwebtoken = require("jsonwebtoken")

const tokenValited = (
    request,
    response,
    next
) => {
    const [, token] = request.headers.authorization?.split(' ') || [' ', ' '];
    if(!token) return response.status(401).send('Acesso negado. Token não inserido.');
    try {
        const payload = jsonwebtoken.verify(token, 'PRIVATE_KEY');
        const userIdFromToken = payload.user;
        console.log(userIdFromToken)

        if(!userIdFromToken) return response.status(401).send('Token inválido!');

        request.headers['user'] = payload.user;

        return next();
    } catch (error) {
        return response.status(401).json({message: 'Token inválido!'})
    }
}

module.exports = tokenValited;
