const Report = require(`../models/report`)
const catchAsyncError = require(`../middlewares/catchAsyncError`)

//create new report/new

exports.createReport = catchAsyncError(async (req,res,next) => {
    
    const report = await Report.findOne({
        cmdtyID: cmdtyID,
        marketID: marketID,
      })

    if (!report) {
        const newReport = await Report.create({
          cmdtyName: cmdtyName,
          cmdtyID: cmdtyID,
          marketID: marketID,
          marketName: marketName,
          price: price / convFctr,
          users: [userID],
        })
        
        res.status(200).json({
             success,
             newReport 
        })

      } else {
        
        report.price = report.price + price / convFctr;
        report.price = report.price / 2;
        report.users.push(userID);

        await report.save({ validationAfterSave: true });

        res.status(200).json({
          success: true,
          report,
        });
      }
})


//get a report by id /report?reportid="qfqfw"

exports.getReport = catchAsyncError(async (req,res,next) => {

    const report = await Report.findOne({
        cmdtyID: cmdtyID,
        marketID: marketID,
      });
    
    res.status(200).json({
        success : true,
        report
    })
})


