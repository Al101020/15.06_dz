import moment from 'moment';

export const time = (timeZone) => {
  const clockMoment = moment().utcOffset(Number(timeZone)).format('HH:mm:ss');
  return clockMoment;
}
