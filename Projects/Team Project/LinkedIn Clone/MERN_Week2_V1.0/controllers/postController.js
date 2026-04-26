const posts = require('../data/posts');
const connections = require('../data/connections');

exports.createPost = (req, res) => {
  const { content } = req.body;

  const post = {
    id: Date.now().toString(),
    userId: req.user.id,
    content,
    createdAt: new Date(),
    likes: [],
    comments: []
  };

  posts.push(post);

  res.status(201).json(post);
};

exports.feed = (req, res) => {
  const ids = connections
    .filter(c =>
      (c.senderId === req.user.id ||
        c.receiverId === req.user.id) &&
      c.status === "accepted"
    )
    .map(c =>
      c.senderId === req.user.id
        ? c.receiverId
        : c.senderId
    );

  const feed = posts
    .filter(p => ids.includes(p.userId))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json(feed);
};

exports.likePost = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (!post.likes.includes(req.user.id)) {
    post.likes.push(req.user.id);
  }

  res.json({ likes: post.likes.length });
};

exports.commentPost = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  post.comments.push({
    userId: req.user.id,
    text: req.body.text
  });

  res.json({ message: "Comment added" });
};