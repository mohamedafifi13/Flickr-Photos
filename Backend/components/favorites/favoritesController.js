const mongoose = require('mongoose');

const favoriteDAL = require('./favoritesDAL');

const { decryptAuthToken } = require('../auth/Services/decryptToken');

exports.add = async function addFavorite(req, res, next) {
  const { authorization } = req.headers;

  const { userId } = await decryptAuthToken(authorization);
  try {
    const favoriteIfFound = await
    favoriteDAL.findFavoriteByUserAndPhoto({ userId, photoId: req.params.photoId });
    if (favoriteIfFound.length !== 0) {
      res.status(404).json({ message: 'You already liked this photo' });
    }
    const favorite = await favoriteDAL.createFavorite({
      id: new mongoose.Types.ObjectId(),
      userID: userId,
      favoriteDa: req.body.favoriteDate,
      photoId: req.params.photoId,
    });

    req.favoriteCreated = {
      _id: favorite.id,
      user: favorite.user,
      photoId: favorite.photo,
      favoriteDate: favorite.favoriteDate,
    };
    next();
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
// error here makes non sense
exports.findFavorite = async function findFavorite(req, res) {
  const user = req.params.userId;
  try {
    if (!mongoose.isValidObjectId(user)) {
      return res.status(404).json({
        error: 'Invalid userId',
      });
    }
    const favoriteOutput = await favoriteDAL.findFavorite(user);
    return res.status(200).json(
      {
        total: favoriteOutput.length,
        owner: user,
        photos: favoriteOutput.map((doc) => ({
          photo: doc.photo,

        })),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
// error here makes non sense
exports.findPublicFavorite = async function findPublicFavorite(req, res) {
  const user = req.params.userId;
  try {
    if (!mongoose.isValidObjectId(user)) {
      return res.status(404).json({
        error: 'Invalid userId',
      });
    }
    const favoriteOutput = await favoriteDAL.findFavorite(user);
    return res.status(200).json(
      {
        owner: user,
        photos: favoriteOutput
          .filter((favorite) => favorite.photo.isPublic)
          .map((favorite) => favorite.photo),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
// error here makes non sense
exports.deleteFavorite = async function deleteFavorite(req, res) {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);
  const { photoId } = req.params;
  try {
    const favoriteDeleted = await favoriteDAL.deleteFavorite({ userId, photoId });
    return res.status(200).json(favoriteDeleted);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
