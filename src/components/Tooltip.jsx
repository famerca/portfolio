import { React, Nextjs, Sanity, Php, Js, Tailwind, Aws, Mysql, Nodejs, Express, Playwright, Assembly } from "./CustomIcons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const renderTooltip = (tooltipText) => (props) => (
    <Tooltip id={`tooltip-${tooltipText}`} className="light-tooltip" {...props}>
        {tooltipText}
    </Tooltip>
);

const reactElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('React')}
                >
                    <span>
                        <React h={24} w={24} />
                    </span>
                </OverlayTrigger>

const nextjsElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Next.js')}
                >
                    <span>
                        <Nextjs h={24} w={24} />
                    </span>
                </OverlayTrigger>
const sanityElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Sanity')}
                >
                    <span>
                        <Sanity h={24} w={24} />
                    </span>
                </OverlayTrigger>

const jsElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('JavaScript')}
                >
                    <span>
                        <Js h={24} w={24} />
                    </span>
                </OverlayTrigger>

const playwrightElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Playwright')}
                >
                    <span>
                        <Playwright h={24} w={24} />
                    </span>
                </OverlayTrigger>

const nodejsElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Node.js')}
                >
                    <span>
                        <Nodejs h={24} w={24} />
                    </span>
                </OverlayTrigger>

const expressElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Express.js')}
                >
                    <span>
                        <Express h={24} w={24} />
                    </span>
                </OverlayTrigger>

const awsElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('AWS')}
                >
                    <span>
                        <Aws h={24} w={24} />
                    </span>
                </OverlayTrigger>

const assemblyElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('AssemblyAI')}
                >
                    <span>
                        <Assembly h={24} w={24} />
                    </span>
                </OverlayTrigger>

const mysqlElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('MySQL')}
                >
                    <span>
                        <Mysql h={24} w={24} />
                    </span>
                </OverlayTrigger>

const phpElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('PHP')}
                >
                    <span>
                        <Php h={24} w={24} />
                    </span>
                </OverlayTrigger>

const TailwindElement = <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Tailwind')}
                >
                    <span>
                        <Tailwind h={24} w={24} />
                    </span>
                </OverlayTrigger>


export {
    reactElement,
    nextjsElement,
    sanityElement,
    TailwindElement,
    awsElement,
    mysqlElement,
    nodejsElement,
    expressElement,
    playwrightElement,
    assemblyElement,
    phpElement,
    jsElement
}