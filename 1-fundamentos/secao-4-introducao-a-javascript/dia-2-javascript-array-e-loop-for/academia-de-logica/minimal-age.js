let marinaAge = 29;
let silviaAge = 35;
let izaAge = 18;

if (marinaAge < silviaAge && marinaAge < izaAge) {
  console.log('Marina é a pessoa mais jovem e possui', marinaAge, 'anos de idade');
} else if (silviaAge < izaAge) {
  console.log('Silvia é a pessoa mais jovem e possui', silviaAge, 'anos de idade');
} else {
  console.log('Iza é a pessoa mais jovem e possui', izaAge, 'anos de idade');
}