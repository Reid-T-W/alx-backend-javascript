import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const all = [];
  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        all.push({ status: result.status, value: result });
      });
      return all;
    });
}
