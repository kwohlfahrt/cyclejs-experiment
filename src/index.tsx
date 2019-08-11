import * as rx from "rxjs";
import * as op from "rxjs/operators";
import { run } from "@cycle/rxjs-run";
import { makeDOMDriver, DOMSource } from '@cycle/dom'
import * as Snabbdom from 'snabbdom-pragma';

const main = (sources: {
    DOM: DOMSource
}) => {
    const {DOM} = sources;
    const sinks = {
	DOM: DOM.select("button").events("click").pipe(
	    op.startWith(0),
	    op.scan(acc => acc + 1),
	    op.map(i => <div>
		<h1>{`clicked ${i} times`}</h1>
		<button>Click me!</button>
	    </div>
	    ),
	)
    };
    return sinks;
};

const drivers = {
    DOM: makeDOMDriver("#app"),
};

run(main, drivers);
