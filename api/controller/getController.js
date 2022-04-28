require("dotenv").config();

module.exports = {

    getAllQuanAo : (req, res) =>{
        
        require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
            if (err) throw err;

            console.log(process.env.URL_DB + process.env.DB_NAME);

            dbo.collection("QuanAo").find().toArray(function(err, data){
                if (err) throw err;

                res.json({result : true, data : data});
                dbo.close();
            })
        })
    },

    getNewQuanAo : (req, res) => {

        require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
            if (err) throw err;

            console.log(process.env.URL_DB + process.env.DB_NAME);

            dbo.collection("QuanAo").find().sort("_id",-1).limit(3).toArray(function(err, data){
                if (err) throw err;

                res.json({result : true, data : data});
                dbo.close();
            })
        })
    },

    TimKiem: (req,res) => {
         var search = req.params.search;

         require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
            if (err) throw err;

            console.log(process.env.URL_DB + process.env.DB_NAME);

            dbo.collection("QuanAo").find({"TenQuanAo" : new RegExp(search, "i")}).toArray(function(err,data){
                if (err) throw err;

                res.json({result : true, data : data});
                dbo.close();
            })
        })

    },

    GetTheoLoai: (req,res) => {

       var idLoai = new require("mongoose").Types.ObjectId(req.params.idLoai);

        require("mongoose").connect(process.env.URL_DB + process.env.DB_NAME, function(err, dbo){
            if (err) throw err;

            console.log(process.env.URL_DB + process.env.DB_NAME);

            dbo.collection("QuanAo").find({"_id": idLoai}).toArray(function(err, data){
                if (err) throw err;

                res.json({result : true, data : data});
                dbo.close();
            })
        })
    }
}










