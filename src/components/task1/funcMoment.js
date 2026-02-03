import moment from 'moment';

const funcMoment = () => {  // const clockMoment = moment().utcOffset(0).format('HH:mm:ss');
  const clockMoment = moment();
  return clockMoment;
}

export default funcMoment;