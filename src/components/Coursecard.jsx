/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

import PropTypes from "prop-types"

const Coursecard = ({
    content,
    courseLink,
    name,
    courseN
}) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            {/* <div className="gap-1 mb-3 w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span 
                        className="material-symbols-rounded"
                        aria-hidden="true"
                        >
                            arrow_outward
                        </span>
                </div> */}
            <div className="flex items-center gap-2 mt-auto">
                <div className="gap-1 mb-3 w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                        <span 
                            className="material-symbols-rounded"
                            aria-hidden="true"
                            >
                                arrow_outward
                            </span>
                    </div>
                <div>
                    <p>{name}</p>
                    <p className="text-xs text-zinc-400 tracking-wider">
                        {courseN}
                    </p>
                </div>
            </div>
            <p className="text-zinc-400 mb-8">
                {content}
            </p>
            <a 
                href={courseLink}
                target="_blank"
                className="absolute inset-0"
            ></a>
        </div>
    )
}

Coursecard.propType = {
    content: PropTypes.string.isRequired,
    courseLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    courseN: PropTypes.string.isRequired
}

export default Coursecard