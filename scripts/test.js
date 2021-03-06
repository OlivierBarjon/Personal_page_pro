var Lightbulbs = {
    bulbVertices: [
    {"x":22.903060913085938,"y":1.7348792552947998},{"x":22.08816909790039,"y":4.591442584991455},{"x":21.692092895507812,"y":5.976990699768066},{"x":20.907676696777344,"y":8.715706825256348},{"x":20.133705139160156,"y":11.411376953125},{"x":19.370330810546875,"y":14.064120292663574},{"x":18.992616653442383,"y":15.374613761901855},{"x":18.24593162536621,"y":17.961475372314453},{"x":17.438720703125,"y":20.752822875976562},{"x":16.637187957763672,"y":23.519771575927734},{"x":15.85030460357666,"y":26.232173919677734},{"x":15.462624549865723,"y":27.567285537719727},{"x":14.698760986328125,"y":30.195972442626953},{"x":13.950777053833008,"y":32.76813888549805},{"x":13.135793685913086,"y":35.569549560546875},{"x":12.330108642578125,"y":38.33896255493164},{"x":11.935434341430664,"y":39.695980072021484},{"x":11.162497520446777,"y":42.35520553588867},{"x":10.41190242767334,"y":44.94084930419922},{"x":9.628293991088867,"y":47.64549255371094},{"x":8.817490577697754,"y":50.45214080810547},{"x":8.424226760864258,"y":51.817344665527344},{"x":7.662332534790039,"y":54.47154998779297},{"x":6.9340057373046875,"y":57.02335739135742},{"x":6.136892318725586,"y":59.837764739990234},{"x":5.359792709350586,"y":62.61057662963867},{"x":4.990869522094727,"y":63.939876556396484},{"x":4.292514801025391,"y":66.48577880859375},{"x":3.529491424560547,"y":69.32653045654297},{"x":2.8134613037109375,"y":72.07516479492188},{"x":2.1890220642089844,"y":74.57532501220703},{"x":1.8249759674072266,"y":76.10284423828125},{"x":1.2149677276611328,"y":78.87423706054688},{"x":0.7181968688964844,"y":81.64585876464844},{"x":0.5368631482124329,"y":84.22308349609375},{"x":0.7564245462417603,"y":87.10577392578125},{"x":0.9181066155433655,"y":88.51806640625},{"x":1.3568875789642334,"y":91.266845703125},{"x":1.9720487594604492,"y":93.9225082397461},{"x":2.869805335998535,"y":96.67609405517578},{"x":4.026493549346924,"y":99.23631286621094},{"x":4.71019172668457,"y":100.43528747558594},{"x":6.320463180541992,"y":102.67230987548828},{"x":8.292896270751953,"y":104.66864013671875},{"x":10.527410507202148,"y":106.29473876953125},{"x":13.045042037963867,"y":107.58129119873047},{"x":14.305294036865234,"y":108.06297302246094},{"x":17.058570861816406,"y":108.8245849609375},{"x":19.738489151000977,"y":109.25963592529297},{"x":22.58503532409668,"y":109.4623031616211},{"x":25.567338943481445,"y":109.36589050292969},{"x":26.990686416625977,"y":109.22407531738281},{"x":29.685686111450195,"y":108.8089370727539},{"x":32.45231628417969,"y":108.15174865722656},{"x":35.07832336425781,"y":107.26496887207031},{"x":37.63439178466797,"y":106.09351348876953},{"x":38.85661315917969,"y":105.4004898071289},{"x":41.12782287597656,"y":103.82134246826172},{"x":43.21026611328125,"y":101.93193054199219},{"x":45.010719299316406,"y":99.79389953613281},{"x":46.509918212890625,"y":97.43965148925781},{"x":47.146766662597656,"y":96.18624114990234},{"x":48.179420471191406,"y":93.58147430419922},{"x":48.905704498291016,"y":90.86083221435547},{"x":49.333900451660156,"y":88.07710266113281},{"x":49.48019027709961,"y":85.27090454101562},{"x":49.441749572753906,"y":83.87879943847656},{"x":49.21395492553711,"y":81.11614990234375},{"x":48.88788986206055,"y":78.33543395996094},{"x":48.46902847290039,"y":75.53885650634766},{"x":47.97406005859375,"y":72.78559875488281},{"x":47.701168060302734,"y":71.42537689208984},{"x":47.10042190551758,"y":68.69523620605469},{"x":46.43019104003906,"y":65.95223999023438},{"x":45.70833206176758,"y":63.24463653564453},{"x":44.95276641845703,"y":60.60857391357422},{"x":44.555789947509766,"y":59.28700256347656},{"x":43.72590637207031,"y":56.636985778808594},{"x":42.85209655761719,"y":53.9801025390625},{"x":41.9382209777832,"y":51.316246032714844},{"x":40.98863983154297,"y":48.64683532714844},{"x":40.50154113769531,"y":47.30971145629883},{"x":39.50566101074219,"y":44.632041931152344},{"x":38.502933502197266,"y":41.99885940551758},{"x":37.49367904663086,"y":39.39869689941406},{"x":36.46803283691406,"y":36.79609298706055},{"x":35.950225830078125,"y":35.49406814575195},{"x":34.90724563598633,"y":32.88964080810547},{"x":33.857139587402344,"y":30.28421401977539},{"x":32.8034782409668,"y":27.67803955078125},{"x":31.75078010559082,"y":25.073699951171875},{"x":31.22544288635254,"y":23.771133422851562},{"x":30.172632217407227,"y":21.14937973022461},{"x":29.123023986816406,"y":18.512771606445312},{"x":28.087501525878906,"y":15.879325866699219},{"x":27.070383071899414,"y":13.25079345703125},{"x":26.569618225097656,"y":11.937751770019531},{"x":25.586828231811523,"y":9.316398620605469},{"x":24.63152313232422,"y":6.699913024902344},{"x":23.708255767822266,"y":4.0907440185546875}
  ],
    config: {
      numBulbs: 5,
      render: {
        height: 400,
        width: 400,
        startX: 60,
        y: 0,
        spacing: 70,
        lineWidth: 2.5,
        imgHeight: 110,
        wireframe: false,
        background: '#fff'
      },
      lengths: {
        min: 40,
        max: 130
      },
      wind: {
        major: {
          duration: {
            min: 8000,
            max: 12000
          },
          min: -2,
          max: 2
        },
        minor: {
          duration: {
            min: 800,
            max: 1200
          },
          min: 0.8,
          max: 1.2
        }
      },
      light: {
        duration: {
          min: 5000,
          max: 15000
        },
        delay: 500,
        chance: 1
      }
    },
    current: {
      elPerBulb: 0,
      wind: {
        major: 0,
        minor: 1
      },
      light: false,
      lightStatus: []
    },
    wind: {
      major: function() {
        let self = Lightbulbs
        let current = self.rand(self.config.wind.major.min, self.config.wind.major.max)
        let duration = self.rand(self.config.wind.major.duration.min, self.config.wind.major.duration.max)
        anime({
          targets: self.current.wind,
          major: current,
          duration: duration,
          loop: false,
          complete: function() {
            self.wind.major()
          }
        });
      },
      minor: function() {
        let self = Lightbulbs
        let current = self.rand(self.config.wind.minor.min, self.config.wind.minor.max)
        let duration = self.rand(self.config.wind.minor.duration.min, self.config.wind.minor.duration.max)
        anime({
          targets: self.current.wind,
          minor: current,
          duration: duration,
          loop: false,
          complete: function() {
            self.wind.minor()
          }
        });
      }
    },
    light: function() {
      let self = Lightbulbs
      let index = Math.floor(self.rand(0, self.config.numBulbs / self.config.light.chance))
      self.current.light = index > self.config.numBulbs - 1 ? false : index + 1
  
      let duration = self.rand(self.config.light.duration.min, self.config.light.duration.max)
      setTimeout(function() {
        self.current.light = false
        setTimeout(function() {
          self.light()
        }, self.config.light.delay)
      }, duration)
    },
    rand: function(max, min) {
      return Math.random() * (max - min) + min;
    }
  }
  
  setTimeout(function() {
    Lightbulbs.wind.major()
    Lightbulbs.wind.minor()
    Lightbulbs.light()
  }, 2000)
  
  Lightbulbs.matter = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Events = Matter.Events,
        Body = Matter.Body,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Vertices = Matter.Vertices;
    
    let self = Lightbulbs
    
    Matter.use('matter-attractors');
    
    var engine = Engine.create();
    engine.world.gravity.scale = 0.002;
    
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        wireframeBackground: '#222',
        background: self.config.render.background,
        width: self.config.render.width,
        height: self.config.render.height,
        wireframes: self.config.render.wireframe
      }
    })
    
    Render.run(render)
    
    // create runner
    var runner = Runner.create()
    Runner.run(runner, engine)
  
    let ballSettings = []
    for (let i = 0; i < self.config.numBulbs; i++) {
      ballSettings.push({
        length: self.rand(self.config.lengths.min, self.config.lengths.max)
      })
    }
    
    let bulbs = []
    var group = Body.nextGroup(true)
    
    for (let i = 0; i < ballSettings.length; i++) {
      let x = self.config.render.startX + i * self.config.render.spacing
      
      var bulb = Bodies.fromVertices(x, self.config.render.y - ballSettings[i].length + self.config.render.imgHeight / 2, self.bulbVertices, {
        frictionAir: 0.03,
        render: {
          sprite: {
            texture: 'https://covey-alistair.surge.sh/bulb-small.png'
          }
        }
      }, false)
      
      var litBulbOffset = 22
      var litBulb = Bodies.circle(x, self.config.render.y - ballSettings[i].length + self.config.render.imgHeight / 2 + litBulbOffset, 40, {
        collisionFilter: 0,
        render: {
          visible: false,
          sprite: {
            texture: 'https://covey-alistair.surge.sh/lit-bulb-small.png'
          }
        }
      })
      var litBulbCons = Constraint.create({
        bodyA: bulb,
        pointA: {
          x: 0,
          y: litBulbOffset
        },
        bodyB: litBulb,
        length: 0,
        render: {
          visible: false
        }
      })
      
      let cons = Constraint.create({
        pointA: {x: x, y: self.config.render.y},
        bodyB: bulb,
        pointB: {
          x: 0,
          y: -(self.config.render.imgHeight / 2) - 10
        },
        stiffness: 0.001,
        length: ballSettings[i].length,
        render: {
          anchors: false,
          strokeStyle: '#000',
          lineWidth: self.config.render.lineWidth,
          type: 'line'
        }
      })
      var light = []
      light.push(cons)
      light.push(litBulb)
      light.push(litBulbCons)
      light.push(bulb)
      self.current.elPerBulb = light.length
      
      bulbs.push(...light)
    }
    
    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.01,
            render: {
              visible: false
            }
          }
        })
    
    var windPoint = Bodies.rectangle(0, self.config.render.height / 3, 5, 5, {
      isStatic: true,
      collisionFilter: 0,
      render: {
        visible: false
      },
      plugin: {
        attractors: [
          function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * self.current.wind.major * self.current.wind.minor * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * self.current.wind.major * self.current.wind.minor * 1e-6
            }
          }
        ]
      }
    })
    World.add(engine.world, windPoint);
   
    render.mouse = mouse
    World.add(engine.world, mouseConstraint);
  
    World.add(engine.world, [...bulbs]);
    
    Events.on(runner, 'afterUpdate', () => {
      for (let j = 0; j < bulbs.length; j += self.current.elPerBulb) {
        let k = j / self.current.elPerBulb
        
        let rope = bulbs[j]
        let bulb = bulbs[j + self.current.elPerBulb - 1]
        let length = ballSettings[k].length
        
        let yOffset = bulb.position.y - self.config.render.y - length
        let range = yOffset < 0 ? 0 : yOffset
        rope.stiffness = 0.001 + (0.1 / length * range)
        
        let litBulb = bulbs[j + 1]
        let lit = false
        if (self.current.light && (self.current.light - 1) * self.current.elPerBulb === j) {
          lit = true
        }
        if (lit) {
          lightOn(k, litBulb)
        } else {
          lightOff(k, litBulb)
        }
      }
    })
    
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function() {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      }
    };
  }
  
  function lightOn(i, bulb) {
    if (!Lightbulbs.current.lightStatus[i]) {
      Lightbulbs.current.lightStatus[i] = true
      bulbAnimation(bulb, true)
    }
  }
  
  function lightOff(i, bulb) {
    if (Lightbulbs.current.lightStatus[i]) {
      Lightbulbs.current.lightStatus[i] = false
      bulbAnimation(bulb, false)
    }
  }
  
  function bulbAnimation(bulb, final) {
    let delay = Lightbulbs.rand(300, 700)
    let duration = Lightbulbs.rand(400, 600)
    let loops = Math.floor(Lightbulbs.rand(1.5, 3.5)) * 2 - 1
    anime({
      endDelay: delay,
      duration: duration,
      direction: 'alternate',
      loop: loops,
      loopComplete: function() {
        bulb.render.visible = !bulb.render.
      },visible
      complete: function() {
        bulb.render.visible = final
      }
    })
  }
  
  MatterTools.Demo.create({
    toolbar: {
      title: 'matter-js',
      url: 'https://github.com/liabru/matter-js',
      reset: true,
      source: true,
      fullscreen: true,
      exampleSelect: true
    },
    preventZoom: true,
    resetOnOrientation: true,
    examples: [
      {
        name: 'Hanging Lightbulbs',
        id: 'hangingLightbulbs',
        init: Lightbulbs.matter
      }
    ]
  });
  