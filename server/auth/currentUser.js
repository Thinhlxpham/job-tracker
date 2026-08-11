export const getCurrentUser = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      loggedIn: false,
      message: "Unauthorized",
    });
  }

  res.json({ loggedIn: true, username: req.session.user });
};
