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
var boxA = Bodies.rectangle(100, 200, 80, 80, {
    render:{
        fillStyle: '#f7bc28',
    }
}); //Matter.Bodies.rectangle(x, y, width, height, [options])
var boxB = Bodies.polygon(150, 10, 4, 75,{
    render:{
        sprite: {
            texture: '../assets/Olivier-Barjon.jpg',
            xScale: 0.5,
            yScale: 0.5,
        }
    }
});
var ground = Bodies.rectangle(200, 300, 300, 0.1, { 
    isStatic: true,
    render:{
        fillStyle: 'black'
    }
 });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);