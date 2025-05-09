if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

const dbUrl='mongodb://127.0.0.1:27017/wanderlust'
//const dbUrl=process.env.ATLASDB_URL;

main()
  .then(()=>{
      console.log("connected to DB");
  })
  .catch((err)=>{
    console.log(err);
  })

async function main(){
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})

store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
})

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expries:Date.now()+7*24*60*60*1000,// how many milisecond comes in 7 days
        maxAge:7*24*60*60*1000,
        httpOnly:true, //due to security resons
    }
};

// app.get("/",(req,res)=>{
//     res.send("Hi, I am root!");
// });

app.use(session(sessionOptions));
app.use(flash());//declearation of flash

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());//Store info before session
passport.deserializeUser(User.deserializeUser());//Unstore info after session

//middleware  (This middleware should be just call before the following routes)
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    // console.log(res.locals.success);
    next(); //dont forget to call next other we will stuck in this middleware
});

// app.get("/demouser", async(req,res)=>{
//     let fakeUser=new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     });

//     let registerdUser=await User.register(fakeUser,"helloWorld!");
//     res.send(registerdUser);
// })

// we have to declare flash before the routes because with the help of this only we are using flash
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not Found!"));
});

//MiddleWare
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went Wrong!"}=err;
    // res.status(statusCode).send(message);
    //res.send("something went wrong!");
    res.status(statusCode).render("error.ejs",{err});
})

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});



// app.get("/testListing",async (req,res)=>{
//     let sampleListing=new Listing({
//         title:"My new Villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calangute,Goa",
//         country:"India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved!");
//     res.send("successful testing");
// });