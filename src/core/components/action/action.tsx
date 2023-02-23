import { Display } from "../display/display";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function Action() {
  return (
    <>
      <Display></Display>
      <span className="number"></span>
      <a href="#" className="call">
        Call
      </a>
      <a href="#" className="hang active">
        Hang
      </a>
    </>
  );
}
