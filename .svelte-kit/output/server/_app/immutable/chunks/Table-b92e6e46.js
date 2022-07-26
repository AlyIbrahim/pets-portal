import { c as create_ssr_component, j as each, e as escape } from "./index-db601f46.js";
const Table_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-16z256w{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}td.svelte-16z256w,th.svelte-16z256w{border:1px solid #ddd;padding:8px}tr.svelte-16z256w:nth-child(even){background-color:#f2f2f2}tr.svelte-16z256w:hover{background-color:rgb(255, 0, 0)}th.svelte-16z256w{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#e9ac5c;background-color:#ff3e00;color:white}",
  map: null
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animals } = $$props;
  if ($$props.animals === void 0 && $$bindings.animals && animals !== void 0)
    $$bindings.animals(animals);
  $$result.css.add(css);
  return `<h1>Pets</h1>
${animals.length == 0 ? `You have no animals` : `
<table class="${"svelte-16z256w"}"><thead><tr class="${"svelte-16z256w"}">${each(Object.keys(animals[0]), (header) => {
    return `<th class="${"svelte-16z256w"}">${escape(header)}</th>`;
  })}</tr></thead>
	<tbody>${each(Object.values(animals), (row) => {
    return `<tr class="${"svelte-16z256w"}">${each(Object.values(row), (cell) => {
      return `<td class="${"svelte-16z256w"}">${escape(cell)}</td>`;
    })}
			</tr>`;
  })}</tbody></table>`}`;
});
export {
  Table as T
};
