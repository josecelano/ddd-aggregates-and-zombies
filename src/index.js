import ApocalypticWorld from "./apocalyptic_world";
import Coordinate from "./coordinate";
import Zombie from "./zombie";

const apocalypticWorld = new ApocalypticWorld(10, 10);
const zombie = new Zombie();

apocalypticWorld.addZombie(zombie, new Coordinate(0, 0));
apocalypticWorld.addZombie(zombie, new Coordinate(1, 1));
apocalypticWorld.addZombie(zombie, new Coordinate(2, 2));

apocalypticWorld.print();
