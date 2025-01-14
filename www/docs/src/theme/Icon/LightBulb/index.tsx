import React from "react"
import { IconProps } from ".."

const IconLightBulb: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0005 14.5882V10.5728M10.0005 10.5728C10.3874 10.5731 10.7729 10.5245 11.1477 10.4282M10.0005 10.5728C9.61347 10.5731 9.228 10.5245 8.85318 10.4282M11.7214 16.1478C10.5843 16.3637 9.41666 16.3637 8.27954 16.1478M11.1477 17.9704C10.385 18.0503 9.61595 18.0503 8.85318 17.9704M11.7214 14.5882V14.4414C11.7214 13.6895 12.2247 13.0471 12.8748 12.67C13.967 12.0375 14.8201 11.0624 15.302 9.89591C15.7838 8.72937 15.8675 7.43648 15.54 6.21757C15.2126 4.99865 14.4923 3.92176 13.4907 3.15375C12.4891 2.38574 11.2622 1.96948 10.0001 1.96948C8.73794 1.96948 7.51104 2.38574 6.50947 3.15375C5.50789 3.92176 4.78757 4.99865 4.46011 6.21757C4.13265 7.43648 4.21633 8.72937 4.69818 9.89591C5.18003 11.0624 6.03316 12.0375 7.12537 12.67C7.7755 13.0471 8.27954 13.6895 8.27954 14.4414V14.5882"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconLightBulb
