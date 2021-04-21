const Report = require(`../models/report`)
const catchAsyncError = require(`../middlewares/catchAsyncError`)

//create new report/new

exports.createReport = catchAsyncError(async (req,res,next) => {
    const newReport = req.body
    const report = await Report.create(newReport)
    res.status(200).json({
        success : true,
        report
    })
})


//get a report by id /report?reportid="qfqfw"

exports.getReport = catchAsyncError(async (req,res,next) => {

    const report = await  Report.findById(req.query.reportID)

    if(!report){
        return next(new ErrorHndler(`Invalid ID`,400))
    }
    
    res.status(200).json({
        success : true,
        report
    })
})
