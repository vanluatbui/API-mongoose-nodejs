require("dotenv").config();

module.exports = {

    ThemQuanAo: (req,res) => {

        var data = req.body;

        require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
            if (err) throw err;

            dbo.collection("QuanAo").insertOne(data, function(err, result){
                if (err) throw err;

                res.json({result : true, message : "Thêm thành công !"});
                dbo.close();
            })
        })
    }
}