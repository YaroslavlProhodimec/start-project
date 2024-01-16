
type TypeProps = {
    className?: string;
}

const Preloader = ({className}: TypeProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="40"
            height="40"
            version="1.0"
        >
            <g>
                <path
                    fill="transparent"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    d="M2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2c-2.325 0-4.546.44-6.586 1.243"
                />
                <animateTransform
                    attributeName="transform"
                    dur="1800ms"
                    from="0 20 20"
                    repeatCount="indefinite"
                    to="360 20 20"
                    type="rotate"
                />
            </g>
        </svg>
    );
};

export {Preloader};
