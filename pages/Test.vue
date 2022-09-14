<template>
  <main>
    <div class="testing-ground">
      <div>
        <h1>{{ $refs.arena }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam
          minus aliquid molestiae quod ab eligendi. Exercitationem voluptas illo officiis,
          dicta esse corporis. Est quae consectetur quod exercitationem accusamus! Magni!
        </p>
      </div>
      <div class="arena" ref="arena"></div>
    </div>
  </main>
</template>
<script>
import Matter from "matter-js";
export default {
  layout: "new",
  mounted() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Svg = Matter.Svg;

    console.log(Matter ? "gday" : "no way");
    console.log(this.$refs.arena);
    const engine = Engine.create();
    // // // renderer
    var render = Render.create({
      element: this.$refs.arena,
      engine: engine,
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  },
};
</script>
<style>
/* arena testing */
.testing-ground {
  width: 100%;
}
.arena {
  width: 100%;
  height: 600px;
  background-color: green;
}
/* logo */
.logo {
  animation: 1s appear;
  transition: transform 0.2s ease-out;
  cursor: pointer;
}
.logo:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
