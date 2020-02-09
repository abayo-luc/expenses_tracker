import {notificationManager} from './PushController';

const localNotify = notificationManager;
localNotify.configure();
export default (id, title, message) =>
  localNotify.showNotification(id, title, message);
