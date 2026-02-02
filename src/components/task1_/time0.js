import moment from 'moment';

const time0 = () => {  // const clockMoment = moment().utcOffset(0).format('HH:mm:ss');
  const clockMoment = moment().utcOffset(0)
  return clockMoment;
}

export default time0;
