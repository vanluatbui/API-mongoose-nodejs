require("dotenv").config();

module.exports = {

    XoaQuanAo: (req,res) => {

        var idQuanAo = new require("mongoose").Types.ObjectId(req.params.idQuanAo);
        
        require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
            if (err) throw err;

            dbo.collection("QuanAo").deleteOne({"_id" : idQuanAo}, function(err, result){
                if (err) throw err;

                res.json({result : true, message : "Xoá thành công !"});
                dbo.close();
            })
        })
    }
}










