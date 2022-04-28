require("dotenv").config();

module.exports = {

    SuaQuanAo: (req, res) => {
        var idQuanAo = new require("mongoose").Types.ObjectId(req.params.idQuanAo);

        var data = req.body;

        require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
                if (err) throw err;

                dbo.collection("QuanAo").updateOne({"_id" : idQuanAo}, {$set : data},function(err, result){
                    if (err) throw err;

                    res.json({result : true, message :"Sửa thành công !"});
                    dbo.close();
                })

        })
    }
}