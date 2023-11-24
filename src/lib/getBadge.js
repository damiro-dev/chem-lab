export default function getBadge(level) {
  if (level <= 2) {
    return 'Novice';
  } else if (level <= 5) {
    return 'Trainee';
  } else if (level <= 10) {
    return 'Apprentice';
  } else if (level <= 15) {
    return 'Supervisor';
  } else if (level <= 20) {
    return 'Manager';
  } else if (level <= 25) {
    return 'Director';
  } else {
    return 'Expert';
  }
}
