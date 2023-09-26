export default function getBadge(score) {
  if (score <= 7) {
    return 'Novice';
  } else if (score <= 16) {
    return 'Trainee';
  } else if (score <= 36) {
    return 'Apprentice';
  } else if (score <= 56) {
    return 'Supervisor';
  } else if (score <= 76) {
    return 'Manager';
  } else if (score <= 96) {
    return 'Director';
  } else {
    return 'Expert';
  }
}
