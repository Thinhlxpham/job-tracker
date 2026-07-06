export const getCurrentUser = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  res.json(req.session.user);
};
