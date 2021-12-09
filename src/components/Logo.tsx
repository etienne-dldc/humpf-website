interface Props {
  className?: string;
}

export function Logo({ className }: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="20 0 960 500"
      className={className}
    >
      <defs>
        <filter
          id="a"
          width="111.4%"
          height="124.9%"
          x="-5.7%"
          y="-9%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dy="13"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="13.5"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.296301355 0"
          ></feColorMatrix>
        </filter>
        <filter
          id="d"
          width="101.6%"
          height="103.8%"
          x="-.8%"
          y="-1.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="4.5"
          ></feGaussianBlur>
          <feOffset
            dy="4"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
          ></feColorMatrix>
        </filter>
        <path
          id="b"
          d="M98.82 61h802.36c4.458 0 6.075.464 7.704 1.336a9.086 9.086 0 013.78 3.78c.872 1.63 1.336 3.246 1.336 7.703v352.362c0 4.457-.464 6.074-1.336 7.703a9.086 9.086 0 01-3.78 3.78c-1.63.872-3.246 1.336-7.703 1.336H98.819c-4.457 0-6.074-.464-7.703-1.336a9.086 9.086 0 01-3.78-3.78c-.872-1.63-1.336-3.246-1.336-7.703V73.819c0-4.457.464-6.074 1.336-7.703a9.086 9.086 0 013.78-3.78c1.63-.872 3.246-1.336 7.703-1.336z"
        ></path>
        <path
          id="c"
          d="M111.692 79h776.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 012.268 2.268c.523.978.801 1.948.801 4.623v326.616c0 2.675-.278 3.645-.801 4.623a5.452 5.452 0 01-2.268 2.268c-.978.523-1.948.801-4.623.801H111.692c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 01-2.268-2.268c-.523-.978-.801-1.948-.801-4.623V86.692c0-2.675.278-3.645.801-4.623a5.452 5.452 0 012.268-2.268c.978-.523 1.948-.801 4.623-.801z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
        <use fill="#9E917C" xlinkHref="#b"></use>
        <mask id="e" fill="#fff">
          <use xlinkHref="#c"></use>
        </mask>
        <use fill="#35262F" xlinkHref="#c"></use>
        <use fill="#000" filter="url(#d)" xlinkHref="#c"></use>
        <g strokeLinecap="round" mask="url(#e)">
          <path
            stroke="#FFF"
            strokeDasharray="4,10"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M153.5 330.352c23.396.701 70.985-.116 95.731-.116 24.747 0 60.193-.126 94.42-.505 34.227-.379 72.691-.052 105.092.322 32.4.375 111.028-2.664 131.302-1.584 20.274 1.08 52.215 1.702 74.015 1.702 21.8 0 68.553-1.198 85.39-.819 16.835.38 85.006.884 96.15.884"
            opacity="0.1"
          ></path>
          <path
            stroke="#FFF"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M148.96 405.25c.536-9.656-.09-29.295-.09-39.508 0-10.213-.095-24.841-.385-38.967-.29-14.125-.04-30 .247-43.37.286-13.372-2.037-45.822-1.212-54.189.826-8.367 1.302-21.549 1.302-30.545 0-8.997-.916-28.292-.626-35.24.29-6.948.675-35.082.675-39.681m687.31 197.97c17.884 11.16 17.551 7.335-.553 17"
            opacity="0.1"
          ></path>
          <path
            stroke="#1A7099"
            strokeWidth="3"
            d="M154 141c13.852 0 16.98 71.538 27.365 188.878 10.384 117.34 23.72 205.76 45.982 24.879 22.263-180.88 38.978-105.067 52.38-33.942 13.4 71.126 26.647 102.556 48.923 19.311 22.276-83.245 37.004-48.649 55.972-5.68 18.967 42.968 30.896 20.916 47.807-4.568 16.91-25.484 26.576-26.005 48.126-2.307 21.55 23.698 32.394 17.457 52.46 2.307 20.067-15.15 36.053-7.006 51.298 0 15.245 7.006 27.544 8.152 49.162 0 21.617-8.152 40.836-2.324 51.012 0 10.175 2.324 28.87 5.288 49.61 0s35.667 0 48.96 0h47.749"
            opacity="0.5"
          ></path>
        </g>
        <g fillRule="nonzero" mask="url(#e)">
          <path
            fill="#F6F6F6"
            d="M207.185 141.813c.105 0 3.904-.263 11.394-.791 7.491-.528 11.342-.844 11.553-.95 1.266 0 1.9.475 1.9 1.425 0 1.16-1.9 9.126-5.698 23.897-4.01 15.614-6.014 23.58-6.014 23.896 0 .211.37-.052 1.108-.79 6.436-5.698 13.294-8.547 20.573-8.547 5.698 0 10.287 1.425 13.769 4.273 3.481 2.849 5.275 7.016 5.38 12.502 0 5.381-2.004 13.716-6.013 25.005-4.01 11.289-6.014 18.041-6.014 20.257.105 1.477.37 2.48.791 3.007.422.527 1.214.791 2.374.791 2.954 0 5.697-1.583 8.23-4.748 2.532-3.165 4.589-7.49 6.171-12.977.317-1.16.633-1.846.95-2.057.316-.211 1.16-.317 2.532-.317 2.11 0 3.165.422 3.165 1.266 0 .106-.21.897-.633 2.374-1.688 6.225-4.378 11.342-8.07 15.351-3.588 4.537-7.861 6.805-12.82 6.805h-.791c-4.959 0-8.546-1.424-10.761-4.273-2.216-2.848-3.324-5.855-3.324-9.02 0-1.688 1.9-7.913 5.697-18.675 3.799-10.761 5.75-18.832 5.856-24.213 0-6.225-2.321-9.337-6.963-9.337h-.792c-8.757 0-16.353 5.17-22.789 15.51l-1.107 2.056-5.381 21.365c-3.376 13.716-5.328 21.207-5.856 22.473-1.371 2.848-3.692 4.273-6.963 4.273-1.477 0-2.743-.475-3.798-1.425-1.055-.95-1.635-1.899-1.741-2.848 0-1.477 3.85-17.514 11.553-48.11l11.71-46.844c0-1.372-.369-2.216-1.107-2.533-.739-.316-2.796-.58-6.172-.79h-3.323c-.633-.634-.95-1.056-.95-1.267 0-.21.106-1.213.317-3.007.527-2.004 1.213-3.007 2.057-3.007zm68.478 62.102c0-.854.475-2.51 1.424-4.965.95-2.456 2.269-5.232 3.957-8.329 1.688-3.096 4.009-5.766 6.963-8.008 2.954-2.242 6.067-3.417 9.337-3.524 4.853 0 8.493 1.335 10.92 4.005 2.427 2.669 3.64 5.819 3.64 9.45 0 1.921-1.794 7.9-5.38 17.938-3.588 10.036-5.382 17.564-5.382 22.583 0 4.59.739 7.794 2.216 9.61 1.477 1.815 3.693 2.776 6.647 2.882 2.954.107 5.75-.8 8.387-2.722 2.638-1.922 4.59-3.738 5.856-5.446l1.74-2.723c.212-.427 2.216-8.542 6.014-24.345 3.166-12.813 5.065-20.287 5.698-22.423.633-2.135 1.371-3.683 2.215-4.644 1.794-1.602 3.693-2.403 5.698-2.403 1.793 0 3.112.534 3.956 1.602.844 1.068 1.266 2.082 1.266 3.043l-12.027 50.932c-.106.534-.159 1.388-.159 2.563 0 2.669.37 4.43 1.108 5.285.739.854 1.846 1.335 3.323 1.442 2.322-.32 4.168-1.976 5.54-4.966 1.371-2.99 2.954-7.687 4.747-14.094.211-.854 1.266-1.281 3.165-1.281 2.005 0 3.007.48 3.007 1.441a28.084 28.084 0 00-.316 2.242c-.106.961-.58 2.67-1.425 5.126a84.808 84.808 0 01-2.69 6.887c-.95 2.135-2.268 4.164-3.956 6.086-1.689 1.922-3.588 3.257-5.698 4.004-.844.214-2.11.32-3.798.32-6.963 0-11.764-2.99-14.401-8.969-.211.107-.792.64-1.741 1.602-.95.96-1.9 1.762-2.849 2.402-.95.641-2.11 1.442-3.481 2.403a11.704 11.704 0 01-4.59 1.922 72.15 72.15 0 01-5.38.8c-4.643 0-8.757-.96-12.345-2.882-5.486-3.31-8.229-8.97-8.229-16.978 0-6.086 1.846-14.04 5.54-23.864 3.692-9.823 5.538-16.07 5.538-18.74v-2.242c0-.32-.21-.694-.633-1.12-.422-.428-1.002-.641-1.74-.641h-.634c-2.426 0-4.642 1.014-6.647 3.043-2.004 2.029-3.587 4.217-4.747 6.566-1.16 2.35-2.058 4.592-2.69 6.727-.634 2.136-1.056 3.31-1.267 3.524-.21.214-1.055.32-2.532.32h-2.215c-.633-.64-.95-1.12-.95-1.441zm87.067 0c.105-.64.264-1.495.475-2.563.21-1.068.844-3.096 1.899-6.086 1.055-2.99 2.11-5.499 3.165-7.528 1.055-2.028 2.743-4.004 5.064-5.926 2.321-1.922 4.642-2.83 6.963-2.723 2.322.107 4.59.481 6.805 1.122 2.216.64 3.799 1.601 4.748 2.883.95 1.28 1.794 2.455 2.532 3.523.739 1.068 1.16 2.082 1.266 3.043l.317 1.121c0 .214.053.32.158.32l1.741-1.761c6.33-6.834 13.768-10.25 22.314-10.25 1.794 0 3.43.106 4.906.32 1.477.213 2.849.587 4.115 1.12 1.266.535 2.268 1.069 3.007 1.603.738.533 1.53 1.174 2.374 1.922.844.747 1.371 1.441 1.582 2.082.211.64.633 1.334 1.266 2.082.633.747.844 1.388.633 1.922-.21.534-.053 1.014.475 1.441.527.427.633.801.316 1.121l1.267-1.601c6.646-8.008 14.506-12.013 23.58-12.013 5.697 0 10.287 1.442 13.768 4.325 3.482 2.883 5.275 7.1 5.38 12.653 0 5.445-2.004 13.88-6.013 25.306-4.009 11.425-6.014 18.258-6.014 20.5.106 1.495.37 2.51.792 3.044.422.534 1.213.8 2.374.8 2.954 0 5.697-1.601 8.229-4.804 2.532-3.204 4.59-7.581 6.172-13.134.316-1.174.633-1.868.95-2.082.316-.213 1.16-.32 2.532-.32 2.11 0 3.165.427 3.165 1.281 0 .107-.211.908-.633 2.402a50.663 50.663 0 01-3.482 9.13c-1.477 2.99-3.904 5.98-7.28 8.969-3.376 2.99-7.016 4.431-10.92 4.324-4.958 0-8.545-1.441-10.761-4.324-2.216-2.883-3.323-5.873-3.323-8.97 0-2.028 1.899-8.434 5.697-19.219 3.798-10.784 5.75-18.9 5.855-24.345 0-6.3-2.32-9.45-6.963-9.45h-.791c-9.074 0-16.723 5.393-22.947 16.177l-1.108 1.922-5.223 21.462c-3.481 13.988-5.486 21.515-6.014 22.583-1.371 2.883-3.64 4.325-6.805 4.325-1.371 0-2.479-.374-3.323-1.122-.844-.747-1.424-1.388-1.74-1.922-.317-.533-.476-1.067-.476-1.601 0-1.175 1.794-8.81 5.381-22.904l5.697-23.383c.317-1.602.475-3.63.475-6.087 0-6.3-2.32-9.45-6.963-9.45h-.791c-9.074 0-16.723 5.393-22.948 16.177l-1.107 1.922-5.223 21.462c-3.482 13.988-5.486 21.515-6.014 22.583-1.371 2.883-3.64 4.325-6.805 4.325-1.371 0-2.48-.32-3.323-.961-.844-.641-1.424-1.282-1.74-1.922-.317-.641-.423-1.175-.317-1.602 0-1.388 2.004-10.144 6.013-26.267 4.115-16.443 6.172-25.039 6.172-25.786.317-1.602.475-3.043.475-4.325 0-3.844-1.319-5.765-3.956-5.765-2.321 0-4.273 1.494-5.856 4.484-1.582 2.99-2.796 6.246-3.64 9.77-.844 3.524-1.477 5.446-1.899 5.766-.21.214-1.055.32-2.532.32h-2.216c-.633-.64-.95-1.12-.95-1.441z"
          ></path>
          <path
            fill="#F6F6F6"
            d="M495.948 203.832c.105-.319.211-.744.316-1.276.106-.533.37-1.703.792-3.512.422-1.809.95-3.458 1.582-4.948.633-1.49 1.425-3.245 2.374-5.267.95-2.022 2.005-3.618 3.165-4.788 1.16-1.17 2.532-2.341 4.115-3.512 1.583-1.17 3.323-1.649 5.222-1.436 7.913 0 12.978 3.405 15.193 10.215l1.583-1.437c6.541-5.852 12.766-8.778 18.674-8.778 6.858 0 12.239 2.5 16.142 7.502 3.904 5 5.856 11.066 5.856 18.195 0 11.492-4.01 22.08-12.028 31.762-8.018 9.683-17.092 14.578-27.22 14.684-2.321 0-4.378-.319-6.172-.957-1.16-.532-2.374-1.33-3.64-2.394s-2.268-1.969-3.007-2.714l-1.108-1.277c-.105.107-1.266 4.735-3.481 13.886-2.216 9.151-3.324 13.78-3.324 13.886 0 .639.422 1.011 1.266 1.118.844.106 2.796.266 5.856.479h3.956c.633.744.95 1.223.95 1.436 0 .213-.158 1.17-.475 2.873-.316 1.277-.633 2.075-.95 2.394-.316.32-1.002.532-2.057.639h-1.74c-.95 0-2.744-.054-5.381-.16-2.638-.106-5.909-.16-9.812-.16-7.386 0-12.08.107-14.085.32h-1.266c-.739-.745-1.108-1.33-1.108-1.756.211-2.873.897-4.735 2.057-5.586h3.166c3.587-.107 5.644-.745 6.172-1.916.316-.638 3.534-13.354 9.653-38.146 6.12-24.793 9.337-37.934 9.654-39.424.105-.532.158-1.277.158-2.235 0-4.362-1.319-6.544-3.956-6.544-2.321 0-4.273 1.49-5.856 4.47-1.582 2.979-2.796 6.224-3.64 9.736-.844 3.511-1.477 5.426-1.899 5.746-.21.212-1.055.319-2.532.319h-2.215c-.634-.639-.95-1.117-.95-1.437zm24.53 29.528c2.32 8.087 6.225 12.13 11.71 12.13 3.166 0 6.226-1.223 9.18-3.67 2.954-2.448 5.38-5.534 7.28-9.258 1.899-3.618 3.798-9.364 5.697-17.238 1.899-7.874 2.901-13.726 3.007-17.557v-.957c0-7.874-3.218-11.812-9.654-11.812-1.16 0-2.321.16-3.482.48a16.07 16.07 0 00-3.481 1.436 23.352 23.352 0 00-3.165 2.075 28.922 28.922 0 00-2.69 2.394l-2.375 2.394c-.738.745-1.318 1.49-1.74 2.235-.423.744-.845 1.276-1.267 1.596l-.474.638c0 .106-.159.851-.475 2.235-.317 1.383-.897 3.724-1.74 7.022a345.463 345.463 0 01-2.217 8.3c-2.743 11.28-4.114 17.132-4.114 17.557zm52.828 42.14c.21 0 .527.106.95.318.421.212 1.001.371 1.74.478.738.106 1.372.159 1.899.159 1.372 0 2.638-.69 3.798-2.07a13.184 13.184 0 002.532-4.617c1.055-2.865 2.849-10.985 5.381-24.358 2.532-13.373 4.959-26.11 7.28-38.21 2.32-12.099 3.481-18.202 3.481-18.308v-.477h-7.438c-4.958 0-7.596-.106-7.912-.319-.422-.318-.633-.849-.633-1.592l1.107-4.457c.211-.531.633-.796 1.266-.796s3.113-.054 7.438-.16c5.065 0 7.597-.053 7.597-.159 0-.212.475-2.866 1.424-7.96.95-5.095 1.583-8.173 1.9-9.234 3.903-17.512 11.605-26.269 23.105-26.269 3.903.213 7.121 1.38 9.653 3.503s3.799 4.935 3.799 8.438c0 3.82-1.108 6.58-3.324 8.278-2.215 1.698-4.431 2.6-6.647 2.707-4.642 0-6.963-2.23-6.963-6.687 0-2.016.58-3.768 1.74-5.254 1.161-1.486 2.427-2.6 3.799-3.343l1.424-.796c-1.688-.637-3.27-.955-4.747-.955-1.266 0-2.48.53-3.64 1.592-1.16 1.061-1.952 2.547-2.374 4.458-.739 3.078-1.583 7.217-2.532 12.418a647.95 647.95 0 01-2.532 13.214c-.739 3.608-1.108 5.519-1.108 5.73 0 .213 2.901.32 8.704.32 4.748 0 7.49.052 8.23.159.738.106 1.318.424 1.74.955.106.424 0 1.326-.316 2.706-.317 1.38-.58 2.23-.792 2.548-.21.53-.685.796-1.424.796-.738 0-3.587.053-8.546.159h-8.862l-3.64 19.423c-5.064 26.321-8.599 42.773-10.603 49.353-2.849 9.022-6.542 15.708-11.078 20.06-3.904 3.396-7.755 5.094-11.553 5.094-3.376 0-6.436-1.008-9.179-3.024-2.743-2.017-4.115-4.883-4.115-8.598 0-3.927 1.108-6.792 3.324-8.597 2.215-1.804 4.431-2.706 6.647-2.706 4.642 0 6.963 2.229 6.963 6.687 0 2.016-.58 3.767-1.74 5.253-1.161 1.486-2.428 2.6-3.8 3.344l-1.423.796z"
          ></path>
          <path
            fill="#1A7099"
            d="M656.549 209.908c0-7.319.527-14.267 1.582-20.844 1.055-6.577 2.269-12.252 3.64-17.025 1.372-4.774 3.324-9.441 5.856-14.003 2.532-4.561 4.536-8.115 6.013-10.66 1.477-2.546 3.693-5.304 6.647-8.275 2.954-2.97 4.695-4.773 5.223-5.41.527-.636 1.846-1.75 3.956-3.341h2.69c1.478 0 2.216.477 2.216 1.432 0 .318-.897 1.432-2.69 3.342-1.794 1.909-3.957 4.72-6.489 8.433-2.532 3.712-5.117 8.274-7.754 13.684-2.638 5.41-4.854 12.73-6.647 21.958-1.794 9.229-2.69 19.465-2.69 30.71 0 11.244.896 21.427 2.69 30.55 1.793 9.123 3.956 16.495 6.488 22.117 2.532 5.622 5.117 10.184 7.755 13.684s4.853 6.312 6.647 8.433c1.793 2.122 2.69 3.236 2.69 3.342 0 .955-.791 1.432-2.374 1.432h-2.532l-4.431-3.819c-9.918-9.016-17.145-20.26-21.681-33.733-4.537-13.472-6.805-27.474-6.805-42.007zm50.801-21.47c-.74-.745-1.109-1.277-1.109-1.596 0-.426.159-1.277.475-2.554.317-1.277.58-2.021.791-2.234.211-.532.686-.798 1.425-.798.738 0 3.429-.053 8.07-.16h8.388l3.007-12.769c.317-1.17.686-2.713 1.108-4.628.422-1.916.791-3.299 1.108-4.15.316-.851.633-1.915.95-3.192.316-1.277.738-2.182 1.265-2.714a15.168 15.168 0 001.583-1.915c.528-.745 1.266-1.224 2.216-1.436a12.98 12.98 0 012.848-.32c1.9.107 3.218.692 3.957 1.756.738 1.064 1.107 2.075 1.107 3.033 0 .744-.474 3.245-1.424 7.501a244.38 244.38 0 01-3.165 12.61l-1.583 5.905c0 .213 2.638.32 7.913.32h8.071c.739.744 1.108 1.33 1.108 1.755 0 2.34-.686 4.203-2.057 5.586h-16.934l-5.697 23.144c-4.115 17.025-6.172 26.176-6.172 27.452 0 4.47 1.424 6.704 4.273 6.704 3.693 0 7.28-1.809 10.762-5.427 3.481-3.618 6.277-8.087 8.387-13.407.211-.638.475-1.01.791-1.117.317-.107 1.108-.213 2.374-.32h.633c1.583 0 2.374.426 2.374 1.277 0 .32-.158.958-.475 1.916-.527 1.702-1.477 3.724-2.848 6.065-1.372 2.34-3.165 4.841-5.381 7.502-2.216 2.66-4.906 4.894-8.071 6.703-3.165 1.81-6.383 2.714-9.654 2.714-3.165 0-6.172-.798-9.02-2.395-2.849-1.596-4.906-4.362-6.172-8.3-.211-.85-.317-2.287-.317-4.309v-2.873l5.54-22.345c3.692-15.003 5.59-22.558 5.696-22.665 0-.212-2.69-.319-8.07-.319h-8.072zm62.51-57.928l.634-.16h3.482l4.43 3.819c9.918 9.016 17.145 20.26 21.682 33.733 4.536 13.472 6.805 27.474 6.805 42.006 0 7.214-.528 14.162-1.583 20.845-1.055 6.683-2.268 12.358-3.64 17.025-1.371 4.668-3.323 9.335-5.855 14.003-2.532 4.667-4.537 8.22-6.014 10.66-1.477 2.44-3.64 5.145-6.489 8.115-2.848 2.97-4.536 4.72-5.064 5.251-.527.53-1.74 1.538-3.64 3.023l-.633.637h-3.639c-.317 0-.58-.16-.792-.477-.21-.319-.37-.796-.475-1.432.106-.107.686-.796 1.741-2.069 16.353-17.079 24.53-42.272 24.53-75.58 0-33.309-8.177-58.503-24.53-75.581-1.055-1.273-1.635-1.963-1.74-2.069 0-.848.263-1.432.79-1.75z"
          ></path>
        </g>
      </g>
    </svg>
  );
}
