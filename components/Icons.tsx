type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Search: (props: IconProps) => (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m18.78 17.72c.1467.1467.22.3233.22.53 0 .2133-.0733.39-.22.53-.16.1467-.3367.22-.53.22-.2067 0-.3833-.0733-.53-.22l-4.47-4.47c-.6667.54-1.4067.9567-2.22 1.25-.8067.2933-1.65.44-2.53.44-1.36 0-2.61333-.3367-3.76-1.01s-2.05667-1.5833-2.73-2.73-1.01-2.4-1.01-3.76.33667-2.61333 1.01-3.76 1.58333-2.05667 2.73-2.73 2.4-1.01 3.76-1.01 2.6133.33667 3.76 1.01 2.0567 1.58333 2.73 2.73 1.01 2.4 1.01 3.76c0 .88-.1467 1.7267-.44 2.54-.2933.8067-.71 1.5433-1.25 2.21zm-10.28-3.22c1.08667 0 2.0867-.27 3-.81.92-.54 1.65-1.2667 2.19-2.18.54-.92.81-1.92333.81-3.01s-.27-2.08667-.81-3c-.54-.92-1.27-1.65-2.19-2.19-.9133-.54-1.91333-.81-3-.81s-2.09.27-3.01.81c-.91333.54-1.64 1.27-2.18 2.19-.54.91333-.81 1.91333-.81 3s.27 2.09.81 3.01c.54.9133 1.26667 1.64 2.18 2.18.92.54 1.92333.81 3.01.81z"
        stroke="#000"
        strokeWidth=".5"
        {...props}
      ></path>
    </svg>
  ),
  ArrowDown: (props: IconProps) => (
    <svg
      className="ml-1 h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Menu: (props: IconProps) => (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  X: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  ),
  ArrowRight: (props: IconProps) => (
    <svg
      className="ml-1 h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Play: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="160"
      height="100"
      viewBox="0 0 161 100"
      aria-hidden="true"
      {...props}
    >
      <g opacity=".6">
        <rect fill="#1d1c1d" height="100" rx="6" width="160.748"></rect>
        <path
          clipRule="evenodd"
          d="m101.172 52.3278-33.4889 16.6667v-33.3334z"
          fill="#fff"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
};
