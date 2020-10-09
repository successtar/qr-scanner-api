const express = require('express');
const router = express.Router();
const app = express();


router.get('/api/user/:id', (req,res) => {

    let data;

    switch(req.params.id) {

        case 'ST234548':

            data = {
                        status: "success",
                        message: "Data fetched successfully",
                        data: {
                                id: req.params.id,
                                name: "Happy Singh",
                                email: "happy.singh@talview.com",
                                field: "Android Developer",
                                website: "https://www.linkedin.com/in/happpysingh23828/" 
                            }
                    }
            break;

        case 'ST835542':

            data = {
                        status: "success",
                        message: "Data fetched successfully",
                        data: {
                                id: req.params.id,
                                name: "Hammed Osanyinpeju",
                                email: "osanyinpejuhammed35@gmail.com",
                                field: "Software Development",
                                website: "https://successtar.github.io" 
                            }
                    }
            break;

        case 'ST335147':

            data = {
                        status: "success",
                        message: "Data fetched successfully",
                        data: {
                                id: req.params.id,
                                name: "Darku Solomon",
                                email: "darkusolomon1@gmail.com",
                                field: "Software Development",
                                website: "https://github.com/snad1" 
                            }
                    }
            break;

        case 'ST675147':

            data = {
                        status: "success",
                        message: "Data fetched successfully",
                        data: {
                                id: req.params.id,
                                name: "Anan Seti",
                                email: "anan.sati@gmail.com",
                                field: "Software Development",
                                website: "https://www.toobeeinfo.com" 
                            }
                    }
            break;
    
        default:

            data = {
                        status: "fail",
                        message: "User QR code not found",
                    }
    } 


    res.status(200).json(data);
})


router.use('*', (req,res) => {
    
    res.status(404).json({status: "fail", message: "Invalid Endpoint"})
})

app.use('/', router);

/* Start App */
app.listen(process.env.PORT || 3000,() => {

    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});