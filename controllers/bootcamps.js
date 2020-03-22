const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Bootcamp = require('../models/Bootcamp')

//@decs     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });  
});

//@decs     Get one bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = asyncHandler( async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)
    res.status(200).json({ success: true, data: bootcamp }); 
}); 

//@decs     Create a bootcamps
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({ success: true, data: bootcamp });
});

//@decs     Update a bootcamps
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamps = asyncHandler( async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if(!bootcamp) {
    return  next(new ErrorResponse(`Bootcamp with id of ${req.params.id} not found`, 404))
  }
  res.status(201).json({ success:true, data: bootcamp })
});

//@decs     Delete a bootcamps
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    if(!bootcamp) {
      return  next(new ErrorResponse(`Bootcamp with id of ${req.params.id} not found`, 404))
    }
    res.status(200).json({ success:true, data: {} })
});
