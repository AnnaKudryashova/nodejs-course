const getUsersHandler = (req, res) => {
    res.send('Get Users Route');
};

const getSingleUserHandler = (req, res) => {
    res.send(`Get User Route. UserId ${req.params.userId}`);
};

const postUsersHandler = (req, res) => {
    res.send('Post Users Route');
};

module.exports = {
    getUsersHandler,
    getSingleUserHandler,
    postUsersHandler,
};
