/****************
 * drones101.js *
 ****************
 *
 * Do you remember, my dear Professor, a certain introductory
 * computational rationality class you taught long ago? Assignment
 * #2, behavior functions of autonomous agents? I remember that one
 * fondly - but attack drones are so much easier to reason about
 * when they're not staring you in the face, I would imagine!
 */

function startLevel(map) {
    function moveToward(obj, type) {
        var target = obj.findNearest(type);
        var leftDist = obj.getX() - target.x;
        var upDist = obj.getY() - target.y;

        var direction;
        if (upDist == 0 && leftDist == 0) {
            return;
        }
        if (upDist > 0 && upDist >= leftDist) {
            direction = 'up';
        } else if (upDist < 0 && upDist < leftDist) {
            direction = 'down';
        } else if (leftDist > 0 && leftDist >= upDist) {
            direction = 'left';
        } else {
            direction = 'right';
        }

        if (obj.canMove(direction)) {
            obj.move(direction);
        }
    }

    map.defineObject('attackDrone', {
        'type': 'dynamic',
        'symbol': 'd',
        'color': 'red',
        'onCollision': function (player) {
            player.killedBy('an attack drone');
        },
        'behavior': function (me) {
            moveToward(me, 'player');
        }
    });

    map.placePlayer(1, 1);
    map.placeObject(map.getWidth() - 2, 12, 'attackDrone');
    map.placeObject(map.getWidth() - 1, 12, 'exit');

    map.placeObject(map.getWidth() - 1, 11, 'block');
    map.placeObject(map.getWidth() - 2, 11, 'block');
    map.placeObject(map.getWidth() - 1, 13, 'block');
    map.placeObject(map.getWidth() - 2, 13, 'block');


    map.defineObject('defenseDrone', {
        'type': 'dynamic',
        'symbol': '|',
        'color': '#ff0',
        'onCollision': function (drone) {
            drone.killedBy('a defense drone');
        },
        'behavior': function (me) {
            moveToward(me, 'attackDrone');
        }
    });
    map.placeObject(map.getWidth() - 11, 9, 'defenseDrone');
    map.placeObject(map.getWidth() - 12, 10, 'defenseDrone');
    map.placeObject(map.getWidth() - 15, 11, 'defenseDrone');
    map.placeObject(map.getWidth() - 10, 13, 'defenseDrone');
    map.placeObject(map.getWidth() - 6, 12, 'defenseDrone');

}

function validateLevel(map) {
    map.validateExactlyXManyObjects(1, 'exit');
}