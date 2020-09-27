// MATTER.JS

//setup aliases
const Engine = Matter.Engine, // Engines : methods for creating and manipulating engines. Required in a project to update the simulation of the world
        Render = Matter.Render, //Render : basic HTML5 canvas-based renderer. This module is required to visualize different engines.
        //Runner = Matter.Runner, // ??
        Composite = Matter.Composite, // Composite : lets you tweak a few additional properties like gravity and bounds.
        //Composites = Matter.Composites, // ??
        //Common = Matter.Common, // ??
        MouseConstraint = Matter.MouseConstraint, // This module provides you with methods and properties that let you create and manipulate mouse constraints. This is helpful when you want different bodies in the world to interact with the user. 
        //Mouse = Matter.Mouse, // ??
        World = Matter.World, //World : used to create and manipulate the world in which the engine runs
        Bodies = Matter.Bodies; // Bodies : allows you to create rigid body objects.

    // create engine
    const engine = Engine.create(); // method of the Matter.Engine module to create a new engine . Le paramètre settings de cette méthode est en fait un objet avec des paires clé-valeur pour remplacer les valeurs par défaut de quelques propriétés liées au moteur.
        //world = engine.world; // ?

    // create renderer
    const render = Render.create({ // to create a new renderer. le paramètre settings dans cette méthode est un objet utilisé pour spécifier différentes options pour le paramètre.
        element: document.body, // the element key :  to specify the element where the library should insert the canvas !!!!!!!! Similarly, you can also use the canvas key to specify the canvas element where the Matter.js world should be rendered. 
        engine: engine, // engine key : to specify the engine that should be used to render the world.
        options: { // options key accepts an object as its value
            //width: 50, // to set values for different parameters
            //height: 50,
            //background: '../assets/Olivier.jpg',
            //showAngleIndicator: true,
            wireframes:false,
        }
    });

    // create different bodies that will interact in our world (with help of Matter.Bodies)
    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const ballA = Bodies.circle(380, 100, 100, 10);
    const ballB = Bodies.circle(460, 10, 40, 10);
    const ground = Bodies.rectangle(200, 400, 500, 1, { isStatic: true });
    
    World.add(engine.world, [boxA, ballA, ballB, ground]); // Once we have created the bodies, we need to add them to a world of our choice using the add() method from the Matter.World module
    
    Engine.run(engine); // run the engine
    Render.run(render); // run the render


    // fit the render viewport to the scene
    /* Render.lookAt(render, {
        min: { x: 50, y: 50 },
        max: { x: 50, y: 50 }
    }); */

    // create runner
    //const runner = Runner.create();
    //Runner.run(runner, engine);

    /*

    // add bodies
    const stack = Composites.stack(20, 20, 20, 5, 0, 0, function(x, y) {
        return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
    });
  
    World.add(world, stack);
    
    World.add(world, [
        Bodies.rectangle(250, 150, 700, 5, { isStatic: true, angle: Math.PI * 0.06, render: { visible: true} }),
        Bodies.rectangle(500, 380, 700, 10, { isStatic: true, angle: -Math.PI * 0.03, render: { visible: true} }),
        Bodies.rectangle(340, 580, 700, 10, { isStatic: true, angle: Math.PI * 0.05, render: { visible: true} })

    ]);
*/

//code to add ball pool
    

     // add bodies
    /* World.add(world, [
        Bodies.rectangle(400, 600, 1200, 10.5, { isStatic: true})
    ]);

    const stack = Composites.stack(100, 0, 10, 8, 10, 10, function(x, y) {
        return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1 });
    });
    
    World.add(world, [
        stack,
        Bodies.polygon(200, 460, 3, 60),
        Bodies.polygon(400, 460, 5, 60),
        Bodies.rectangle(600, 460, 80, 80)
    ]); */


    // add mouse control
    /* const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint); */

    // keep the mouse in sync with rendering
    /* render.mouse = mouse; */


    // fit the render viewport to the scene
    /* Render.lookAt(render,Composite.allBodies(world)); */





// FONCTION DE TEST - RETOURNE LES INFORMATIONS DU VIEWPORT

/* function viewportSize() {
    const d = document.documentElement;
    return {
      height: d.clientHeight,
      width: d.clientWidth
    };
  }
  
  const tailles = viewportSize();
  const hauteur = tailles.height;
  const largeur = tailles.width;  

  console.log(`viewport width : ${largeur}`);
  console.log(`viewport height : ${hauteur}`); */