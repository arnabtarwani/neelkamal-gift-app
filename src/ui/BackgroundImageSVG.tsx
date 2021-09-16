import * as React from "react"
import Svg, { G, Path, Use, Defs, Mask, Symbol } from "react-native-svg"

function BackgroundImageSVG(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={1440}
            height={560}
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
            {...props}
        >
            <G mask='url("#a")' fill="none">
                <Path fill="#0e2a47" d="M0 0H1440V560H0z" />
                <Use xlinkHref="#b" />
                <Use xlinkHref="#b" x={720} />
            </G>
            <Defs>
                <Mask id="a">
                    <Path fill="#fff" d="M0 0H1440V560H0z" />
                </Mask>
                <Path d="M-1 0a1 1 0 102 0 1 1 0 10-2 0z" id="g" />
                <Path d="M-3 0a3 3 0 106 0 3 3 0 10-6 0z" id="c" />
                <Path d="M-5 0A5 5 0 105 0 5 5 0 10-5 0z" id="d" />
                <Path d="M2-2l-4 4z" id="f" />
                <Path d="M6-6L-6 6z" id="e" />
                <Path d="M30-30l-60 60z" id="h" />
            </Defs>
            <Symbol id="b">
                <Use xlinkHref="#c" x={30} y={30} stroke="#1c538e" />
                <Use xlinkHref="#d" x={30} y={90} stroke="#1c538e" />
                <Use xlinkHref="#e" x={30} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={30} y={210} stroke="#1c538e" />
                <Use xlinkHref="#d" x={30} y={270} stroke="#1c538e" />
                <Use xlinkHref="#e" x={30} y={330} stroke="#1c538e" />
                <Use xlinkHref="#e" x={30} y={390} stroke="#1c538e" />
                <Use xlinkHref="#e" x={30} y={450} stroke="#1c538e" />
                <Use xlinkHref="#e" x={30} y={510} stroke="#1c538e" />
                <Use xlinkHref="#c" x={30} y={570} stroke="#1c538e" />
                <Use xlinkHref="#f" x={90} y={30} stroke="#1c538e" />
                <Use xlinkHref="#f" x={90} y={90} stroke="#1c538e" />
                <Use xlinkHref="#e" x={90} y={150} stroke="#1c538e" />
                <Use xlinkHref="#c" x={90} y={210} stroke="#1c538e" />
                <Use xlinkHref="#g" x={90} y={270} stroke="#1c538e" />
                <Use xlinkHref="#d" x={90} y={330} stroke="#1c538e" />
                <Use xlinkHref="#e" x={90} y={390} stroke="#1c538e" />
                <Use xlinkHref="#f" x={90} y={450} stroke="#1c538e" />
                <Use xlinkHref="#f" x={90} y={510} stroke="#1c538e" />
                <Use xlinkHref="#f" x={90} y={570} stroke="#1c538e" />
                <Use xlinkHref="#f" x={150} y={30} stroke="#1c538e" />
                <Use xlinkHref="#g" x={150} y={90} stroke="#1c538e" />
                <Use xlinkHref="#f" x={150} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={150} y={210} stroke="#1c538e" />
                <Use xlinkHref="#d" x={150} y={270} stroke="#1c538e" />
                <Use xlinkHref="#c" x={150} y={330} stroke="#1c538e" />
                <Use xlinkHref="#d" x={150} y={390} stroke="#1c538e" />
                <Use xlinkHref="#d" x={150} y={450} stroke="#1c538e" />
                <Use xlinkHref="#d" x={150} y={510} stroke="#1c538e" />
                <Use xlinkHref="#f" x={150} y={570} stroke="#1c538e" />
                <Use xlinkHref="#c" x={210} y={30} stroke="#1c538e" />
                <Use xlinkHref="#g" x={210} y={90} stroke="#1c538e" />
                <Use xlinkHref="#c" x={210} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={210} y={210} stroke="#1c538e" />
                <Use xlinkHref="#d" x={210} y={270} stroke="#1c538e" />
                <Use xlinkHref="#d" x={210} y={330} stroke="#1c538e" />
                <Use xlinkHref="#e" x={210} y={390} stroke="#1c538e" />
                <Use xlinkHref="#e" x={210} y={450} stroke="#1c538e" />
                <Use xlinkHref="#g" x={210} y={510} stroke="#1c538e" />
                <Use xlinkHref="#f" x={210} y={570} stroke="#1c538e" />
                <Use xlinkHref="#e" x={270} y={30} stroke="#1c538e" />
                <Use xlinkHref="#e" x={270} y={90} stroke="#1c538e" />
                <Use xlinkHref="#g" x={270} y={150} stroke="#1c538e" />
                <Use xlinkHref="#f" x={270} y={210} stroke="#1c538e" />
                <Use xlinkHref="#d" x={270} y={270} stroke="#1c538e" />
                <Use xlinkHref="#h" x={270} y={330} stroke="#1c538e" strokeWidth={3} />
                <Use xlinkHref="#e" x={270} y={390} stroke="#1c538e" />
                <Use xlinkHref="#e" x={270} y={450} stroke="#1c538e" />
                <Use xlinkHref="#e" x={270} y={510} stroke="#1c538e" />
                <Use xlinkHref="#d" x={270} y={570} stroke="#1c538e" />
                <Use xlinkHref="#e" x={330} y={30} stroke="#1c538e" />
                <Use xlinkHref="#e" x={330} y={90} stroke="#1c538e" />
                <Use xlinkHref="#d" x={330} y={150} stroke="#1c538e" />
                <Use xlinkHref="#g" x={330} y={210} stroke="#1c538e" />
                <Use xlinkHref="#e" x={330} y={270} stroke="#1c538e" />
                <Use xlinkHref="#e" x={330} y={330} stroke="#1c538e" />
                <Use xlinkHref="#d" x={330} y={390} stroke="#1c538e" />
                <Use xlinkHref="#f" x={330} y={450} stroke="#1c538e" />
                <Use xlinkHref="#c" x={330} y={510} stroke="#1c538e" />
                <Use xlinkHref="#d" x={330} y={570} stroke="#1c538e" />
                <Use xlinkHref="#d" x={390} y={30} stroke="#1c538e" />
                <Use xlinkHref="#e" x={390} y={90} stroke="#1c538e" />
                <Use xlinkHref="#d" x={390} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={390} y={210} stroke="#1c538e" />
                <Use xlinkHref="#f" x={390} y={270} stroke="#1c538e" />
                <Use xlinkHref="#g" x={390} y={330} stroke="#1c538e" />
                <Use xlinkHref="#f" x={390} y={390} stroke="#1c538e" />
                <Use xlinkHref="#d" x={390} y={450} stroke="#1c538e" />
                <Use xlinkHref="#d" x={390} y={510} stroke="#1c538e" />
                <Use xlinkHref="#d" x={390} y={570} stroke="#1c538e" />
                <Use xlinkHref="#d" x={450} y={30} stroke="#1c538e" />
                <Use xlinkHref="#e" x={450} y={90} stroke="#1c538e" />
                <Use xlinkHref="#f" x={450} y={150} stroke="#1c538e" />
                <Use xlinkHref="#g" x={450} y={210} stroke="#1c538e" />
                <Use xlinkHref="#c" x={450} y={270} stroke="#1c538e" />
                <Use xlinkHref="#h" x={450} y={330} stroke="#1c538e" strokeWidth={3} />
                <Use xlinkHref="#e" x={450} y={390} stroke="#1c538e" />
                <Use xlinkHref="#e" x={450} y={450} stroke="#1c538e" />
                <Use xlinkHref="#e" x={450} y={510} stroke="#1c538e" />
                <Use xlinkHref="#d" x={450} y={570} stroke="#1c538e" />
                <Use xlinkHref="#d" x={510} y={30} stroke="#1c538e" />
                <Use xlinkHref="#g" x={510} y={90} stroke="#1c538e" />
                <Use xlinkHref="#c" x={510} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={510} y={210} stroke="#1c538e" />
                <Use xlinkHref="#e" x={510} y={270} stroke="#1c538e" />
                <Use xlinkHref="#e" x={510} y={330} stroke="#1c538e" />
                <Use xlinkHref="#d" x={510} y={390} stroke="#1c538e" />
                <Use xlinkHref="#g" x={510} y={450} stroke="#1c538e" />
                <Use xlinkHref="#d" x={510} y={510} stroke="#1c538e" />
                <Use xlinkHref="#e" x={510} y={570} stroke="#1c538e" />
                <Use xlinkHref="#d" x={570} y={30} stroke="#1c538e" />
                <Use xlinkHref="#f" x={570} y={90} stroke="#1c538e" />
                <Use xlinkHref="#e" x={570} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={570} y={210} stroke="#1c538e" />
                <Use xlinkHref="#d" x={570} y={270} stroke="#1c538e" />
                <Use xlinkHref="#h" x={570} y={330} stroke="#1c538e" strokeWidth={3} />
                <Use xlinkHref="#f" x={570} y={390} stroke="#1c538e" />
                <Use xlinkHref="#e" x={570} y={450} stroke="#1c538e" />
                <Use xlinkHref="#d" x={570} y={510} stroke="#1c538e" />
                <Use xlinkHref="#c" x={570} y={570} stroke="#1c538e" />
                <Use xlinkHref="#d" x={630} y={30} stroke="#1c538e" />
                <Use xlinkHref="#e" x={630} y={90} stroke="#1c538e" />
                <Use xlinkHref="#e" x={630} y={150} stroke="#1c538e" />
                <Use xlinkHref="#d" x={630} y={210} stroke="#1c538e" />
                <Use xlinkHref="#f" x={630} y={270} stroke="#1c538e" />
                <Use xlinkHref="#f" x={630} y={330} stroke="#1c538e" />
                <Use xlinkHref="#e" x={630} y={390} stroke="#1c538e" />
                <Use xlinkHref="#d" x={630} y={450} stroke="#1c538e" />
                <Use xlinkHref="#c" x={630} y={510} stroke="#1c538e" />
                <Use xlinkHref="#e" x={630} y={570} stroke="#1c538e" />
                <Use xlinkHref="#e" x={690} y={30} stroke="#1c538e" />
                <Use xlinkHref="#d" x={690} y={90} stroke="#1c538e" />
                <Use xlinkHref="#c" x={690} y={150} stroke="#1c538e" />
                <Use xlinkHref="#e" x={690} y={210} stroke="#1c538e" />
                <Use xlinkHref="#d" x={690} y={270} stroke="#1c538e" />
                <Use xlinkHref="#e" x={690} y={330} stroke="#1c538e" />
                <Use xlinkHref="#d" x={690} y={390} stroke="#1c538e" />
                <Use xlinkHref="#g" x={690} y={450} stroke="#1c538e" />
                <Use xlinkHref="#d" x={690} y={510} stroke="#1c538e" />
                <Use xlinkHref="#e" x={690} y={570} stroke="#1c538e" />
            </Symbol>
        </Svg>
    )
}

export default BackgroundImageSVG
