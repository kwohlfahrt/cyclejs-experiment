import * as rx from "rxjs";
import * as op from "rxjs/operators";
import { run } from "@cycle/rxjs-run";
import { makeDOMDriver } from '@cycle/dom';
import * as Snabbdom from 'snabbdom-pragma';

const main = () => {
    const sinks = {
	DOM: rx.interval(1000).pipe(
	    op.startWith(0),
	    op.scan(acc => acc + 1),
	    op.map(i => <h1>{`${i} seconds elapsed`}</h1>),
	)
    };
    return sinks;
};

const drivers = {
    DOM: makeDOMDriver("#app"),
};

run(main, drivers);
