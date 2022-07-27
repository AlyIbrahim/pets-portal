import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component } from "../../_app/immutable/chunks/index-db601f46.js";
import { T as Table } from "../../_app/immutable/chunks/Table-b92e6e46.js";
const Vaccines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const vaccines_service = `${"/vaccines/"}`;
  console.log(vaccines_service);
  const response = fetch(vaccines_service).then((data) => data.json());
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	Fetching ...
`;
    }
    return function(data) {
      return `
	${validate_component(Table, "Table").$$render($$result, { animals: data.Items }, {}, {})}
`;
    }(__value);
  }(response)}`;
});
export {
  Vaccines as default
};
