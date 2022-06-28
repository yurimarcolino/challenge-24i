export function convertMinsToHrsMins(minutes: number){
  const hours = Math.trunc(minutes/60);
  const min = minutes % 60;  
  
  return `${hours}h ${min}min`
}