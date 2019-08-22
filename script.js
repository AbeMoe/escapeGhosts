//Current game plan (naive):
//Calculate steps total steps till goal from
//each actors position. If yours is equal
//or greater than any other actors, return false
//Otherwise, return false

const ghosts = [[1,0],[0,3],[0,1]]
const target = [1,1]
var targetDist = target[0] + target[1]
var lowest = 99999999;

for(var ghost of ghosts)
{
  let dist= Math.abs(target[0]-ghost[0]) +  Math.abs(target[1]-ghost[1])
  console.log(Math.abs(target[1]-ghost[1]));
  if(dist < lowest)
  {
    lowest = dist;
    console.log(lowest);
  }
}

if(targetDist < lowest)
{
  console.log(true);
}
else
  console.log(false);
