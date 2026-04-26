const profiles = require('../data/profiles');

exports.myProfile = (req, res) => {
  const profile = profiles.find(p => p.userId === req.user.id);
  res.json(profile || {});
};

exports.updateProfile = (req, res) => {
  const { name, headline, skills, experience, education } = req.body;

  let profile = profiles.find(p => p.userId === req.user.id);

  if (profile) {
    profile.name = name;
    profile.headline = headline;
    profile.skills = skills;
    profile.experience = experience;
    profile.education = education;
  } else {
    profile = {
      userId: req.user.id,
      name,
      headline,
      skills,
      experience,
      education
    };
    profiles.push(profile);
  }

  res.json({ message: "Profile saved", profile });
};

exports.getProfile = (req, res) => {
  const profile = profiles.find(p => p.userId === req.params.id);

  if (!profile) {
    return res.status(404).json({ error: "Profile not found" });
  }

  res.json(profile);
};