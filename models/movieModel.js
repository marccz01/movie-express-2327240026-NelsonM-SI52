import mongoose from "mongoose";
import userModel from "./userModel.js";

const MovieSchema = new mongoose.Schema(
    {
        judul : {
            type : String,
            unique : true,
            required : true,
            trim : true,
        },
        tahunRilis : {
            type : String,
            required : true,
            trim : true,
        },
        sutradara : {
            type : String,
            required : true,
            trim : true,
        },
        // Field Relasi
        createdBy: {
            type: mongoose.Types .ObjectId,
            ref: userModel // referensi ke model user
        }
    },
    {
        timestamps : true,
    }
);
const movieModel = mongoose.model("movie", MovieSchema);

export default movieModel;