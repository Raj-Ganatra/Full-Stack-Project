const Listing=require("../models/listing.js");
const geocodeLocation = require("../utils/geocode.js");

module.exports.index=async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
    // console.log(req.user);
    res.render("listings/new.ejs");
};

module.exports.showListing=async(req,res)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id).populate({
        path:"reviews",
        populate:{
            path:"author",
        }
    }).populate("owner");
    if(!listing){
        req.flash("error","Listing You requestes for does not exist");
        res.redirect("/listings");
    }else{
        // console.log(listing);
        res.render("listings/show.ejs",{listing});
    }
};

module.exports.createListing=async(req,res,next)=>{
    const location=req.body.listing.location;

    // let{title, description, image, price, country, location}=req.body;
    let url=req.file.path;
    let filename=req.file.filename;

    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};

    const coords=await geocodeLocation(location);
    if (!coords) {
        req.flash("error", "Location not found. Please enter a valid place.");
        return res.redirect("/listings/new");
    }

    newListing.geometry={
        type:"Point",
        coordinates:coords,
    };

    let savedListing=await newListing.save();
    // console.log(savedListing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm=async (req,res)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing You requestes for does not exist");
        res.redirect("/listings");
    }else{
        let originalImageUrl=listing.image.url;
        originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
        // console.log(originalImageUrl);
        res.render("listings/edit.ejs",{listing,originalImageUrl});
    }
};

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});//it will give listing before updation

    const location=req.body.listing.location;// to take out updated location from edit file
    // console.log(location);
    const coords=await geocodeLocation(location);

    if(typeof req.file!="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
    }
    listing.geometry={
        type:"Point",
        coordinates:coords,
    };
    let savedListing=await listing.save();
    // console.log(savedListing);

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};