// Enum
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const test = Membership.Premium;
const test2 = Membership[2];
console.log(test);
console.log(test2);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["inst"] = "instagram";
    SocialMedia["fb"] = "facebook";
    SocialMedia["tw"] = "twitter";
})(SocialMedia || (SocialMedia = {}));
const test3 = SocialMedia.inst;
console.log(test3);
