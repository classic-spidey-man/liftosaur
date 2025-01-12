import { Svg, Path } from "react-native-svg";

interface IIconMusclesDProps {
  size?: number;
  color?: string;
  className?: string;
}

export function IconMusclesD(props: IIconMusclesDProps): JSX.Element {
  const size = props.size || 27;
  const color = props.color || "#3C5063";
  return (
    <Svg className={props.className} width={size} height={size} viewBox="0 0 27 27" fill="none">
      <Path
        d="M13.575 4.278C14.389 4.278 15.1003 4.43933 15.709 4.762C16.3177 5.08467 16.787 5.53933 17.117 6.126C17.4543 6.70533 17.623 7.37633 17.623 8.139C17.623 8.89433 17.4543 9.56533 17.117 10.152C16.787 10.7387 16.314 11.1933 15.698 11.516C15.0893 11.8387 14.3817 12 13.575 12H10.682V4.278H13.575ZM13.454 10.372C14.1653 10.372 14.719 10.1777 15.115 9.789C15.511 9.40033 15.709 8.85033 15.709 8.139C15.709 7.42767 15.511 6.874 15.115 6.478C14.719 6.082 14.1653 5.884 13.454 5.884H12.563V10.372H13.454Z"
        fill={color}
      />
      <Path
        d="M10.4204 0.000104166C9.60707 0.135104 8.65823 0.675102 7.70938 1.3501C4.86284 1.6201 1.10134 3.51853 1.10134 7.97351C1.10134 9.05351 1.09287 9.59351 1.22842 9.9985C0.686219 10.6735 0 12.0235 0 14.7235C0 15.3985 0.389705 16.0482 0.931903 16.4532L4.19356 18.225C4.46466 18.36 4.88825 18.4782 5.2949 18.4782C5.43045 18.4782 5.84557 17.8032 5.84557 17.8032V18.9C5.84557 19.305 5.67614 19.5582 5.67614 19.8282C5.54059 20.3682 5.54906 20.79 5.54906 21.6C5.54906 23.76 7.87882 25.6416 9.23431 26.4516C9.64096 26.8566 10.0137 27 10.4204 27H16.6895C17.0962 27 17.4689 26.8481 17.8756 26.5781C19.2311 25.6331 21.4338 23.7516 21.4338 21.7266C21.4338 20.9166 21.3999 20.5369 21.2643 19.9969C21.2643 19.7269 21.1373 19.4316 21.1373 19.0266V17.9719C21.1373 17.9719 21.5524 18.6469 21.6879 18.6469C22.0946 18.6469 22.3826 18.4866 22.7893 18.3516L26.0086 16.6219C26.6863 16.2169 26.9828 15.525 26.9828 14.85C27.1184 12.0151 26.4237 10.6735 25.8815 9.9985C25.8815 9.59351 26.0086 9.05351 26.0086 7.97351C26.0086 3.51853 22.2471 1.6201 19.4005 1.3501C18.4517 0.675102 17.5028 0.261666 16.6895 0.126666H16.2659H10.844C10.7084 -0.00833331 10.5559 0.000104166 10.4204 0.000104166ZM10.7169 2.15166H16.1389C16.6811 2.28666 17.3673 2.58197 18.045 3.12197L18.4263 3.37509H18.9769C19.5191 3.37509 23.7212 3.92353 23.7212 7.97351C23.7212 8.78351 23.7296 9.29819 23.5941 9.70319L23.467 10.3782L23.8482 10.9266C24.1193 11.3316 24.6531 12.2935 24.6531 14.7235L22.4927 16.2C21.0017 16.065 20.6035 14.0316 20.3324 13.6266C20.0613 16.4616 19.2311 17.8032 19.2311 17.8032V19.3219C19.2311 19.7269 19.4005 19.98 19.4005 20.25C19.4005 20.79 19.5276 21.0516 19.5276 21.7266C19.5276 22.5366 18.4432 23.895 16.8166 24.975H10.5898C8.96321 23.895 7.87882 22.5366 7.87882 21.7266C7.87882 21.0516 7.87034 20.79 8.00589 20.25C8.00589 19.98 8.13297 19.7269 8.13297 19.3219V17.8032C8.13297 17.8032 6.90455 16.3266 6.90455 13.6266C6.09126 14.9766 4.74423 16.2 4.74423 16.2L2.16032 14.85C2.16032 12.5551 2.8296 11.4919 2.96515 11.2219L3.38874 10.6735L3.26166 9.70319C3.26166 9.29819 3.13458 8.64851 3.13458 7.97351C3.13458 3.92353 7.47217 3.37509 7.87882 3.37509H8.38713L8.81072 3.12197C9.48847 2.58197 10.1747 2.28666 10.7169 2.15166ZM9.74262 13.5001C9.06487 13.5001 8.81072 14.3185 8.81072 14.7235C8.81072 15.1285 9.21737 15.6769 9.48847 15.9469C9.75956 16.2169 12.3181 16.5882 13.1314 15.7782C13.4025 15.5082 13.3008 14.8332 13.3008 14.4282C13.1652 13.6182 12.0724 13.5001 12.0724 13.5001H9.74262ZM15.0375 13.5001C15.0375 13.5001 13.9447 13.6182 13.8091 14.4282C13.8091 14.8332 13.7074 15.5082 13.9785 15.7782C14.7918 16.5882 17.3503 16.2169 17.6214 15.9469C17.8925 15.6769 18.2992 15.1285 18.2992 14.7235C18.2992 14.3185 18.045 13.5001 17.3673 13.5001H15.0375ZM10.844 16.6641C10.6406 16.6704 10.4288 16.7147 10.2933 16.7485C9.61554 16.8835 9.36139 17.5669 9.36139 17.9719C9.22584 18.2419 9.64096 18.63 9.91206 18.9C10.1832 19.17 12.4536 19.71 13.1314 18.9C13.4025 18.63 13.3008 18.0816 13.3008 17.6766C13.1652 16.8666 12.1995 16.7485 12.1995 16.7485C12.1995 16.7485 11.4539 16.6451 10.844 16.6641ZM16.2659 16.6641C15.656 16.6451 14.9104 16.7485 14.9104 16.7485C14.9104 16.7485 13.9447 16.8666 13.8091 17.6766C13.8091 18.0816 13.7074 18.63 13.9785 18.9C14.6563 19.71 16.9267 19.17 17.1978 18.9C17.4689 18.63 17.8841 18.2419 17.7485 17.9719C17.7485 17.5669 17.4944 16.8835 16.8166 16.7485C16.6811 16.7147 16.4693 16.6704 16.2659 16.6641ZM11.0134 19.786C10.8037 19.7923 10.5898 19.7944 10.4204 19.8282C9.87817 19.9632 9.74262 20.385 9.74262 20.925C9.74262 21.735 10.4458 22.545 10.7169 22.95C10.988 23.355 12.5892 24.1819 13.1314 23.3719C13.4025 23.1019 13.3008 21.7181 13.3008 21.1782C13.3008 19.9632 12.3265 19.8282 12.3265 19.8282C12.3265 19.8282 11.6424 19.767 11.0134 19.786ZM15.4611 19.786C15.0714 19.8028 14.7834 19.8282 14.7834 19.8282C14.7834 19.8282 13.8091 19.9632 13.8091 21.1782C13.8091 21.7181 13.7074 23.1019 13.9785 23.3719C14.5207 24.1819 16.1219 23.355 16.393 22.95C16.6641 22.545 17.3673 21.735 17.3673 20.925C17.3673 20.385 17.2317 19.9632 16.6895 19.8282C16.3507 19.7607 15.8508 19.7691 15.4611 19.786Z"
        fill={color}
      />
    </Svg>
  );
}
