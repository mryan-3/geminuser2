const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require("passport")

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://www.example.com/auth/google/callback",
            scope: ["profile", "email"]
        }, 
        function(accessToken, refreshToken, profile, callback){
            callback(null, profile)
        }
    )
)
passport.serializeUser((user) => {
    done(null, user)
})
passport.deserializeUser((user) => {
    done(null, user)
})