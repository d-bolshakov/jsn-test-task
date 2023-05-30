exports.FilesTransformer = (req, res, next) => {
  if (req.files)
    req.files = Object.keys(req.files).map((key) => ({
      name: req.files[key].name,
      buffer: req.files[key].data,
    }));
  next();
};
