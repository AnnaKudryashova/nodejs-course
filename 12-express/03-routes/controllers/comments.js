const getCommentsHandler = (req, res) => {
    res.send('Get Comments Route');
};

const getSingleCommentHandler = (req, res) => {
    res.send(`Get Comment Route. CommentId ${req.params.commentId}`);
};

const postCommentsHandler = (req, res) => {
    res.send('Post Comments Route');
};

const deleteSingleCommentHandler = (req, res) => {
    res.send(`Delete Comment Route. CommentId ${req.params.commentId}`);
};

module.exports = {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler,
};
