//@decs     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(400).json({ success: true, msg: "Show all bootcamps" });
};

//@decs     Get one bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res.status(400).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

//@decs     Create a bootcamps
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamps = (req, res, next) => {
  res.status(400).json({ success: true, msg: "Create new bootcamp" });
};

//@decs     Update a bootcamps
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(400)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

//@decs     Delete a bootcamps
//@route    DELTE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(400)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
