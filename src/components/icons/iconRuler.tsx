import React, { JSX } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  style?: { [key: string]: string | number };
  size?: number;
  color?: string;
}

export function IconRuler(props: IProps): JSX.Element {
  const color = props.color || "#3C5063";
  const size = props.size || 27;
  const width = size;
  const height = Math.round((size * 19) / 27);
  return (
    <Svg style={props.style} className="inline-block" width={width} height={height} viewBox="0 0 27 19" fill="none">
      <Path
        d="M25.9957 10.2884C19.4622 10.8111 13.1155 11.0736 8.36644 10.4761C5.00189 10.0537 2.4175 9.19382 1.08354 7.68108V10.2116C1.08354 10.4399 1.08354 10.8133 1.07036 11.1802C1.0308 13.2605 0.997838 15.0208 2.95371 16.4588V15.4667C2.94915 15.3997 2.95882 15.3325 2.9821 15.2692C3.00538 15.206 3.04179 15.148 3.08907 15.099C3.13635 15.05 3.19349 15.0109 3.25697 14.9841C3.32044 14.9574 3.38888 14.9436 3.45807 14.9436C3.52725 14.9436 3.5957 14.9574 3.65917 14.9841C3.72264 15.0109 3.77978 15.05 3.82706 15.099C3.87434 15.148 3.91075 15.206 3.93403 15.2692C3.95732 15.3325 3.96698 15.3997 3.96242 15.4667V17.0691C4.45522 17.3003 4.97054 17.4833 5.50075 17.6153C5.63041 17.6473 5.76007 17.6793 5.89412 17.707V13.6552C5.88956 13.5882 5.89922 13.521 5.9225 13.4578C5.94579 13.3945 5.9822 13.3366 6.02948 13.2875C6.07676 13.2385 6.1339 13.1994 6.19737 13.1727C6.26084 13.146 6.32929 13.1322 6.39847 13.1322C6.46766 13.1322 6.5361 13.146 6.59957 13.1727C6.66304 13.1994 6.72019 13.2385 6.76747 13.2875C6.81475 13.3366 6.85116 13.3945 6.87444 13.4578C6.89772 13.521 6.90738 13.5882 6.90282 13.6552V17.8798C7.5028 17.9571 8.10648 18.0041 8.71146 18.0207V15.4667C8.7069 15.3997 8.71656 15.3325 8.73984 15.2692C8.76313 15.206 8.79954 15.148 8.84682 15.099C8.8941 15.05 8.95124 15.0109 9.01471 14.9841C9.07818 14.9574 9.14663 14.9436 9.21581 14.9436C9.285 14.9436 9.35344 14.9574 9.41691 14.9841C9.48038 15.0109 9.53753 15.05 9.58481 15.099C9.63209 15.148 9.6685 15.206 9.69178 15.2692C9.71506 15.3325 9.72472 15.3997 9.72017 15.4667V18.0271H11.5288V13.6552C11.5242 13.5882 11.5339 13.521 11.5572 13.4578C11.5805 13.3945 11.6169 13.3366 11.6642 13.2875C11.7114 13.2385 11.7686 13.1994 11.8321 13.1727C11.8955 13.146 11.964 13.1322 12.0332 13.1322C12.1023 13.1322 12.1708 13.146 12.2343 13.1727C12.2977 13.1994 12.3549 13.2385 12.4022 13.2875C12.4494 13.3366 12.4858 13.3945 12.5091 13.4578C12.5324 13.521 12.5421 13.5882 12.5375 13.6552V18.0164H14.3483V15.2043C14.3438 15.1372 14.3534 15.07 14.3767 15.0068C14.4 14.9435 14.4364 14.8856 14.4837 14.8366C14.531 14.7875 14.5881 14.7484 14.6516 14.7217C14.7151 14.695 14.7835 14.6812 14.8527 14.6812C14.9219 14.6812 14.9903 14.695 15.0538 14.7217C15.1173 14.7484 15.1744 14.7875 15.2217 14.8366C15.269 14.8856 15.3054 14.9435 15.3287 15.0068C15.3519 15.07 15.3616 15.1372 15.357 15.2043V18.0164H17.1657V13.6552C17.1611 13.5882 17.1708 13.521 17.1941 13.4578C17.2173 13.3945 17.2538 13.3366 17.301 13.2875C17.3483 13.2385 17.4055 13.1994 17.4689 13.1727C17.5324 13.146 17.6008 13.1322 17.67 13.1322C17.7392 13.1322 17.8077 13.146 17.8711 13.1727C17.9346 13.1994 17.9917 13.2385 18.039 13.2875C18.0863 13.3366 18.1227 13.3945 18.146 13.4578C18.1693 13.521 18.1789 13.5882 18.1744 13.6552V18.0164H19.9984V15.3323C20.0069 15.208 20.0637 15.0915 20.1573 15.0064C20.251 14.9213 20.3745 14.8739 20.5028 14.8739C20.631 14.8739 20.7545 14.9213 20.8482 15.0064C20.9418 15.0915 20.9987 15.208 21.0071 15.3323V18.0164H22.8179C22.8179 18.0164 22.8179 17.9972 22.8179 17.9887V13.6552C22.8134 13.5882 22.823 13.521 22.8463 13.4578C22.8696 13.3945 22.906 13.3366 22.9533 13.2875C23.0006 13.2385 23.0577 13.1994 23.1212 13.1727C23.1847 13.146 23.2531 13.1322 23.3223 13.1322C23.3915 13.1322 23.4599 13.146 23.5234 13.1727C23.5869 13.1994 23.644 13.2385 23.6913 13.2875C23.7386 13.3366 23.775 13.3945 23.7983 13.4578C23.8215 13.521 23.8312 13.5882 23.8266 13.6552V18.0164H26.0023V10.2884H25.9957ZM3.24819 17.8009C3.227 17.7915 3.20645 17.7808 3.18666 17.7689C2.90125 17.6165 2.62733 17.4447 2.36695 17.2547C-0.0152617 15.5051 0.0220977 13.523 0.06605 11.1653C0.06605 10.905 0.06605 10.6383 0.06605 10.2116V5.76081C0.020252 5.55039 -0.00185395 5.33577 0.000121573 5.12072C0.000121573 3.65278 1.15167 2.347 3.01305 1.421C4.77993 0.544076 7.2061 0 9.874 0C12.5419 0 15.0933 0.550477 16.9437 1.4402C18.7941 2.32993 19.9984 3.57383 20.0819 4.97563C20.0819 4.97563 20.0819 4.95856 20.0819 4.94789C20.1676 5.73521 20.0819 8.09287 20.0819 9.69949C22.1477 9.59708 24.2837 9.44773 26.4352 9.27277H26.4967C26.63 9.27333 26.7577 9.32499 26.852 9.4165C26.9462 9.50801 26.9994 9.63196 27 9.76137V18.5093C27 18.639 26.9471 18.7635 26.8527 18.8555C26.7584 18.9475 26.6304 18.9994 26.4967 19H9.05868C7.77918 18.9993 6.50433 18.8503 5.26121 18.5562C4.56185 18.3854 3.88605 18.1339 3.24819 17.8073V17.8009ZM10.0124 2.70331C12.7001 2.70331 15.1087 3.8192 15.1087 5.26367C15.1087 6.70814 12.6913 7.76642 10.0124 7.76642C7.33356 7.76642 5.14473 6.69961 5.14473 5.26367C5.14473 3.82774 7.32477 2.70331 10.0124 2.70331ZM16.4053 2.29792C14.7109 1.49354 12.3749 0.981471 9.874 0.981471C7.37311 0.981471 5.17111 1.47434 3.56465 2.27232C2.05709 3.02336 1.1231 4.03043 1.1231 5.12072C1.1231 6.211 2.05709 7.22021 3.56465 7.96912C5.17111 8.7671 7.39949 9.2493 9.874 9.2493C12.3485 9.2493 14.7087 8.74576 16.4053 7.93285C17.97 7.19248 18.9633 6.18753 18.9633 5.12072C18.9633 4.0539 17.97 3.04896 16.4053 2.29792Z"
        fill={color}
      />
    </Svg>
  );
}
