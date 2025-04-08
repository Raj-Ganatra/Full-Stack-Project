const Listing=require("../models/listing.js");
const Review=require("../models/review.js");

module.exports.createReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review); //review is key which contains value such as comments rating

    newReview.author=req.user._id;
    listing.reviews.push(newReview);//as we are pushing whole review object then also mongoose adds id because we have just given type id in listing schema

    await newReview.save();
    await listing.save(); 

    // console.log("new review saved!");
    // res.send("new review saved!");

    req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview=async(req,res)=>{
    let {id,reviewId}=req.params;
    // console.log(id +" "+reviewId);

    await Listing.findByIdAndUpdate(id,{$pull: {reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
};
