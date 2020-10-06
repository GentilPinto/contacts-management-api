exports.index = async(request, response) => {
    return response.send({
        message: "Hello Welcome to the contacts management",
    }).status(200);
};