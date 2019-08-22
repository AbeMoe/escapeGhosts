//Current game plan (naive):
//Calculate steps total steps till goal from
//each actors position. If yours is equal
//or greater than any other actors, return false
//Otherwise, return false
const ghosts = [[1,9],[2,-5],[3,8],[9,8],[-1,3]]
const target = [8,-10]
var targetDist = Math.abs(target[0]) + Math.abs(target[1]);
var lowest = 99999999;

for(var ghost of ghosts)
{
  let dist= Math.abs(target[0]-ghost[0]) +  Math.abs(target[1]-ghost[1])
  if(dist < lowest)
  {
    lowest = dist;
    console.log(lowest);
  }
}

console.log(targetDist,lowest);

if(targetDist < lowest)
{
  console.log(true);
}
else
  console.log(false);
