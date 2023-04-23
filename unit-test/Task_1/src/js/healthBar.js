export default function checkHealthBar(data) {
  if (data.health > 50) {
    return 'healthy';
  } if (data.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
