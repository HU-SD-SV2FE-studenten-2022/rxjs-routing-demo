import { DataService } from './data-service';

// Create all services as singletons on startup
const dataSeviceInstance = new DataService();

export {
  dataSeviceInstance
};
