// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


// create an engine
var engine = Engine.create();


// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes:false,
    }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(530, 100, 100, 2, {
    render:{
         /* fillStyle: '#f7bc28', */
        fillStyle: 'rgba(0,0,0,0)',
    },
    isStatic: true
}); //Matter.Bodies.rectangle(x, y, width, height, [options])

var boxB = Bodies.rectangle(450, 150, 100, 2, {
    render:{
         /* fillStyle: '#f7bc28', */
        fillStyle: 'rgba(0,0,0,0)',
    },
    isStatic: true
});

var boxC = Bodies.rectangle(330, 200, 100, 2, {
    render:{
        /* fillStyle: '#f7bc28', */
        fillStyle: 'rgba(0,0,0,0)',
    },
    isStatic: true
});

var boxD = Bodies.rectangle(250, 250, 100, 2, {
    render:{
        /* fillStyle: '#f7bc28', */
        fillStyle: 'rgba(0,0,0,0)',
    },
    isStatic: true
});

var boxE = Bodies.rectangle(440, 10, 100, 100,{
    render:{
        sprite: {
            texture: '../assets/Olivier-Barjon.jpg',
            xScale: 0.5,
            yScale: 0.5
        }
    }
});
var ground = Bodies.rectangle(300, 350, 200, 0, { 
    isStatic: true,
    render:{
        fillStyle: 'black'
    }
 });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, boxD, boxE, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);