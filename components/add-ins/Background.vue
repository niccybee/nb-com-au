<template>
  <div id="anim-bg" class="bg-container">
    <!-- <div class="debug-shit">
      <p>I am the background of the world</p>
      <p>page - X: {{ mouseX }} Y: {{ mouseY }}</p>
      <p>size - X: {{ sizeX }} Y: {{ sizeY }}</p>
      <p>position - X: {{ positionX }} Y: {{ positionY }}</p>
    </div> -->
    <!-- <div class="debug-box" :style="`transform(${mouseX}, ${mouseY})`"></div> -->
    <!-- <div class="debug-box" :style="`top:${mouseY};left:${mouseX};`"></div> -->
    <!-- <client-only> -->
    <svg
      width="2632"
      height="1709"
      viewBox="0 0 2632 1709"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_100_0)">
        <path
          d="M2213.21 1045.92C2306.42 855.744 2288.79 736.516 2160.33 688.231C1967.64 615.802 1509.45 586.832 1317.93 429.716C1126.41 272.604 542.457 394.063 442.587 663.718C342.716 933.373 162.9 1349 1111.09 1349C1743.22 1349 2110.59 1247.97 2213.2 1045.92L2213.21 1045.92Z"
          fill="var(--highlight-500)"
        />
      </g>
      <g filter="url(#filter1_f_100_0)">
        <path
          d="M2180.45 1120.9C2257.43 980.916 2242.87 893.152 2136.78 857.61C1977.65 804.295 1599.26 782.97 1441.09 667.318C1282.93 551.668 800.68 641.074 718.203 839.566C635.726 1038.06 487.227 1344 1270.28 1344C1792.32 1344 2095.7 1269.64 2180.44 1120.9L2180.45 1120.9Z"
          fill="var(--highlight-500)"
        />
      </g>

      <g
        :transform="`translate(${positionX}, ${positionY})`"
        filter="url(#filter2_f_100_0)"
        style="mix-blend-mode: color-dodge"
      >
        <path
          d="M1743.43 1195.23C1772.12 1133.5 1766.7 1094.81 1727.16 1079.13C1667.84 1055.63 1526.81 1046.22 1467.86 995.227C1408.91 944.233 1229.16 983.655 1198.42 1071.18C1167.68 1158.7 1112.33 1293.6 1404.19 1293.6C1598.77 1293.6 1711.85 1260.81 1743.43 1195.23L1743.43 1195.23Z"
          fill="var(--highlight-100)"
        />
      </g>

      <defs>
        <filter
          id="filter0_f_100_0"
          x="0"
          y="0"
          width="2632"
          height="1709"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="180" result="effect1_foregroundBlur_100_0" />
        </filter>
        <filter
          id="filter1_f_100_0"
          x="290"
          y="256"
          width="2299"
          height="1448"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="180" result="effect1_foregroundBlur_100_0" />
        </filter>
        <filter
          id="filter2_f_100_0"
          x="813"
          y="612.6"
          width="1308.53"
          height="1041"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="180" result="effect1_foregroundBlur_100_0" />
        </filter>
      </defs>
    </svg>
    <!-- </client-only> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      sizeX: 0,
      sizeY: 0,
    };
  },
  props: {
    mouseX: Number,
    mouseY: Number,
  },
  computed: {
    positionX() {
      return this.mouseX - this.sizeX;
    },
    positionY() {
      return this.mouseY - this.sizeY;
    },
  },
  methods: {},
  mounted() {
    this.sizeX = window.innerWidth;
    this.sizeY = window.innerHeight;
  },
};
</script>
<style>
.debug-box,
.debug-shit {
  position: absolute;
  background: red;
  width: 100px;
  height: 100px;
  opacity: 0.5;
}
.bg-container {
  /* background: #54798E; */
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  /* top: 0; */
  bottom: 0;
  right: 0;
  overflow: hidden;
  /* opacity: 0.5; */
  pointer-events: none;
}
</style>
