const connections = require('../data/connections');

exports.sendRequest = (req, res) => {
  const receiverId = req.params.userId;
  const senderId = req.user.id;

  if (receiverId === senderId) {
    return res.status(400).json({ error: "Cannot connect yourself" });
  }

  const exists = connections.find(c =>
    c.senderId === senderId &&
    c.receiverId === receiverId &&
    c.status === "pending"
  );

  if (exists) {
    return res.status(400).json({ error: "Request already sent" });
  }

  const request = {
    id: Date.now().toString(),
    senderId,
    receiverId,
    status: "pending"
  };

  connections.push(request);

  res.json({ message: "Request sent" });
};

exports.pendingRequests = (req, res) => {
  const data = connections.filter(
    c => c.receiverId === req.user.id && c.status === "pending"
  );

  res.json(data);
};

exports.acceptRequest = (req, res) => {
  const request = connections.find(
    c => c.id === req.params.requestId
  );

  if (!request) {
    return res.status(404).json({ error: "Invalid request" });
  }

  request.status = "accepted";

  res.json({ message: "Accepted" });
};

exports.rejectRequest = (req, res) => {
  const request = connections.find(
    c => c.id === req.params.requestId
  );

  if (!request) {
    return res.status(404).json({ error: "Invalid request" });
  }

  request.status = "rejected";

  res.json({ message: "Rejected" });
};

exports.myConnections = (req, res) => {
  const data = connections.filter(
    c =>
      (c.senderId === req.user.id ||
        c.receiverId === req.user.id) &&
      c.status === "accepted"
  );

  res.json(data);
};