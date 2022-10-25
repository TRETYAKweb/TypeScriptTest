// Enum

enum Membership {
  Simple,
  Standard,
  Premium
}

const test = Membership.Premium;
const test2 = Membership[2];

console.log(test);
console.log(test2);

enum SocialMedia {

  inst = 'instagram',
  fb = 'facebook',
  tw = 'twitter',

}

const test3 = SocialMedia.inst;

console.log(test3);