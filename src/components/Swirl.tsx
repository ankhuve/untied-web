import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      <svg
        class="absolute bottom-0 right-[-800px] md:right-[-600px] lg:right-[-300px] scale-[200%] origin-bottom-right"
        xmlns="http://www.w3.org/2000/svg"
        width="579"
        height="277"
        viewBox="0 0 579 277"
      >
        <defs>
          <linearGradient id="fill-gradient-1" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="0%"
              style={{ stopColor: "#91DA98", stopOpacity: 0.4 }}
            />
            <stop offset="100%" style={{ stopColor: "#91DA98" }} />
          </linearGradient>
        </defs>
        <path
          d="M0 277H578.5C546.9 256.2 545 83.6667 548 0C487.5 90.5 333.9 260.4 203.5 216C73.1 171.6 13.5 238.167 0 277Z"
          fill="url(#fill-gradient-1)"
        />
      </svg>
      <svg
        class="absolute bottom-0 right-[-800px] md:right-[-600px] lg:right-[-300px] scale-[200%] origin-bottom-right"
        xmlns="http://www.w3.org/2000/svg"
        width="579"
        height="153"
        viewBox="0 0 579 153"
      >
        <defs>
          <linearGradient id="fill-gradient-2" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="0%"
              style={{ stopColor: "#17771B", stopOpacity: 0.2 }}
            />
            <stop offset="100%" style={{ stopColor: "#17771B" }} />
          </linearGradient>
        </defs>
        <path
          d="M578.5 153H0C244.991 153 363.5 -191 578.5 153Z"
          fill="url(#fill-gradient-2)"
        />
      </svg>
      <svg
        class="absolute bottom-0 right-[-800px] md:right-[-600px] lg:right-[-300px] scale-[200%] origin-bottom-right"
        xmlns="http://www.w3.org/2000/svg"
        width="579"
        height="230"
        viewBox="0 0 579 230"
      >
        <defs>
          <linearGradient id="fill-gradient-3" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.2 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.5 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M172.5 159.5C109.084 220.995 48 230 0 230H578.5C569.5 224 470.5 84.5 353.5 84.5C236.5 84.5 193.5 18.5 184.5 0.5C189 25 222 111.5 172.5 159.5Z"
          fill="url(#fill-gradient-3)"
        />
      </svg>
    </div>
  );
});
